import { html, useTSCollection, useTSElements, useTSSSRHydration } from '@devwareng/vanilla-ts'
import { Router } from './routes/__root';
import "./index.css"
import { Navbar } from './components';

export default function App(DOM?: HTMLElement) {

  const { isDOM } = useTSSSRHydration(DOM!)
  if (!isDOM) return ''

  const ui = useTSElements(
    isDOM,
    html`
      <div class="min-h-screen text-white bg-darkslate no-scrollbar">
        <div id="navbar"></div>
        <div id="routes" class="no-scrollbar pt-14"></div>
      </div>
    `
  )


  const sections = ["navbar", "routes"]
  const components = [Navbar, Router]
  useTSCollection(sections, isDOM, components)
  return ui
}