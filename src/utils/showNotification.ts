import Notification from "@/components/base/notification/Notification.vue";
import { createApp } from "vue";

export default function showNotification(content: string, type: string) {
  // 将Notification组件挂载到body上
  const notificationContainerElem = document.createElement("div");
  notificationContainerElem.style.position = "absolute";
  notificationContainerElem.style.top = "0";
  notificationContainerElem.style.left = "50%";
  notificationContainerElem.style.zIndex = "10000";
  const app = createApp(Notification, {
    content,
    type,
  });
  app.mount(notificationContainerElem);
  // 添加到body最前面
  document.body.prepend(notificationContainerElem);
}
