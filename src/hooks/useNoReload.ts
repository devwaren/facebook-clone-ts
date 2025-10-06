import { useAnchor } from "@devwareng/vanilla-ts"

const useNoReload = (DOM: HTMLElement) => {
    const anchor = DOM.querySelectorAll('a') as NodeListOf<HTMLAnchorElement>
    return useAnchor(anchor)
}

export { useNoReload }