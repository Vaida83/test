const input = '1905903427406039624113890213931874044916065923601116406810417575615054452970814179919632411625605733252547320490491525060759231673719929167256483576431528';
const pairs = [];

for (let index = 0; index < input.length -1; index++) {
    const element = input[index] + input[index + 1];
    if (!pairs.includes(element)){
        pairs.push(element);
    }
}


let maxPairCount = 0;

const pairsObj ={}

for (let i1 = 0; i1 < pairs.length; i1++) {
    const pair = pairs[i1];
    let pairCount = 0;
    for (let i2 = 0; i2 < input.length - 1; i2++) {
        const element = input[i2] + input[i2 + 1];
        // console.log(pair+' vs ' + element);
        if (element === pair) {
            pairCount++;
        }
    }
    
    
    pairsObj[pair] = pairCount;
    if (pairCount > maxPairCount) {
        maxPairCount = pairCount
    }
}

const maxPairs = [];

for (const i in pairsObj){
    if (pairsObj[i] === maxPairCount) {
        maxPairs.push(i);
    }       
}



// console.log(maxPairCount); 
// console.log(pairsObj);
console.log(maxPairs, maxPairCount);