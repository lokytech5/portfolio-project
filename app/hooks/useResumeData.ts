import { useQuery } from '@tanstack/react-query';
import apiClient from '../utils/apiClient';
import { ResumeData } from '../components/types';
import { useBackendStatus } from '../BackendStatusContext';

const fetchResumeData = async (): Promise<ResumeData> => {
  const [
    programmingLanguages,
    frameworks,
    databases,
    cloudTechnologies,
    educations,
    experiences
  ] = await Promise.all([
    apiClient.get('/programming-languages'),
    apiClient.get('/frameworks?populate=image'),
    apiClient.get('/databases'),
    apiClient.get('/cloud-technologies?populate=image'),
    apiClient.get('/educations'),
    apiClient.get('/experiences')
  ]);

  return {
    programmingLanguages: programmingLanguages.data.data,
    frameworks: frameworks.data.data,
    databases: databases.data.data,
    cloudTechnologies: cloudTechnologies.data.data,
    educations: educations.data.data,
    experiences: experiences.data.data
  };
};

const useResumeData = () => {
  const { status: backendStatus } = useBackendStatus();

  return useQuery<ResumeData, Error>({
    queryKey: ['resumeData'],
    queryFn: fetchResumeData,
    enabled: backendStatus === "ready",
    refetchOnWindowFocus: false,

  });
};

export default useResumeData;
