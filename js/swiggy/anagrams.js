let buildRegEx = (word) => {
  try {
    const regEx = new RegExp(`[${word}]`, "gi");
    return regEx;
  } catch {
    console.log(`Error Building RegEx For ${word}`);
  }
};
getAnagram = (input) => {
  console.log(`Start: ${new Date().getTime()}`);
  let req = [];
  input.forEach((outerWord) => {
    if (req.flat().indexOf(outerWord) < 0) {
      const toPush = input.filter((innerWord) => {
        return (
          innerWord.replace(buildRegEx(outerWord), "") === "" &&
          innerWord.length === outerWord.length &&
          req.flat().indexOf(innerWord) < 0
        );
      });
      if (toPush.length) req.push(toPush);
    }
  });
  return req;
};

getWordsFromLoremIpsum = (loremIpsumText) => {
  return loremIpsumText.split(" ");
};
console.log(
  getAnagram(getWordsFromLoremIpsum(`I Eat Desserts when I am stressed`))
);
console.log(`Start: ${new Date().getTime()}`);
