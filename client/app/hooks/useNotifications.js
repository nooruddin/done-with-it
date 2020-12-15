import * as Notifications from "expo-notifications";
import * as Permissions from "expo-permissions";
import { useEffect } from "react";
import expoPushTokensApi from "../api/expoPushTokens";
import logger from "../utils/logger";

const useNotifications = (notificationListener) => {
  useEffect(() => {
    registerForPushNotifications();

    if (notificationListener)
      Notifications.addNotificationReceivedListener(notificationListener);
  }, []);

  const registerForPushNotifications = async () => {
    try {
      const permission = await Permissions.askAsync(Permissions.NOTIFICATIONS);
      if (!permission.granted) return;

      const token = await Notifications.getExpoPushTokenAsync();
      expoPushTokensApi.register(token.data);
      logger.log(token.data);
    } catch (error) {
      logger.log("Error getting a push token", error);
    }
  };
};

export default useNotifications;
