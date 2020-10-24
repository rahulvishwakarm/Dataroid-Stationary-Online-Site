import axios from "axios";

const Instance = axios.create({
    baseURL:'http://localhost:5001/stationary-online-store/us-central1/api' //The API(colud function) Url
});

export default Instance;