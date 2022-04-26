const increment = () => {
    return {
        type:"INC",
        payload:1
    }
}
const decrement = () => {
    return {
        type:"DEC",
        payload:1
    }
}
export {increment,decrement};
