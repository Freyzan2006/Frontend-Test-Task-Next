import { AlbumsIcon } from "@ui-kit/icons/albums.icon"
import { HomeIcon } from "@ui-kit/icons/home.icon"
import { SettingIcon } from "@ui-kit/icons/setting.icon";
import { UserIcon } from "@ui-kit/icons/user.icon"
import { Logo } from "@ui/Logo";
import { HeaderNavItem, ISideBarItem, ISideBarLinkFooterProps, ISideBarLinkHeaderProps } from "./interface";





interface ISideBar {
    header: ISideBarLinkHeaderProps,
    items: ISideBarItem[],
    footer: ISideBarLinkFooterProps
}

interface IHeader {
    userMenuItems: {
        label: string,
        value: string
    }[]
}

interface ILinks {
    sidebar: ISideBar
    header: IHeader,
    navigation: HeaderNavItem[]
}

export const linksConfig: ILinks = {
    sidebar: {
        header: {
            title: 'Моя компания',
            subtitle: 'Администратор',
            avatar: Logo
        },
        items: [
            {
                id: 'home',
                label: 'Главная',
                icon: HomeIcon,
                href: '/',
            },
            {
                id: 'albums',
                label: 'Фотогалерея',
                href: '/photos',
                icon: AlbumsIcon,
            },
            {
                id: "contacts",
                label: "Контакты",
                href: "/contacts",
                icon: UserIcon,
            }
        ],
        footer: {
            label: 'Настройки',
            icon: SettingIcon,
            onClick: () => console.log('Settings clicked')
        }
    },
    header: {
        userMenuItems: [
            { label: 'Мой профиль', value: 'profile' },
            { label: 'Настройки', value: 'settings' },
            { label: 'Выйти', value: 'logout' },
        ]
    },
    navigation: [
        { label: 'Главная', href: '/' },
        { label: 'Галерея', href: '/photos' },
        { label: 'Контакты', href: '/contacts' },
    ]
}