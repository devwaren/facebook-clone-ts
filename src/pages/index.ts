import { Hero, Rightbar, Sidebar } from '@/components';
import { html, useTSCollection, useTSElements, useTSMetaData } from '@devwareng/vanilla-ts';

export default function Index(DOM: HTMLElement) {
  useTSMetaData({
    name: 'index',
    description: '',
    author: '',
    title: 'Facebook Clone',
  });


  const ui = useTSElements(
    DOM,
    html`
      <div class="p-2 animate__animated animate__fadeIn duration-300 flex justify-between min-w-full">
        <div id="sidebar" class="sticky top-0 hidden lg:block"></div>
        <div id="main" class="flex-1 w-full lg:max-w-[700px] px-2"></div>
        <div id="rightbar" class="w-[320px] hidden lg:block"></div>
      </div>
    `
  );

  const sections = ["sidebar", "main", "rightbar"]
  const components = [Sidebar, Hero, Rightbar]
  useTSCollection(sections, DOM, components)

  return ui
}