import { getRequest } from "@/libs/utils";

export const getUsers = async () => {
  try {
    const users = getRequest("/users");
    console.log(users);
    return users;
  } catch (error) {
    console.log(error);
  }
};
