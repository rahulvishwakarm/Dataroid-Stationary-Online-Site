import axios from "axios";

const Instance = axios.create({
    baseURL:'http://localhost:5001/stationary-9b162/us-central1/api' //The API(colud function) Url
});

export default Instance;