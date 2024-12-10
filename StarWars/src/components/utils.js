export const getRandomElementOfArr = (array) =>{
    return array[Math.floor(Math.random() * array.length)]
 }
 

export const getRandomHexColor = () =>{
    return "#" + Math.floor(Math.random() * 16777215).toString(16)
}