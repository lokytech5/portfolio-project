// hooks/useProjects.ts
import { useQuery } from '@tanstack/react-query';
import apiClient from '../utils/apiClient';

interface Project {
  id: number;
  title: string;
  description: string;
  image: {
    url: string;
  };
  githubLink: string;
  liveLink: string;
  techStack: string[];
}

const fetchProjects = async (): Promise<Project[]> => {
  try {
    const response = await apiClient.get('/project');
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error('Error fetching projects:', error);
    throw error;
  }
};

export const useProjects = () => {
  return useQuery<Project[]>(['projects'], fetchProjects);
};
