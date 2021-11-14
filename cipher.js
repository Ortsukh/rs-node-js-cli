const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
const ENCRYPTION = "encode";

const cipher = (text, method, mode = ENCRYPTION) => {
  return text
    .split("")
    .map((symbol) => {
      const lowerCase = symbol.toLowerCase();

      const index = alphabet.indexOf(lowerCase);
      if (index >= 0) {
        const isLowerCase = symbol === lowerCase;
        let shift = 0;
        if (method == "R") shift = 8;
        if (method == "C") shift = 1;

        if (+mode !== 1) {
          shift *= -1;
        }

        let shiftedIndex = (index + +shift) % alphabet.length;

        if (shiftedIndex < 0) {
          shiftedIndex += alphabet.length;
        }

        let image = alphabet[shiftedIndex];
        if (method == "A") image = alphabet[alphabet.length - 1 - index];

        if (!isLowerCase) {
          image = image.toUpperCase();
        }
        return image;
      } else {
        return symbol;
      }
    })
    .join("");
};

module.exports = {
  cipher,
};
