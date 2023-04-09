import api from "..";
import { DataUser } from "./types";

const getDataUser = async (): Promise<DataUser> => {
  const response = await api.get("/users/savio777");

  return response.data;
};

export default getDataUser;
