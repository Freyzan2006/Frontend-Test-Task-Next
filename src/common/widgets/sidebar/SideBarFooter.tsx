"use client";

import { ISideBarLinkFooterProps } from "@core/config/config.core";
import { ToggleTheme } from "@features/toggle-theme";
import { Button } from "@ui-kit/ui/Button";
import { Text } from "@ui-kit/ui/Font/Text";

interface SideBarFooterProps {
  footer: ISideBarLinkFooterProps;
}

export const SideBarFooter: React.FC<SideBarFooterProps> = ({ footer }) => {
    return (
        <div className=" p-4 border-t border-gray-200 dark:border-gray-700">
            <Button
              variant="ghost"
              className="w-full justify-start"
              icon={<footer.icon />}
              onClick={footer.onClick}
            >
              {footer.label}
            </Button>

            <div>
              <Text variant="muted" size="sm" className="mt-2">
                Тема
              </Text>
              <ToggleTheme />
            </div>
        </div>
    )
}