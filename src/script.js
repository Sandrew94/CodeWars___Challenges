//[EXERCISE] Good vs Evil
//link: https://www.codewars.com/kata/52761ee4cffbc69732000738

//My FIRST SOLUTION

/* function goodVsEvil(good, evil) {
  //String for good
  const convertToArrNum = function (str) {
    return str.split(" ").map(Number);
  };

  const goodArmy = convertToArrNum(good)
    .map((el, i) => {
      if (i === 0) return el * 1;
      else if (i === 1) return el * 2;
      else if (i === 2) return el * 3;
      else if (i === 3) return el * 3;
      else if (i === 4) return el * 4;
      else return el * 10;
    })
    .reduce((acc, i) => acc + i, 0);

  const evilArmy = convertToArrNum(evil)
    .map((el, i) => {
      if (i === 0) return el * 1;
      else if (i === 1) return el * 2;
      else if (i === 2) return el * 2;
      else if (i === 3) return el * 2;
      else if (i === 4) return el * 3;
      else if (i === 5) return el * 5;
      else return el * 10;
    })
    .reduce((acc, i) => acc + i, 0);

  if (goodArmy > evilArmy) return "Battle Result: Good triumphs over Evil";
  else if (goodArmy == evilArmy)
    return "Battle Result: No victor on this battle field";
  else return "Battle Result: Evil eradicates all trace of Good";
} */

/* //BEST PRACTICE ( NOT MINE)

function goodVsEvil1(good, evil) {
  var getWorth = function (side, worth) {
    return side.split(" ").reduce(function (result, value, index) {
      return result + worth[index] * value;
    }, 0);
  };

  var result =
    getWorth(good, [1, 2, 3, 3, 4, 10]) -
    getWorth(evil, [1, 2, 2, 2, 3, 5, 10]);

  return result > 0
    ? "Battle Result: Good triumphs over Evil"
    : result < 0
    ? "Battle Result: Evil eradicates all trace of Good"
    : "Battle Result: No victor on this battle field";
}

console.log(goodVsEvil("0 0 0 0 0 10", "0 1 1 1 1 0 0"));
console.log(goodVsEvil1("0 0 0 0 0 10", "0 1 1 1 1 0 0")); */

/* //Refactoring with OOP (JUST FOR FUN)
class EpicBattle {
  constructor(good, evil) {
    this.good = good;
    this.evil = evil;
    console.log(this.finalResult(this.result(good, evil)));
  }

  convertToArrNum(str) {
    return str.split(" ").map(Number);
  }

  mapElGood(el) {
    return this.convertToArrNum(el)
      .map((el, i) => {
        if (i >= 0 && i <= 2) return el * (i + 1);
        if (i === 3) return el * 3;
        if (i === 4) return el * 4;
        else return el * 10;
      })
      .reduce((acc, i) => acc + i, 0);
  }

  mapElEvil(el) {
    return this.convertToArrNum(el)
      .map((el, i) => {
        if (i === 0) return el * 1;
        if (i >= 1 && i <= 3) return el * 2;
        if (i === 4) return el * 3;
        if (i === 5) return el * 5;
        else return el * 10;
      })
      .reduce((acc, i) => acc + i, 0);
  }

  result(good, evil) {
    return this.mapElGood(good) - this.mapElGood(evil);
  }

  finalResult(result) {
    return result > 0
      ? "Battle Result: Good triumphs over Evil"
      : result < 0
      ? "Battle Result: Evil eradicates all trace of Good"
      : "Battle Result: No victor on this battle field";
  }
}

const epic = new EpicBattle("0 0 0 0 0 10", "0 1 1 1 1 0 0");
console.log(epic); */

////////////////////////////////////////////////////
///////////////////////////////////////////////////
///////////////////////////////////////////////////

//[EXERCISE] Stop gninnipS My sdroW!
//link: https://www.codewars.com/kata/5264d2b162488dc400000001/javascript

/* function spinWords(sentence) {
  const sentenceArray = sentence.split(" ");
  let result = "";
  sentenceArray.map((str, i) => {
    if (str.length >= 5) {
      sentenceArray[i] = str.split("").reverse().join("");
    } else {
      sentenceArray[i] = str;
    }
    result = sentenceArray.join(" ");
  });
  return console.log(result);
}

spinWords("Just kidding there is still one more"); */

///////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////

//[EXERCISE] You're a square!
//link: https://www.codewars.com/kata/54c27a33fb7da0db0100040e

/* const isSquare = function (n) {
  const realSquare = Math.sqrt(n) % 1 === 0;
  return realSquare;
}; */

///////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////

//[EXERCISE] Find the next perfect square!
//link: https://www.codewars.com/kata/56269eb78ad2e4ced1000013

/* 
function findNextSquare(sq) {
  const squareNumber = Math.sqrt(sq) % 1 === 0; // Check if it is a square number
  if (squareNumber) {
    let nextSquare = Math.sqrt(sq) + 1; //Take the sq number that was put in and add +1 because we wont to now the next one;
    nextSquare *= nextSquare; //Then just multiply it by it's self to find the result of the next square;
    return nextSquare;
  } else {
    return -1;
  }
} */

///////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////

//[EXERCISE] The Hashtag Generator
//link: https://www.codewars.com/kata/52449b062fb80683ec000024/train/javascript

//It must start with a hashtag (#).
//All words must have their first letter capitalized.
//If the final result is longer than 140 chars it must return false.
//If the input or the result is an empty string it must return false.

//1. convert str in arr
//2. divide arr in pieces
//3. push # to the first element
//4. uppercase the first letter of the first word and the others lowercase
//5. condition if ("" || lenght > 140  || #) return false
//6. Convert array to str

/* function generateHashtag(str) {
  const newArray = ["#"].concat(str.split(" ")); //add #
  const result = newArray
    .map((el) => {
      return el.charAt(0).toUpperCase() + el.slice(1).toLowerCase();
    })
    .join(""); //First character uppercase and the other in lowercase

  if (result === "" || result.length > 140 || result === "#") {
    return false;
  }
  return result;
}

console.log(generateHashtag("Codewars is nice"));
console.log(generateHashtag("a".repeat(140)));
console.log(generateHashtag("Code wars"));
console.log(generateHashtag("code" + " ".repeat(140) + "wars")); */

///////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////
