"use client";

import { Title } from '@ui-kit/ui/Font/Title';
import React from 'react';
import { FooterLink } from './FooterLink';


interface FooterSectionProps {
  title: string;
  links: {
    label: string;
    href: string;
    external?: boolean;
  }[];
}

const FooterSection: React.FC<FooterSectionProps> = ({ title, links }) => {
  return (
    <div className="space-y-4">
      <Title level="h4" className="text-base font-semibold">
        {title}
      </Title>
      
      <nav className="space-y-2">
        {links.map((link, index) => (
          <FooterLink
            key={index}
            label={link.label}
            href={link.href}
            external={link.external}
          />
        ))}
      </nav>
    </div>
  );
};

export { FooterSection };