const faktorial = (a) => {
    let faktor = 1;
    for(let i = 1; i <= a; i++){
        faktor = faktor * i;
    }
    console.log(faktor);
}

faktorial(8);