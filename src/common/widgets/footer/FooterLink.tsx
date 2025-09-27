"use client";

import React from 'react';
import { LinkApp } from '@ui-kit/ui/LinkApp';
import { Text } from '@ui-kit/ui/Font/Text';

interface FooterLinkProps {
  label: string;
  href: string;
  external?: boolean;
}

const FooterLink: React.FC<FooterLinkProps> = ({ label, href, external }) => {
  return (
    <LinkApp
      href={href}
      external={external}
      variant="ghost"
      className="block py-1 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
    >
      <Text size="sm" className="text-gray-600 dark:text-gray-400 hover:text-inherit">
        {label}
      </Text>
    </LinkApp>
  );
};

export { FooterLink };