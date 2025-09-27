"use client";

import React from 'react';
import { Header, HeaderNavItem } from '@widgets/header';
import { Card, CardBody } from '@ui-kit/ui/Card';
import { Title, Text } from '@ui-kit/ui/Font';

function HeaderContainer() {

 

  const navigationItems: HeaderNavItem[] = [];

 





  return (
    <div className="sticky top-0 z-0">
      {/* Header */}
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