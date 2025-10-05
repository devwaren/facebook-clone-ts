// AUTO-GENERATED FILE. DO NOT EDIT MANUALLY.
import { html, useTSElements, useTSLazy } from "@devwareng/vanilla-ts";

export function NotFound(DOM: HTMLElement) {
  return useTSElements(DOM, html`<div class="p-4 animate__animated animate__fadeIn"><h1>404 - Page Not Found</h1></div>`)
}

export const routeTree = [
  { 
  path: "/", 
  name: "index", 
  component: useTSLazy(() => import("../pages/index")) 
}
]

export async function createRouter(DOM: HTMLElement) {
  function matchRoute(path: string) {
    for (const route of routeTree) {
      const keys: string[] = []
      const regex = new RegExp("^" + route.path.replace(/:([^/]+)/g, (_, key) => {
        keys.push(key)
        return "([^/]+)"
      }) + "$")
      const pathname = path.split("?")[0]
      const match = pathname?.match(regex)
      if (match) {
        const params: Record<string, string> = {}
        keys.forEach((key, i) => (params[key] = match[i + 1] || ""))
        return { ...route, params }
      }
    }
    return null
  }

  async function navigate(path: string) {
    const match = matchRoute(path)
    if (match) { await match.component(DOM); history.pushState({}, "", path) }
    else { NotFound(DOM) }
  }

  window.addEventListener("popstate", async () => {
    const path = window.location.pathname + window.location.search
    const match = matchRoute(path)
    if (match) { await match.component(DOM) }
    else { NotFound(DOM) }
  })

  await navigate(window.location.pathname + window.location.search)
  return { navigate, routes: routeTree }
}
