import axios from "axios";

const api = axios.create({
      baseURL: "https://acima-10-reais-api.herokuapp.com/",
});

export default api;