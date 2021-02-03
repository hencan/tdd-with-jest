// function getFactorial() {

// }

// export default getFactorial

// ****************************************

// export default () => 6

// ****************************************

// export default number => {
//     let factorial = 1

//     for (let i = number; i >= 1; i--) {
//         factorial = factorial * i
//     }

//     return factorial
// }

// ****************************************

import { typeErrorMensage, rangeErrorMensage } from './util'

const getFactorial = number => {
    if (typeof number !== 'number') {
        throw new TypeError(typeErrorMensage)
    }

    if (number < 0 || number > 20) {
        throw new RangeError(rangeErrorMensage)
    }

    if (number === 1 || number === 0) {
        return 1
    }

    return number * getFactorial(number - 1)
}

export default getFactorial