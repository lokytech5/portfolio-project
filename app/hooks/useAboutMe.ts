import { useQuery } from "@tanstack/react-query";
import apiClient from "../utils/apiClient";
import { AboutMeAttributes, AboutMeResponse } from "../components/types";
import { useBackendStatus } from "../BackendStatusContext";

const fetchAboutMe = async () => {
  const response = await apiClient.get<AboutMeResponse>('/about-mes?populate=image');
  return response.data.data[0].attributes;
};

const useAboutMe = () => {
  const { status: backendStatus } = useBackendStatus();

  return useQuery<AboutMeAttributes, Error>({
    queryKey: ['about-me'],
    queryFn: fetchAboutMe,
    enabled: backendStatus === "ready",
  });
};

export default useAboutMe;
