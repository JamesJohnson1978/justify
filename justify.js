function wordsLength(left,right,words) {
    let length = 0;

    for(let i = left; i <= right; i++) {
        length += words[i].length;
    }

    return length;
}

function findRight(left, words, length) {
    let right = left;
    let sum = words[right++].length;

    while(right < words.length && 
        (sum + 1 + words[right].length) < length)
    {
        sum += words[right++].length + 1;
    }

    return right - 1;
}

function addSpace(length) {
    let padding = "";

    while(length > 0) {
        padding += " ";
        length--;
    }

    return padding;
}

function pad(result, length) {
    return result + addSpace(length);
}

function internalJustify(left,right,words,length) {
    if (right - left === 0) {
        return pad(words[left], length);
    }

    let foundLastLine = (right == words.length - 1) ? true : false;

    let numSpaces = right - left;
    let totalSpace = length - wordsLength(left,right,words);

    let space = foundLastLine ? " " : addSpace(totalSpace / numSpaces);
    let remainder = foundLastLine ? 0 : totalSpace % numSpaces;

    let result = "";

    for(let i = left; i <= right; i++) {
        result += words[i];
        result += space;
        result += remainder-- > 0 ? " " : "";
    }

    return pad(result.trim(), length);
}

function justify(text,length) {

    let words = text.split(' ');

    if (words.length > 1) {
        let left = 0;
        let result = [];

        while(left < words.length) {
            let right = findRight(left, words, length);
            result.push(internalJustify(left,right,words,length));
            left = right + 1;
        }

        let justifiedText = "";
        for(let i = 0; i < result.length; i++) {
            justifiedText += result[i].trim();
            justifiedText += "\n";
        }
        return justifiedText.slice(0,-1);
        
    }
    else {
        return text;
    }

}

module.exports = justify;
    