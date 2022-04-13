const reverse = (s) => {
    let currentString = s;
    let newString = '';
    for(let i = s.length -1; i >= 0; i--){
        newString = newString + currentString[i];
    }
    console.log(newString);
}

reverse('abcde');