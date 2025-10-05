import { html, useTSElements } from '@devwareng/vanilla-ts'
import { useScroller } from '@/hooks/useScroller'

export default function Reels(DOM: HTMLElement) {
    const ui = useTSElements(
        DOM,
        html`
    <div id="reels-scroll" class="flex gap-3 overflow-x-auto no-scrollbar w-full cursor-grab scroll-smooth rounded-lg">
    
        <!-- Your Story -->
    
        <div class="flex-shrink-0 rounded-lg w-[120px] h-[220px] overflow-hidden relative bg-darkslate"> <img
                src="/large-profile.webp" alt="profile" class="object-cover w-full h-full">
            <div class="bg-dark h-[60px] absolute bottom-0 w-full flex items-center justify-center">
                <div class="relative text-center"> <button
                        class="bg-blue-700 w-10 h-10 flex items-center justify-center rounded-full absolute -top-5 left-1/2 transform -translate-x-1/2">
                        <span class="bx bx-plus text-white text-xl"></span> </button>
                    <p class="mt-6 font-semibold text-sm">Create a Story</p>
                </div>
            </div>
        </div>
    
        <!-- Story Cards -->
        ${Array.from({ length: 8 })
              .map(() => html`
        <div class="flex-shrink-0 rounded-lg w-[120px] h-[220px] bg-darkslate overflow-hidden">
            <img src="/large-profile.webp" class="w-full h-full object-cover">
        </div>
        `).join('')}
    </div>
    `
    )

    const scroller = DOM.querySelector<HTMLElement>("#reels-scroll")!
    useScroller(scroller)

    return ui
}
