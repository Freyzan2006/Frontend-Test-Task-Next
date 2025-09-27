"use client";

import { HomeIcon } from "@ui-kit/icons/home.icon";
import { SideBar } from "./Sidebar";
import { SettingIcon } from "@ui-kit/icons/setting.icon";
import { usePathname } from "next/navigation";
import { AlbumsIcon } from "@ui-kit/icons/albums.icon";
import { UserIcon } from "@ui-kit/icons/user.icon";








export const SideBarContainer: React.FC = () => {
  const path = usePathname();


  const sidebarItems = [
    {
      id: 'home',
      label: 'Главная',
      icon: (
        <HomeIcon />
      ),
      href: '/',
      active: path === '/',
    },
    {
      id: 'albums',
      label: 'Альбомы',
      href: '/albums',
      icon: (
        <AlbumsIcon />
      ),
      active: path === '/albums',
    },
    {
      id: "profile",
      label: "Профиль",
      href: "/profile",
      active: path === "/profile",
      icon: (
        <UserIcon />
      )
    }
  ];

  const sidebarHeader = {
    title: 'Моя компания',
    subtitle: 'Администратор',
    avatar: (
      <div className="p-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-semibold">
        MC
      </div>
    )
  };

  const sidebarFooter = {
    label: 'Настройки',
    icon: (
      <SettingIcon />
    ),
    onClick: () => console.log('Settings clicked')
  };

  const linksConfig = {
    sidebar: {
      header: sidebarHeader,
      items: sidebarItems,
      footer: sidebarFooter,
    },
  };

  return (
    <>
      <SideBar items={linksConfig.sidebar.items} header={linksConfig.sidebar.header} footer={linksConfig.sidebar.footer} />
    </>
  )
}