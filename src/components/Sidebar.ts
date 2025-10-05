import { html, useTSElements } from '@devwareng/vanilla-ts'

export default function Sidebar(DOM: HTMLElement) {

    const ui = useTSElements(
        DOM,
        html`
        <div class="flex flex-col max-w-[400px]">
            <div class="flex gap-4 items-center hover:bg-inputslate p-2 rounded-md">
                <img src="/profile.webp" alt="profile image" width="48" height="48" class="w-10 h-10 rounded-full">
                <p>Waren Gador</p>
            </div>
            <div class="flex gap-4 items-center hover:bg-inputslate p-2 rounded-md">
                <img src="/meta.webp" alt="profile image" width="44" height="44" class="w-10 h-10 rounded-full">
                <p>Meta AI</p>
            </div>
            <div class="flex gap-4 items-center hover:bg-inputslate p-2 rounded-md">
                <div class="bg-icons w-10 h-10 bg-friends bg-no-repeat"></div>
                <p>Friends</p>
            </div>
            <div class="flex gap-4 items-center hover:bg-inputslate p-2 rounded-md">
                <img src="/dashboard.webp" alt="profile image" width="44" height="44" class="w-10 h-10 rounded-full">
                <p>Professional Dashboard</p>
            </div>
            <div class="flex gap-4 items-center hover:bg-inputslate p-2 rounded-md">
                <img src="/feeds.webp" alt="profile image" width="44" height="44" class="w-10 h-10 rounded-full">
                <p>Feeds</p>
            </div>
            <div class="flex gap-4 items-center hover:bg-inputslate p-2 rounded-md">
                <div class="bg-icons w-10 h-10 bg-groups bg-no-repeat"></div>
                <p>Groups</p>
            </div>
            <div class="flex gap-4 items-center hover:bg-inputslate p-2 rounded-md">
                <div class="mx-1 w-8 h-8 bg-inputslate rounded-full grid place-items-center">
                    <span class="bx bx-chevron-down text-2xl"></span>
                </div>
                <p>See more</p>
            </div>
            <div class="w-full h-[1px] bg-lightslate my-3"></div>
        
            <div class="flex flex-col gap-1">
                <div class="flex justify-between items-center group">
                    <p class="pl-3 text-lg text-gray-400 font-semibold">Your Shortcuts</p>
                    <button
                        class="hidden group-hover:block hover:bg-inputslate rounded-md px-3 py-1 text-sm text-blue-400">Edit</button>
                </div>
                <div class="flex gap-4 items-center hover:bg-inputslate rounded-md px-3 py-2">
                    <img src="/magiclogo.webp" alt="profile image" width="44" height="44" class="w-10 h-10 rounded-full">
                    <p>Magic 89.9</p>
                </div>
                <div class="flex gap-4 items-center hover:bg-inputslate rounded-md px-3 py-2">
                    <img src="/programmer.webp" alt="profile image" width="44" height="44" class="w-10 h-10 rounded-md">
                    <p>Programmer CodePosting</p>
                </div>
                <div class="flex gap-4 items-center hover:bg-inputslate rounded-md px-3 py-2">
                    <img src="/minecraft.webp" alt="profile image" width="44" height="44" class="w-10 h-10 rounded-md">
                    <p>Minecraft Community SMP</p>
                </div>
                <div class="flex gap-4 items-center hover:bg-inputslate rounded-md px-3 py-2">
                    <img src="/concert.webp" alt="profile image" width="44" height="44" class="w-10 h-10 rounded-md">
                    <p>Concert Buy and Sell</p>
                </div>
                <div class="flex gap-4 items-center hover:bg-inputslate rounded-md px-3 py-2">
                    <img src="/cat.webp" alt="profile image" width="44" height="44" class="w-10 h-10 rounded-md">
                    <p>Cat Community Cuddle</p>
                </div>
                <div class="flex gap-4 items-center hover:bg-inputslate p-2 rounded-md">
                    <div class="mx-1 w-8 h-8 bg-inputslate rounded-full grid place-items-center">
                        <span class="bx bx-chevron-down text-2xl"></span>
                    </div>
                    <p>See more</p>
                </div>
            </div>
        
            <div class="mt-10 pl-3 text-sm text-gray-300 flex gap-2 flex-wrap">
                <a href="#">Privacy</a> • <a href="#">Terms</a> • <a href="#">Advertising</a> • <a href="#">Ad Choices</a> •
                <a href="#">Cookies</a> • <a href="#">More</a>
            </div>
        </div>
    `
    );
    return ui
}