"use client";


import { SideBar } from "./Sidebar";

import { usePathname } from "next/navigation";

import { linksConfig } from "@core/config/config.core";
import { useMemo } from "react";








export const SideBarContainer: React.FC = () => {
  const path = usePathname();

  const sidebarHeader = linksConfig.sidebar.header
  const sidebarItems = useMemo(() => linksConfig.sidebar.items.map((item) => ({ ...item, active: path === item.href })), [path]);
  const sidebarFooter = linksConfig.sidebar.footer
  


  return <SideBar 
    header={sidebarHeader}
    items={sidebarItems}
    footer={sidebarFooter}
  />
}