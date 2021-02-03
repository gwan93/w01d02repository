// rules
// a -> 4
// e -> 3
// o -> 0
// l -> 1

const str = process.argv[2];
const obfuscate = (str) => {
  let obfuscatedPassword = '';
  let replacements = {
    'a': 4,
    'e': 3,
    'o': 0,
    'l': 1
  };

  for (let char of str) {
    if (char in replacements) {
      obfuscatedPassword += replacements[char];
    } else {
      obfuscatedPassword += char;
    }
  }
  return obfuscatedPassword;
};

console.log(obfuscate(str));

// Test cases
// node password.js password -> p4ssw0rd
// node password.js abracadabra -> 4br4c4d4br4
// node password.js audaciously ->4ud4ci0us1y