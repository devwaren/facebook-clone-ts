// hooks/useScroller.ts
export function useScroller(el: HTMLElement) {
    if (!el) return

    let isDown = false
    let startX = 0
    let scrollLeft = 0
    let velX = 0
    let rafId: number

    // Mouse Down
    const onPointerDown = (e: MouseEvent | TouchEvent) => {
        isDown = true
        el.classList.add("cursor-grabbing")

        const pageX = e instanceof MouseEvent ? e.pageX : e.touches[0]?.pageX || 0
        startX = pageX - el.offsetLeft
        scrollLeft = el.scrollLeft

        cancelAnimationFrame(rafId) // stop inertia when dragging
    }

    // Mouse Move
    const onPointerMove = (e: MouseEvent | TouchEvent) => {
        if (!isDown) return
        e.preventDefault()

        const pageX = e instanceof MouseEvent ? e.pageX : e.touches[0]?.pageX || 0
        const x = pageX - el.offsetLeft
        const walk = (x - startX) * 1.5 // multiplier = scroll speed

        const newScrollLeft = scrollLeft - walk
        velX = newScrollLeft - el.scrollLeft
        el.scrollLeft = newScrollLeft
    }

    // Mouse Up / Leave
    const endDrag = () => {
        if (!isDown) return
        isDown = false
        el.classList.remove("cursor-grabbing")
        inertiaScroll()
    }

    // Inertia
    function inertiaScroll() {
        if (Math.abs(velX) < 0.5) return
        el.scrollLeft += velX
        velX *= 0.95 // friction
        rafId = requestAnimationFrame(inertiaScroll)
    }

    // Attach events
    el.addEventListener("mousedown", onPointerDown)
    el.addEventListener("mousemove", onPointerMove)
    el.addEventListener("mouseup", endDrag)
    el.addEventListener("mouseleave", endDrag)

    // Mobile support
    el.addEventListener("touchstart", onPointerDown, { passive: true })
    el.addEventListener("touchmove", onPointerMove, { passive: false })
    el.addEventListener("touchend", endDrag)

    // Cleanup
    return () => {
        el.removeEventListener("mousedown", onPointerDown)
        el.removeEventListener("mousemove", onPointerMove)
        el.removeEventListener("mouseup", endDrag)
        el.removeEventListener("mouseleave", endDrag)

        el.removeEventListener("touchstart", onPointerDown)
        el.removeEventListener("touchmove", onPointerMove)
        el.removeEventListener("touchend", endDrag)

        cancelAnimationFrame(rafId)
    }
}
