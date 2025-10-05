import { createRouter } from "@/gen/tsrouter.gen";
import { useTSParams } from "@devwareng/vanilla-ts";

export const Router = async (DOM: HTMLElement) => {
  useTSParams.getState();
  const router = await createRouter(DOM);

  // initial navigation
  await router.navigate(window.location.pathname + window.location.search);

  // back/forward navigation
  window.addEventListener("popstate", () => {
    void router.navigate(window.location.pathname + window.location.search, false);
  });
};