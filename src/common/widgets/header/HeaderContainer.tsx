"use client";

import React, { useMemo } from 'react';
import { Header } from '@widgets/header';
import { HeaderNavItem, linksConfig } from '@core/config/links';
import { usePathname } from 'next/navigation';


function HeaderContainer() {

  const pathname = usePathname();

  const navigationItems: HeaderNavItem[] = useMemo(() => linksConfig.navigation.map((item) => ({
    ...item,
    active: item.href === pathname
  })), [pathname]);

 





  return (
    <div className="sticky top-0 z-0">
      <Header
        title="Mini Gallery"
        subtitle="Коллекция лучших фотографий"
        logo={
          <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center text-white font-bold text-lg">
            MG
          </div>
        }
        navigation={navigationItems}
        variant="primary"
        sticky={true}
      />
    </div>
  );
}

export { HeaderContainer };