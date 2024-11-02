import { useState, useEffect } from "react";
import axios from "axios";

// Custom hook for fetching protfolio projects from api
const useFetchPortfolioProjects = () => {
  // State management for projects
  const [projectsData, setProjectsData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  // useEffect hook to fetch skills from api
  useEffect(() => {
    // Fetch the project data from the API
    const fetchSkills = async () => {
      setIsLoading(true);
      try {
        const { data } = await axios.get("http://127.0.0.1:8000/api/projects/");
        console.log("API response data:", data);

        setProjectsData(data.results);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching projects:", error);
        setError("Failed to fetch projects");
        setIsLoading(false);
      }
    };

    fetchSkills();
  }, []);

  return { projectsData, isLoading, error };
};

export default useFetchPortfolioProjects;
