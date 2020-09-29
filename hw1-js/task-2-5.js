function checkForSpam(str) {
  // Write code under this line

  const spamWord1 = 'spam';
  const spamWord2 = 'sale';

  return (
    str.toLowerCase().includes(spamWord1) ||
    str.toLowerCase().includes(spamWord2)
  );

  //   console.log(
  //     str.toLowerCase().includes(spamWord1) ||
  //       str.toLowerCase().includes(spamWord2),
  //   );
  //   console.log(str.toLowerCase().includes(spamWord2));
}

console.log(checkForSpam('Latest technology news')); // false

console.log(checkForSpam('JavaScript weekly newsletter')); // false

console.log(checkForSpam('Get best sale offers now!')); // true

console.log(checkForSpam('[SPAM] How to earn fast money?')); // true
