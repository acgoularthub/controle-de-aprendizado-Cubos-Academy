const string1 = "I am the bone of my sword";

function invertePalavras(string) {
    let stringArray = string.split(" ");
    let stringArrayReverse = [];
    let reverseString = "";

    for (let i = stringArray.length - 1; i >= 0; i--) {
        stringArrayReverse.push(stringArray[i]);
    }

    reverseString = stringArrayReverse.join(" ");
    console.log(reverseString);
}

function inverteTudoNaString(string) {
    let stringArray = string.split("");
    let reversed = '';
    stringArray.reverse();
    reversed = stringArray.join("");

    console.log(reversed);
}

invertePalavras(string1);
inverteTudoNaString(string1);