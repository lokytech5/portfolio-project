// hooks/useProjects.ts
import { useQuery } from '@tanstack/react-query';
import apiClient from '../utils/apiClient';
import { Project } from '../components/types';



const useProjects = () => {

  const fetchProjects = async () => {
    const response = await apiClient.get<{data: Project[]}>('/projects?populate=image')
    return response.data.data;
  }
  return useQuery<Project[], Error> ({
    queryKey: ['projects'],
    queryFn: fetchProjects,
  });
  } 

  export default useProjects;
