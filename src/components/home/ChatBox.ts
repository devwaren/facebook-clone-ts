import { html, useTSElements } from '@devwareng/vanilla-ts'

export default function ChatBox(DOM: HTMLElement) {

    const ui = useTSElements(
        DOM,
        html`
        <div class="bg-dark px-4 py-3 rounded-lg">
            <div class="flex items-center gap-2">
                <img src="/profile.webp" alt="profile image" width="48" height="48" class="rounded-full">
                <input type="text" class="bg-inputslate px-4 py-3 rounded-full flex-1" placeholder="What's on your mind?">
            </div>
            <div class="bg-inputslate h-[1px] my-4"></div>
            <div class="grid grid-cols-3 h-[50px]">
                <div class="flex gap-2 items-center justify-center hover:bg-inputslate rounded-md">
                    <img src="/play-video.webp" alt="">
                    <p>Live video</p>
                </div>
                <div class="flex gap-2 items-center justify-center hover:bg-inputslate rounded-md">
                    <img src="/upload-img.webp" alt="">
                    <p>Live video</p>
                </div>
                <div class="flex gap-2 items-center justify-center hover:bg-inputslate rounded-md">
                    <img src="/reels.webp" alt="">
                    <p>Reels</p>
                </div>
            </div>
        </div>
`
    );
    return ui
}