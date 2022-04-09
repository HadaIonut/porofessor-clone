import {writable} from "svelte/store";
import {notificationDropSpeed} from "../constants/animations.js";

const createNotificationsStore = () => {
  const {subscribe, set, update} = writable({});

  const remove = (key) => {
    update((prev) => {
      const {[key]: parentValue, ...noChild } = prev;
      return noChild;
    })
  }

  const getRandomId = () => '_' + Math.random().toString(36).substr(2, 9);

  return {
    subscribe,
    update,
    clear: () => set({}),
    remove,
    addNotification: ({type, message, duration = 1000}) => {
      const notificationKey = '123';

      update((prev) => ({
        ...prev,
        [notificationKey]: {
          key: notificationKey,
          type,
          message,
        }
      }))

      setTimeout(() => remove(notificationKey), duration + notificationDropSpeed);
    }
  }
}

let notifications
export default notifications = createNotificationsStore();