import axios from "axios";

export default class RestService {

    getInfo = async () => {
        const response = await axios.get('https://jsonplaceholder.typicode.com/users?_limit=10');
        return response.data;
    };
}