// hooks/useProjects.ts
import { useQuery } from '@tanstack/react-query';
import apiClient from '../utils/apiClient';
import { Project } from '../components/types';
import { useBackendStatus } from '../BackendStatusContext';


const fetchProjects = async () => {
  const response = await apiClient.get<{data: Project[]}>('/projects?populate=image')
  return response.data.data;
}

const useProjects = () => {

  const { status: backendStatus } = useBackendStatus();

  return useQuery<Project[], Error> ({
    queryKey: ['projects'],
    queryFn: fetchProjects,
    enabled: backendStatus === "ready",
  });
  } 

  export default useProjects;
