


interface ISideBarLinkProps {
    id: string,
    label: string,
    href: string,
}

interface ILinks {
    sidebar: ISideBarLinkProps[]
}

export const linksConfig: ILinks = {
    sidebar: [
        {
            id: 'home',
            label: 'Главная',
            href: '/',
        },
        {
            id: 'profile',
            label: 'Профиль',
            href: '/profile'
        }
    ]
}