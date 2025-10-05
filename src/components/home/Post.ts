import { html, useTSElements } from '@devwareng/vanilla-ts'

export default function Post(DOM: HTMLElement) {

    const ui = useTSElements(
        DOM,
        html`
        <div class="">
            <div class="bg-dark w-full rounded-lg">
                <div class="px-4 py-3">
                    <div class="flex items-center justify-between">
                        <div class="flex items-center gap-2">
                            <img src="/cat.webp" alt="profile" width="48" height="48" class="w-12 h-12 rounded-full">
                            <div>
                                <h2>Cat Community Cuddle</h2>
                                <p class="text-sm text-gray-300"><span>Sofie </span>• 2 hours ago <span
                                        class="bx bx-globe-alt"></span>
                                </p>
                            </div>
                        </div>
        
                        <div class="flex items-center gap-2 text-xl">
                            <button><span class="bx bx-dots-horizontal-rounded"></span></button>
                            <button><span class="bx bx-x"></span></button>
                        </div>
                    </div>
                </div>
                <div>
                    <img src="/post.webp" alt="" width="100px" height="100px" class="w-full">
                </div>
                <div class="px-4 py-3 flex items-center justify-between">
                    <div class="flex">
                        <img src="/haha.svg" alt="" width="20" height="20" class="relative z-30">
                        <img src="/like.svg" alt="" width="20" height="20" class="-ml-2 relative z-20">
                        <img src="/heart.svg" alt="" width="20" height="20" class="-ml-2 relative z-10">
                        <p>15k</p>
                    </div>
                    <div>
                        <p class=" text-gray-300">125k comments</p>
                    </div>
                </div>
            </div>
        </div>
        `
    );
    return ui
}