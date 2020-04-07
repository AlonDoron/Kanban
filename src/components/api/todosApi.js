import { handleResponse, handleError } from "./apiUtils";
import { apiConfig } from "../../config";

const BASE_SERVER_URL = apiConfig.SERVER_URL;

let getTodos = () => {
  return fetch(`${BASE_SERVER_URL}/todos`, apiConfig.HEADERS)
    .then((response) => handleResponse(response))
    .catch(handleError);
};

let todosApi = {
  getTodos,
};

export default todosApi;
