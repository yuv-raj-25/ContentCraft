import {
    LogOutIcon,
    MenuIcon,
    LayoutDashboardIcon,
    Share2Icon,
    UploadIcon,
    ImageIcon,
  } from "lucide-react";
 import Logo from "../public/Logo1.png" 
 
 
  const sidebarItems = [
    { href: "/home", icon: LayoutDashboardIcon, label: "Home Page" },
    { href: "/social-share", icon: Share2Icon, label: "Social Share" },
    { href: "/video-upload", icon: UploadIcon, label: "Video Upload" },
  ]; 



  export const ContentLogo = Logo;
  export { sidebarItems };