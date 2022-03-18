let result = []

const divieAndSort = (num) => {
  const isNumber = typeof(num);

  if (isNumber === 'number') {
    if (num <= 9007199254740991) {
      const numSplit = num.toString().split('0');
      for (let i = 0; i < numSplit.length; i++) {
        result += numSplit[i].split('').sort((a, b) => a - b).join('');
      }
    } else {
      console.log('Angka melebihi batas maximum!')
    }
  } else {
    console.log('Input harus number!')
  }

  return result.length !== 0 ? console.log(result) : 0
}

divieAndSort(5956560159466056)
// divieAndSort(9007199254740992)