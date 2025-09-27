"use client";

import { Text } from "@ui-kit/ui/Font/Text";
import { Title } from "@ui-kit/ui/Font/Title";

interface SideBarHeaderProps {
    header: {
        title: string;
        subtitle?: string;
        avatar?: React.ReactNode;
    };
}

export const SideBarHeader: React.FC<SideBarHeaderProps> = ({ header }) => {
    return (
    <div className="p-6 border-b border-gray-200 dark:border-gray-700">
        <div className="flex items-center gap-3">
            {header.avatar && (
            <div className="flex-shrink-0">
                {header.avatar}
            </div>
            )}
            <div className="flex-1 min-w-0">
            <Title level="h4" className="truncate">{header.title}</Title>
            {header.subtitle && (
                <Text variant="muted" size="sm" className="truncate">
                {header.subtitle}
                </Text>
            )}
            </div>
        </div>
    </div>
    );
};