import { html, useTSElements } from '@devwareng/vanilla-ts'

export default function Rightbar(DOM: HTMLElement) {

    const contactCard = () => {
        return Array.from({ length: 10 }).map(() => html`
                    <div class="flex items-center gap-4 my-2 text-sm">
                        <img src="/cat.webp" alt="" width="40" height="40" class="w-10 h-10 rounded-full">
                        <p>Sofie The Cat</p>
                    </div>`).join("")
    }
    const communityCard = () => {
        return Array.from({ length: 10 }).map(() => html`
                    <div class="flex items-center gap-4 my-2 text-sm">
                        <img src="/cat.webp" alt="" width="40" height="40" class="w-10 h-10 rounded-full">
                        <div>
                            <p>Cat Community Cuddle</p>
                            <p class="text-sm text-gray-300">Cat Community Philippines</p>
                        </div>
                    </div>`).join("")
    }

    const ui = useTSElements(
        DOM,
        html`
        <div class="pt-2 pr-3 max-h-[calc(100vh-100px)] overflow-y-scroll overflow-x-hidden">
            <div>
                <div class="flex items-center justify-between pb-4">
                    <p>Friend Requests</p>
                    <a href="#" class="text-blue-400">See all</a>
                </div>
                <div class="flex items-start gap-4 w-full">
                    <img src="/cat.webp" alt="" width="90" height="90" class="w-14 h-14 rounded-full">
                    <div class='flex-1'>
                        <div class="flex items-center justify-between">
                            <p class="font-semibold">Sofie The Cat</p>
                            <p class="text-sm text-gray-300">5d</p>
                        </div>
                        <div class="flex items-center">
                            <img src="/cat.webp" alt="mutual" width="20" height="20" class="z-10 w-3 h-3 rounded-full">
                            <img src="/cat.webp" alt="mutual" width="20" height="20" class="z-9 -ml-1 w-3 h-3 rounded-full">
                            <img src="/cat.webp" alt="mutual" width="20" height="20" class="-ml-1 w-3 h-3 rounded-full">
                            <p class="text-sm text-gray-300 ml-2">3 mutual friends</p>
                        </div>
                        <div class="h-[40px] grid grid-cols-2 gap-2 mt-2">
                            <button class="bg-blue-600 rounded-lg">Confirm</button>
                            <button class="bg-dark rounded-lg">Delete</button>
                        </div>
                    </div>
                </div>
                <div class="bg-lightslate h-[1px] my-4"></div>
                <div>
                    <div class="flex justify-between items-center">
                        <p>Contacts</p>
                        <div>
                            <span class="bx bx-search"></span>
                            <span class="bx bx-dots-horizontal-rounded"></span>
                        </div>
                    </div>
                    ${contactCard()}
        
                    <div class="bg-lightslate h-[1px] my-4"></div>
                    <div>
                        <div class="flex justify-between items-center">
                            <p>Community Chats</p>
                            <div>
                                <span class="bx bx-dots-horizontal-rounded"></span>
                            </div>
                        </div>
                        ${communityCard()}
                    </div>
                </div>
            </div>
        </div>
`
    );
    return ui
}