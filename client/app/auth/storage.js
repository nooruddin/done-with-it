import * as SecureStore from "expo-secure-store";
import jwtDecode from "jwt-decode";
import logger from "../utils/logger";

const key = "authToken";
const storeToken = async (authToken) => {
  try {
    await SecureStore.setItemAsync(key, authToken);
  } catch (error) {
    logger.log("Error storing the auth token ", error);
  }
};

const getUser = async () => {
  const token = await getToken();
  return token ? jwtDecode(token) : null;
};

const getToken = async () => {
  try {
    return await SecureStore.getItemAsync(key);
  } catch (error) {
    logger.log("Error getting the auth token ", error);
  }
};

const removeToken = async () => {
  try {
    await SecureStore.deleteItemAsync(key);
  } catch (error) {
    logger.log("Error deleting the auth token ", error);
  }
};

export default {
  getToken,
  getUser,
  storeToken,
  removeToken,
};
