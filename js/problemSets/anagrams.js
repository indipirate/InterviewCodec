let buildRegEx = (word) => {
  const regEx = new RegExp(`[${word}]`, "gi");
  return regEx;
};
getAnagram = (base) => {
  let req = [];
  base.forEach((b) => {
    const toPush = base.filter((nb) => {
      return (
        nb.replace(buildRegEx(b), "") === "" &&
        nb.length === b.length &&
        req.flat().indexOf(nb) < 0
      );
    });
    if (toPush.length) req.push(toPush);
  });
  return req;
};
console.log(
  getAnagram(["cat", "Fun", "nuf", "ufn", "act", "dog", "god", "good", "tac"])
);
