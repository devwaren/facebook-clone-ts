import { html, useTSElements, useTSMetaData, useTSNavigate, useTSNoReload } from "@devwareng/vanilla-ts";

export default function Notfound(DOM: HTMLElement) {

  useTSMetaData({
    title: "Facebook Clone | Not found 404",
    description: "Notfound",
    author: "Dev Waren",
  });

  const navigate = useTSNavigate();

  const ui = useTSElements(
    DOM,
    html`
    <div class="min-h-screen grid place-items-center animate__animated animate__fadeIn">
      <div class="max-w-[600px] flex flex-col items-center justify-center">
        <img src="/lock.png" alt="">
        <h1 class="text-gray-400 font-semibold text-lg">This content isn't available at the moment</h1>
        <p class="leading-5 text-center">When this happens, it's usually because the owner only shared it with a small group of people or changed who can see it, or it's been deleted.</p>
        <a href="/" class="px-4 py-3 bg-blue-600 text-white rounded-md font-semibold my-2">Go to Feed</a>
       <div class="text-blue-400 flex flex-col items-center gap-2 font-semibold">
         <button data-click="goBack">Go Back</button>
        <a href="/help">Visit Help Centre</a>
       </div>
      </div>
    </div>
  `, {
    goBack: () => navigate.back()
  })

  useTSNoReload(DOM)
  return ui;
}