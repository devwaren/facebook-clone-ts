import { html, useTSElements } from '@devwareng/vanilla-ts'

export default function Navbar(DOM: HTMLElement) {


    const ui = useTSElements(
        DOM,
        html`
        <div class="px-4 py-1 bg-dark flex justify-between items-center border-1 border-lightslate fixed w-full z-[99]">
            <div class="flex items-center gap-4">
                <span class="bx bxl-facebook-circle text-4xl text-blue-600 bg-white rounded-full"></span>
                <div class="bg-inputslate rounded-full px-2 flex items-center gap-2">
                    <span class="bx bx-search text-2xl py-2 lg:py-0"></span>
                    <input type="text" placeholder="Search facebook" class="py-2 outline-none hidden lg:block">
                </div>
            </div>
        
            <div class="min-w-[700px] grid-cols-5 gap-1 text-3xl hidden lg:grid">
                <a href="/" class="hover:bg-inputslate grid place-items-center rounded-md h-full py-2"><span
                        class="bx bxs-home"></span></a>
                <a href="/dashboard" class="hover:bg-inputslate grid place-items-center rounded-md h-full py-2"><span
                        class="bx bxs-dashboard"></span></a>
                <a href="/watch" class="hover:bg-inputslate grid place-items-center rounded-md h-full py-2"><span
                        class="bx bx-desktop"></span></a>
                <a href="/marketplace" class="hover:bg-inputslate grid place-items-center rounded-md h-full py-2"><span
                        class="bx bx-store-alt"></span></a>
                <a href="/games" class="hover:bg-inputslate grid place-items-center rounded-md h-full py-2"><span
                        class="bx bxs-joystick-alt"></span></a>
            </div>
        
            <div class="text-3xl flex items-center gap-1">
                <a href="#"><span class="bx bxs-grid bg-inputslate p-2 rounded-full"></span></a>
                <a href="#"><span class="bx bxl-messenger bg-inputslate p-2 rounded-full"></span></a>
                <a href="#"><span class="bx bx-bell bg-inputslate p-2 rounded-full"></span></a>
                <a href="#" class="relative inline-block">
        
                    <img src="/profile.webp" alt="profile image" width="48" height="48"
                        class="w-12 h-12 rounded-full bg-inputslate p-1 z-[-1]">
                    <span
                        class="bx bx-chevron-down absolute bottom-0 right-0 text-white text-lg z-10 bg-inputslate rounded-full"></span>
                </a>
            </div>
        </div>
        `
    );
    return ui
}