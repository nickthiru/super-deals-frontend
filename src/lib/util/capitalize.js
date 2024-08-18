import { map, toUpper, join } from "ramda";

export function capitalize(text, splitOn = " ", joinWith = " ") {

  const copy = text.slice(0);
  const split = copy.split(splitOn);
  console.log("split: " + split);
  // console.log("typeof split: " + typeof split);
  // console.log("isArray(split): " + Array.isArray(split));

  const arrCapWords = map((word) => {
    const capFirst = toUpper(word.charAt(0));
    const capWord = capFirst + word.slice(1);
    console.log("capWord: " + capWord);
    return capWord;
  },
    split);

  // console.log("typeof arrCapWords: " + typeof arrCapWords);
  // console.log("isArray(arrCapWords): " + Array.isArray(arrCapWords));
  console.log("arrCapWords: " + arrCapWords);

  // let spacer = join(" ");
  // let capText = spacer(arrCapWords);
  let capText = join(joinWith)(arrCapWords);

  console.log("capText: " + capText);

  return capText;
}

// capitalize("categories");
// capitalize("latest-deals", "-", "-");
