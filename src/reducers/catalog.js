
let data = {
    filter: [
        {id: 1, name: 'filter name'},
    ],
    categories: [
        {id: 1, name: 'Category name'}
    ],
    products: [
        {
            id: 1,
            name: 'Some product name',
            image: 'https://www.pngfind.com/pngs/m/111-1116487_coffee-jar-png-nescafe-clasico-dark-roast-transparent.png',
            weight: 50,
            desc: 'description product',
            fid: 1,
        },
        {
            id: 2,
            name: 'Some product name',
            image: 'https://www.pngfind.com/pngs/m/111-1116487_coffee-jar-png-nescafe-clasico-dark-roast-transparent.png',
            weight: 50,
            desc: 'description product',
            fid: 1,
        }, {
            id: 3,
            name: 'Some product name',
            image: 'https://www.pngfind.com/pngs/m/111-1116487_coffee-jar-png-nescafe-clasico-dark-roast-transparent.png',
            weight: 50,
            desc: 'description product',
            fid: 1,
        }, {
            id: 4,
            name: 'Some product name',
            image: 'https://www.pngfind.com/pngs/m/111-1116487_coffee-jar-png-nescafe-clasico-dark-roast-transparent.png',
            weight: 50,
            desc: 'description product',
            fid: 1,
        }, {
            id: 5,
            name: 'Some product name',
            image: 'https://www.pngfind.com/pngs/m/111-1116487_coffee-jar-png-nescafe-clasico-dark-roast-transparent.png',
            weight: 50,
            desc: 'description product',
            fid: 1,
        }, {
            id: 6,
            name: 'Some product name',
            image: 'https://www.pngfind.com/pngs/m/111-1116487_coffee-jar-png-nescafe-clasico-dark-roast-transparent.png',
            weight: 50,
            desc: 'description product',
            fid: 1
        },
    ],
}
export default function catalog(state = data, action) {
    if (action.type === 'ADD_CATALOG') {
        return action.payload;
    }
    return state;
}