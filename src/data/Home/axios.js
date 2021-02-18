import axios from "axios";

const Instance = axios.create({
    baseURL:'http://localhost:5001/dataroid-stationary/us-central1/api' //The API(colud function) Url
});

export default Instance;