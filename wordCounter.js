function wordCounter (text) {
    const counter = {};
    const words = text.split(/\s+/);
    words.forEach(word => {
        if(counter[word]) counter[word]++;
        else counter[word] = 1;
    })
    return counter;
}

const text = "Oh Oh Jane Jana";
const result = wordCounter(text)
console.log(result)