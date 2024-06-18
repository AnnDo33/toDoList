import axios from "axios";

const instance = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
});

axios.post("http://localhost:3310/api/tasks", {
  id_status: "",
  task: "",
  deadline: "",
  who: "",
});
export default instance;
