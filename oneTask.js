const palindromDetection = (str) => {
  if (typeof (str) === 'string') {
    const detection = str.toLowerCase().split('').reverse().join('');
    if (detection === str.toLowerCase()) {
      return 'Teks merupakan palindrom!';
    } else {
      return 'Teks bukan palindrom!';
    }
  } else {
    return 'Teks bukan string!'
  }
}

console.log(palindromDetection('Malam'))

const reverseWord = (keyword) => {
  if (typeof keyword === 'string') {
    const reverse = keyword.split(' ').reverse().join(' ');
    return reverse;
  } else {
    return 'Teks bukan string!'
  }
}

console.log(reverseWord('Saya belajar Javascript'));