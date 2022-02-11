let data = {
    filter:[
        {id:1,name:'filter name'},
    ],
    categories:[
        {id:1,name:'Category name'}
    ],
    products:[
        {
            id:1,
            name:'Some product name',
            image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLVbKzmJPVg1sXEUXQ3kniIiNejlnz7oVbr_NTDTJbGl2xgo5oK33MqyqeekCzhGpDDTQ&usqp=CAU',
            weight:50,
            desc:'description product',
            fid:1
        }
    ],
}
export default function careers(state = data, action) {
    if (action.type === 'ADD_CATALOG') {
        return action.payload;
    }
    return state;
}