// 01

function task01() {
  const _name = "Petras";
  const surname = "Jonaitis";
  const yearOfBirth = 1945;
  const currentYear = 1999;
  console.log(
    `Aš esu ${_name} ${surname}. Man yra ${
      currentYear - yearOfBirth
    } metai(ų). `
  );
}

// 02

function task02() {
  const random01 = Math.floor(Math.random() * 5);
  const random02 = Math.floor(Math.random() * 5);

  if (random01 + random02 != 0 && Math.min(random01, random02) != 0) {
    console.log(
      Math.max(random01, random02) / Math.min(random01, random02).toFixed(2)
    );
  } else {
    console.log("netinkmai skaiciai");
  }
}

function task03() {
    const random01 = Math.floor(Math.random() * 26);
    const random02 = Math.floor(Math.random() * 26);
    const random03 = Math.floor(Math.random() * 26);
    
  console.log("Hey!");
}

// task01();
// task02();
task03();
