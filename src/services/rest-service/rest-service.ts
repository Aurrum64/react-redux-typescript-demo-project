import axios from "axios";
import { InfoItem } from "../../modules/tanstack-storage/components/tanstack-storage";

export default class RestService {
  getInfo = async (): Promise<InfoItem[]> => {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/users?_limit=10"
    );
    return response.data as InfoItem[];
  };
}
