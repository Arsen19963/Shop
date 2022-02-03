let data = 'test'

export default function test(state = data, action) {
    if (action.type === 'ADD_TEST') {
        return action.payload;
    }
    return state;
}