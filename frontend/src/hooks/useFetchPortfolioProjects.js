import { useState, useEffect } from "react";
import axios from "axios";

// Custom hook for fetching protfolio projects from api
const useFetchPortfolioProjects = (id) => {
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
        // If an id is provided, fetch the specific project; otherwise, fetch all projects
        const endpoint = id
          ? `http://127.0.0.1:8000/api/projects/${id}/`
          : "http://127.0.0.1:8000/api/projects/";

        const { data } = await axios.get(endpoint);
        console.log("API response data:", data);

        // setting data depending on whether for detail page or all projects
        if (id) {
          setProjectsData(data);
        } else {
          setProjectsData(data.results);
        }

        // setProjectsData(data.results);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching projects:", error);
        setError("Failed to fetch projects");
        setIsLoading(false);
      }
    };

    fetchSkills();
  }, [id]);

  return { projectsData, isLoading, error };
};

export default useFetchPortfolioProjects;
