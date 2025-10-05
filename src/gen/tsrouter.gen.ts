// AUTO-GENERATED FILE. DO NOT EDIT MANUALLY.
import { useTSLazy } from "@devwareng/vanilla-ts";

export const NotFound = useTSLazy(() => import("../pages/notfound"))

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

  async function navigate(path: string, pushState: boolean = true) {
    const match = matchRoute(path)
    if (match) {
      await match.component(DOM)
      if (pushState) history.pushState({}, "", path)
    } else {
      NotFound(DOM)
    }
  }

  return { navigate, routes: routeTree }
}
