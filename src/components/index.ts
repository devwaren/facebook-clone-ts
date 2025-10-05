import { useTSLazy } from "@devwareng/vanilla-ts";

export const Sidebar = useTSLazy(() => import("./Sidebar"));
export const Rightbar = useTSLazy(() => import("./Rightbar"));
export const Hero = useTSLazy(() => import("./home/Hero"));
export const Navbar = useTSLazy(() => import("./Navbar"));