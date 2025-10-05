import { createRouter } from "@/gen/tsrouter.gen";
import { useTSParams } from "@devwareng/vanilla-ts";

export const Router = async (DOM: HTMLElement) => {
  useTSParams.getState();
  const router = createRouter(DOM);
  (await router).navigate(window.location.pathname);

  window.addEventListener("popstate", async () => {
    (await router).navigate(window.location.pathname);
  });
};