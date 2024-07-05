interface IStats {
    id: number,
    statsCount: string,
    statsInfo: string
}

export const stats: IStats[] = [ {
    id: 1,
    statsCount: '20k+', 
    statsInfo: 'subscribers'
},
{
    id: 2,
    statsCount: '19,5k',
    statsInfo: 'successful cases'
},
{
    id: 3,
    statsCount: '4.8/5+', 
    statsInfo: 'rating'
}]