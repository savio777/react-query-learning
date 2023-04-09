import api from "..";
import { DataUserRepository } from "./types";

const getDataUser = async (): Promise<DataUserRepository[]> => {
  const response = await api.get("/users/savio777/repos");

  return response.data;
};

export default getDataUser;
