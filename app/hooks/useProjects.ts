
import { useQuery } from '@tanstack/react-query';
import apiClient from '../utils/apiClient';

const fetchProjects = async () => {
  try {
    const response = await apiClient.get('/projects');
    return response.data;
  } catch (error) {
    console.error('Error fetching projects:', error);
    throw error;
  }
};

export const useProjects = () => {
  return useQuery(['projects'], fetchProjects);
};
