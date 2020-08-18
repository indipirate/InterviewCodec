const number = 1000;
let _wNum = "";
let pvMap = [];
let temp = number;
const numberMap = {
  0: "",
  1: "One",
  2: "Two",
  3: "Three",
  4: "Four",
  5: "five",
  6: "six",
  7: "seven",
  8: "eight",
  9: "nine",
  10: "Ten",
  11: "Eleven",
  12: "Twelve",
  13: "Thirteen",
  14: "Fourteen",
  15: "Fifteen",
  16: "Sixteen",
  17: "Seventeen",
  18: "Eighteen",
  19: "nineteen",
  20: "twenty",
  30: "Thirty",
  40: "forty",
  50: "fifty",
  60: "sixty",
  70: "seventy",
  80: "eighty",
  90: "ninety",
};

const _compute = () => {
  //   console.log((number + "").length);
  for (let i = 1; temp > 0; ++i) {
    const divRes = breakIt(temp);
    pvMap.unshift({ pos: i, value: divRes.remainder });
    temp = divRes.quotient;
    // console.log(
    //   `i is ${i} , lenght is  ${(temp + "").length} and temp is ${temp} `
    // );
  }
  pvMap.forEach(buildPv);
  console.log(`${number} in words is ${_wNum.toUpperCase()}`);
};

const buildPv = (pv) => {
  switch (pv.pos) {
    case 1:
      _wNum = concatResultByPosition(_wNum, pv.value, "", "");
      break;
    case 2:
      _wNum = concatResultByPosition(
        _wNum,
        pv.value * 10,
        (number + "").length > 3 ? "And" : "",
        ""
      );
      break;
    case 3:
      _wNum = concatResultByPosition(_wNum, pv.value, "", "Hundred");
      break;
    case 4:
      _wNum = concatResultByPosition(_wNum, pv.value, "", "Thousand");
      break;
    case 5:
      _wNum =
        (number + "").length >= 7
          ? _wNum
          : concatResultByPosition(_wNum, pv.value, "", "Lakh");
      break;
    case 6:
      _wNum = concatResultByPosition(
        _wNum,
        pv.value * 10 + pvMap[4].value,
        "",
        "Lakhs"
      );
      break;
    // case 4:
    //   _wNum = concatResultByPosition(_wNum, pv.value, "Thousand");
    //   break;
    // case 4:
    //   _wNum = concatResultByPosition(_wNum, pv.value, "Thousand");
    //   break;
    default:
      throw `No defination Found for number pos ${pv.pos}`;
  }
};

const concatResultByPosition = (num, value, prefix, suffix) => {
  return (num += prefix
    .concat(" ")
    .concat(numberMap[value])
    .concat(" ")
    .concat(suffix)
    .concat(" "));
};

const breakIt = (num) => {
  const dRes = num / 10 + "";
  return {
    quotient: dRes.split(".")[0],
    remainder: dRes.split(".")[1],
  };
};
_compute.call(this);
