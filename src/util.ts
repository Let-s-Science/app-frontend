export const berechneLevel = (score: number) => {
    // return Math.floor(0.1*(-5+Math.sqrt(5)*Math.sqrt(5+8*score)))
    return Math.floor(score / 5)+1;
}
export const berechneFortschritt = (score: number) => {
    if (score%5===0) {
        return 0
    }
   return 100 - 100 * ((Math.ceil(score / 5) * 5 - score) / 5)
}