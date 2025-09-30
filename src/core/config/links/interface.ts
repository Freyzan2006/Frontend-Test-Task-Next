

export interface HeaderNavItem {
    label: string;
    href: string;
    active?: boolean;
    icon?: React.ReactNode;
}

export interface ISideBarItem {
    id: string;
    label: string;
    icon?: React.FC | React.ComponentType;
    href?: string;
    onClick?: () => void;
    active?: boolean;
    disabled?: boolean;
    badge?: string | number;
  }

export interface ISideBarLinkItemProps {
    id: string,
    label: string,
    href: string,
    icon: React.FC,
    active?: boolean
}

export interface ISideBarLinkHeaderProps {
    title: string;
    subtitle: string
    avatar: React.FC
}

export interface ISideBarLinkFooterProps {
    label: string;
    onClick: () => void
    icon: React.FC
}