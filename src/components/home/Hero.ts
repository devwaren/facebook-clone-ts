import { html, useTSCollection, useTSElements } from '@devwareng/vanilla-ts'
import ChatBox from './ChatBox';
import Reels from './Reels';
import Post from './Post';

export default function Hero(DOM: HTMLElement) {
    const ui = useTSElements(
        DOM,
        html`
    <div class="flex flex-col flex-1 py-2 gap-4 max-h-[calc(100vh-100px)] overflow-y-auto no-scrollbar">
        <div id="chat-box"></div>
        <div id="reels"></div>
        <div id="post"></div>
    </div>
    `
    );

    const section = ["chat-box", "reels", "post"];
    const components = [ChatBox, Reels, Post];
    useTSCollection(section, DOM, components);

    return ui;
}
