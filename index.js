"use strict";

const uniqueValues = async function () {
  const uniqueWords = [];
  const wordsObj = {};

  for (let i = 0; i <= 19; i++) {
    await fetch(`out${i}.txt`)
      .then((res) => res.text())
      .then((text) => {
        const wordArr = [...new Set(text.split("\n"))];
        wordArr.forEach((word) =>
          wordsObj[word] ? wordsObj[word]++ : (wordsObj[word] = 1)
        );
      });
  }

  for (const [key, value] of Object.entries(wordsObj)) {
    if (value === 1) uniqueWords.push(key);
  }

  console.log(`Unique values => ${uniqueWords.length}`);
};

const existInAllFiles = async function () {
  const sameWords = [];
  const wordsObj = {};

  for (let i = 0; i <= 19; i++) {
    await fetch(`out${i}.txt`)
      .then((res) => res.text())
      .then((text) => {
        const wordArr = [...new Set(text.split("\n"))];
        wordArr.forEach((word) =>
          wordsObj[word] ? wordsObj[word]++ : (wordsObj[word] = 1)
        );
      });
  }

  for (const [key, value] of Object.entries(wordsObj)) {
    if (value === 20) sameWords.push(key);
  }

  console.log(`Exist in all files => ${sameWords.length}`);
};

const existInAtLeastTen = async function () {
  const frequentWords = [];
  const wordsObj = {};

  for (let i = 0; i <= 19; i++) {
    await fetch(`out${i}.txt`)
      .then((res) => res.text())
      .then((text) => {
        const wordArr = [...new Set(text.split("\n"))];
        wordArr.forEach((word) =>
          wordsObj[word] ? wordsObj[word]++ : (wordsObj[word] = 1)
        );
      });
  }

  for (const [key, value] of Object.entries(wordsObj)) {
    if (value >= 10) frequentWords.push(key);
  }

  console.log(`Exist at list in ten files => ${frequentWords.length}`);
};

uniqueValues();
existInAllFiles();
existInAtLeastTen();
