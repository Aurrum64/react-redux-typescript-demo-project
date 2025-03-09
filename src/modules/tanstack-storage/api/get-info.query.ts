import { useQuery } from "@tanstack/react-query";
import { RestService } from "../../../services/rest-service";
import { InfoItem } from "../components/tanstack-storage";

export const useGetInfoQuery = (restService: RestService) => {
  const { getInfo } = restService;

  return useQuery<InfoItem[]>({
    queryKey: ["GET_INFO"],
    queryFn: () => getInfo(),
  });
};
