import * as Notifications from "expo-notifications";

export type NotificationSubscription = Notifications.Subscription;
export type Notification = Notifications.Notification;

export function setNotificationHandler() {
  Notifications.setNotificationHandler({
    handleNotification: async () => ({
      shouldShowAlert: true,
      shouldPlaySound: true,
      shouldSetBadge: true,
    }),
  });
}

export function addNotificationReceivedListener(
  setNotification: (notification: Notification | undefined) => void,
) {
  Notifications.addNotificationReceivedListener((notification) => {
    setNotification(notification);
  });
}

export function addNotificationResponseReceivedListener(
  notificationListener: React.MutableRefObject<NotificationSubscription>,
  responseListener: React.MutableRefObject<NotificationSubscription>,
) {
  notificationListener.current = responseListener.current =
    Notifications.addNotificationResponseReceivedListener((response) => {
      console.log(response);
    });
}

export function removeNotificationReceivedListener(
  notificationListener: React.MutableRefObject<NotificationSubscription>,
  responseListener: React.MutableRefObject<NotificationSubscription>,
) {
  notificationListener.current &&
    Notifications.removeNotificationSubscription(notificationListener.current);
  responseListener.current &&
    Notifications.removeNotificationSubscription(responseListener.current);
}

export async function requestPermissionsAsync() {
  return await Notifications.requestPermissionsAsync({
    ios: {
      allowAlert: true,
      allowBadge: true,
      allowSound: true,
      allowAnnouncements: true,
    },
  });
}

export async function schedulePushNotification(
  title: string,
  body: string,
  seconds: number = 60,
) {
  await Notifications.scheduleNotificationAsync({
    content: {
      title,
      body,
    },
    trigger: { seconds: seconds },
  });
}
