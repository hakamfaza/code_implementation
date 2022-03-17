const palindromDetection = (str) => {
  const detection = str.toLowerCase().split('').reverse().join('');
  if (detection === str.toLowerCase()) {
    return 'Teks merupakan palindrom!';
  } else {
    return 'Teks bukan palindrom!';
  }
}

// console.log(palindromDetection('Malam'))

const reverseWord = (keyword) => {
  const reverse = keyword.split(' ').reverse(). join(' ');
  return reverse;
}

// console.log(reverseWord('Saya belajar Javascript'));