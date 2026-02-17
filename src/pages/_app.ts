import type { App } from "vue";
import Vue3Toastify, { type ToastContainerOptions } from "vue3-toastify";

export default (app: App) => {
  app.use(Vue3Toastify, {
    autoClose: 3000,
    theme: "colored",
  } as ToastContainerOptions);
};
