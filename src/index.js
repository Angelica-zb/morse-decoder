const M = {
    '.-': 'a',
    '-...': 'b',
    '-.-.': 'c',
    '-..': 'd',
    '.': 'e',
    '..-.': 'f',
    '--.': 'g',
    '....': 'h',
    '..': 'i',
    '.---': 'j',
    '-.-': 'k',
    '.-..': 'l',
    '--': 'm',
    '-.': 'n',
    '---': 'o',
    '.--.': 'p',
    '--.-': 'q',
    '.-.': 'r',
    '...': 's',
    '-': 't',
    '..-': 'u',
    '...-': 'v',
    '.--': 'w',
    '-..-': 'x',
    '-.--': 'y',
    '--..': 'z',
    '.----': '1',
    '..---': '2',
    '...--': '3',
    '....-': '4',
    '.....': '5',
    '-....': '6',
    '--...': '7',
    '---..': '8',
    '----.': '9',
    '-----': '0',
};

function decode(expr) {
    let arr = [];
    let str = [];
    let word = [];
    for (let i = 0; i < (expr.length / 10); i++) {
        arr[i] = expr.slice(i * 10, (i * 10 + 10));
    }

    str = arr.map(function(item) {
        if (item == '**********') {
            return ' ';
        } else {
            let s = ''
            for (let k = 0; k < item.length; k = k + 2) {

                if ((item[k] + item[k + 1]) == 00) {
                    s;
                } else if ((item[k] + item[k + 1]) == 10) {
                    s = s + '.'
                } else { s = s + '-' }
            }
            return s
        }

    });

    word = str.map(function(item) {
        for (let key in M) {

            if (key == item) {
                return M[key]
            } else if (item == ' ') {
                return ' '
            }
        }

    });
    return word.join('')

}

module.exports = {
    decode
}