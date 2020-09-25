function formatString(string, maxLength = 40) {
  // Write code under this line
  const newString = string.slice(0, maxLength) + '...';

  while (string.length > maxLength) {
    return newString;
  }
  return string;

  //   for (let i = 0; i < string.length; i += 1) {
  //     // if (i <= maxLength) {
  //     //   //   return string;
  //     // }

  //     if (i > maxLength) {
  //       return newString;
  //     }
  //     // else {
  //     //   return string;
  //     // }
  //   }
}

console.log(formatString('Curabitur ligula sapien, tincidunt non.'));
// 'Curabitur ligula sapien, tincidunt non.'

console.log(formatString('Vestibulum facilisis, purus nec pulvinar iaculis.'));
// 'Vestibulum facilisis, purus nec pulvinar...'

console.log(
  formatString('Vestibulum facilisis, purus nec pulvinar iaculis.', 30),
);
// 'Vestibulum facilisis, purus ne...'
