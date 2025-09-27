"use client";

import { ISideBarItem } from "./Sidebar";
import { SideBarItem } from "./SideBarItem";

interface ISideBarBodyProps {
    items: ISideBarItem[];
    isCollapsed: boolean
} 

export const SideBarBody: React.FC<ISideBarBodyProps> = ({items, isCollapsed}) => {
    return (
        <nav className="flex-1 overflow-y-auto overflow-x-hidden py-4">
          <div className="space-y-1 px-4 flex flex-col">
            {items.map((item) => (
              <SideBarItem
                key={item.id}
                item={item}
                collapsed={isCollapsed}
                onItemClick={item.onClick}
              />
            ))}
          </div>
        </nav>      
    )
}