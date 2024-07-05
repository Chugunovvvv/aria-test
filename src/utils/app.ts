interface IApps {
    id: number,
    text: string,
    app: string,
    img: string,
    alt: string
}


export const apps: IApps[] = [{
    id: 1,
    text: 'get it on',
    app: 'Google play',
    img: './GetApp/google-play.svg',
    alt: 'Google play'
},
{
    id: 2,
    text: 'Available on the',
    app: 'App Store',
    img: './GetApp/app-store.svg',
    alt: 'App Store'
}
]