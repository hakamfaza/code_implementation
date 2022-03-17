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
      console.log('Angka melebihi 9007199254740991!')
    }
  } else {
    console.log('Input harus number!')
  }

  if (result.length !== 0) {
    console.log(result)
  } else {
    return 0
  }
}

divieAndSort(5956560159466056)
// divieAndSort(9007199254740992)