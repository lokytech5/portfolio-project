import { useQuery } from "@tanstack/react-query";
import apiClient from "../utils/apiClient";
import { AboutMeAttributes, AboutMeResponse } from "../components/types";


const fetchAboutMe = async () => {
    const response = await apiClient.get<AboutMeResponse>('/about-mes?populate=image');
    return response.data.data[0].attributes;
  };

  const useAboutMe = () => {
    return useQuery<AboutMeAttributes, Error>({
      queryKey: ['about-me'],
      queryFn: fetchAboutMe,
    });
  };
  
  export default useAboutMe;