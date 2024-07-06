interface IApps {
    id: number,
    text: string,
    app: string,
    img: string,
    alt: string
    href: string
}


export const apps: IApps[] = [{
    id: 1,
    text: 'get it on',
    app: 'Google play',
    img: 'aria-test/GetApp/google-play.svg',
    alt: 'Google play',
    href: 'https://play.google.com/store/games?hl=ru&pli=1'
},
{
    id: 2,
    text: 'Available on the',
    app: 'App Store',
    img: 'aria-test/GetApp/app-store.svg',
    alt: 'App Store',
    href: 'https://www.apple.com/app-store/'
}
]