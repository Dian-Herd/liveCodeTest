const printDigitValue = (value) => {
  let array = value.split("");
  let hasil = "";
  let hasildigit = "";
  for (let i = 0; i < array.length; i++) {
    if (!isNaN(array[i])) {
      hasil += array[i];
    }
  }
  console.log(hasil);
  for (let i = 0; i < hasil.length; i++) {
    for (let j = hasil.length - 1; j > i; j--) {
      hasildigit += "0";
    }
    console.log(hasil[i] + hasildigit);
    hasildigit = "";
  }
};

printDigitValue("9.86-A5.321");
