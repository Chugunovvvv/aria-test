interface IReviews {
    id: number;
    img: string,
    alt: string,
    name: string,
    tag: string,
    review: string
}


export const reviews:IReviews[] = [
    {
        id: 1,
        img: './Reviews/lorenzo.svg',
        alt: 'Lorenzo',
        name: 'Lorenzo',
        tag: '@lorenzoo',
        review: 'Amazing Telegram bot! Provides real-time crypto prices and news'
    },
    {
        id: 2,
        img: './Reviews/adalina.svg',
        alt: 'Adalina',
        name: 'Adalina',
        tag: '@ada',
        review: 'Amazing Telegram bot! Provides real-time crypto prices and news'
    },
    {
        id: 3,
        img: './Reviews/alexander.svg',
        alt: 'Alexander',
        name: 'Alexander',
        tag: '@alex_x',
        review: 'Superb cryptocurrency bot! Quick updates and reliable data'
    }, {
        id: 4,
        img: './Reviews/rushana.svg',
        alt: 'Rushana',
        name: 'Rushana',
        tag: '@Hana',
        review: 'Efficient and user-friendly bot. Simplifies crypto trading tasks'
    }
]