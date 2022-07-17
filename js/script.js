// 01

const task01 = () => {
  const _name = "Petras";
  const surname = "Jonaitis";
  const yearOfBirth = 1945;
  const currentYear = 1999;
  console.log(
    `Aš esu ${_name} ${surname}. Man yra ${currentYear - yearOfBirth} metai(ų).`
  );
}

// 02

const task02 = () => {
  const random01 = Math.floor(Math.random() * 5);
  const random02 = Math.floor(Math.random() * 5);

  console.log(random01)
  console.log(random02)

  if (random01 * random02) {
    console.log(
      Math.max(random01, random02) / Math.min(random01, random02).toFixed(2)
    );
  } else {
    console.log("netinkmai skaiciai");
  }
}

const task03 = () => {
  const random01 = Math.floor(Math.random() * 26);
  const random02 = Math.floor(Math.random() * 26);
  const random03 = Math.floor(Math.random() * 26);
  console.log(
    random01 + random02 + random03 -Math.min(random01, random02, random03) - Math.max(random01, random02, random03)
  );
}

const task04 = ()=>{
    const random01 = Math.floor(Math.random() * 11);
    const random02 = Math.floor(Math.random() * 11);
    const random03 = Math.floor(Math.random() * 11);
    console.log(random01+random02>random03 && random02+random03>random01 && random01+random03>random02);
}

const task05 = ()=>{
    const random01 = Math.floor(Math.random() * 3);
    const random02 = Math.floor(Math.random() * 3);
    const random03 = Math.floor(Math.random() * 3);
    const random04 = Math.floor(Math.random() * 3);
    let numberZero = 0;
    let numberOne = 0;
    let numberTwo = 0;

    if(random01==0){
        numberZero++
    }else if(random01==1){
        numberOne++
    }else{
        numberTwo++
    }

    if(random02==0){
        numberZero++
    }else if(random02==1){
        numberOne++
    }else{
        numberTwo++
    }

    if(random03==0){
        numberZero++
    }else if(random03==1){
        numberOne++
    }else{
        numberTwo++
    }

    if(random04==0){
        numberZero++
    }else if(random04==1){
        numberOne++
    }else{
        numberTwo++
    }

    console.log(numberZero)
    console.log(numberOne)
    console.log(numberTwo)

}

const task06 = () =>{
    const random01 = Math.floor(Math.random() * 21) - 10;
    const random02 = Math.floor(Math.random() * 21) - 10;
    const random03 = Math.floor(Math.random() * 21) - 10;

    if (random01>=0){
      console.log(`{${random01}}`)
    }else{
      console.log(`[${random01}]`)
    }
    if (random02>=0){
      console.log(`{${random02}}`)
    }else{
      console.log(`[${random02}]`)
    }
    if (random03>=0){
      console.log(`{${random03}}`)
    }else{
      console.log(`[${random03}]`)
    }

}

const task07 = () =>{
  const candles = Math.floor(Math.random() * 3001);
  const candlePrice = 1;
  let amount = candles*candlePrice;

  if (amount > 2000){
    amount -=(amount*(4/100))
  }else if(amount>1000){
    amount-=(amount*(3/100))
  }
  
  console.log(`${candles} žvakių už ${amount.toFixed(2)} pinigų`)
  
}

const task08 = () =>{
  const random01 = Math.floor(Math.random() * 101);
  const random02 = Math.floor(Math.random() * 101);
  const random03 = Math.floor(Math.random() * 101);

  console.log(random01)
  console.log(random02)
  console.log(random03)

  console.log(Math.round((random01+random02+random03)/3))

  let count = 0;
  let amount = 0;

  if(random01>9 && random01 <91){
    count+=1;
    amount+=random01;
  }
  if(random02>9 && random02 <91){
    count+=1;
    amount+=random02;
  }

  if(random03>9 && random03 <91){
    count+=1;
    amount+=random03;
  }

  if(count){
    console.log(Math.round(amount/count))
  }
  
}

// task01();
// task02();
// task03();
// task04();
// task05();
// task05();
// task06();
// task07();
// task08();
