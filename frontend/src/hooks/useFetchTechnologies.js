import { useState, useEffect } from "react";
import axios from "axios";

// custom hook for fetching technologies from custom api
const useFetchTechnologies = () => {
  // State management for skills
  const [skillsData, setSkillsData] = useState({
    frontendSkills: [],
    backendSkills: [],
    toolsSkills: [],
  });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  // useEffect hook to fetch skills from api
  useEffect(() => {
    // Fetch the skills data from the API
    const fetchSkills = async () => {
      setIsLoading(true);
      try {
        const { data } = await axios.get(
          "https://sam-scarisbrick-13b7fd9648a6.herokuapp.com/api/technologies/"
        );
        // console.log("API response data:", data);

        // Organize skills by skill_type
        const organizedSkills = {
          frontendSkills: data.results
            .filter((skill) => skill.skill_type === "Frontend")
            .map((skill) => skill.name),
          backendSkills: data.results
            .filter((skill) => skill.skill_type === "Backend")
            .map((skill) => skill.name),
          toolsSkills: data.results
            .filter((skill) => skill.skill_type === "Tools")
            .map((skill) => skill.name),
        };

        setSkillsData(organizedSkills);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching skills:", error);
        setError("Failed to fetch technologies");
        setIsLoading(false);
      }
    };

    fetchSkills();
  }, []);

  return { skillsData, isLoading, error };
};

export default useFetchTechnologies;
