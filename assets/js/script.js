function convertToRoman(num) {
  const numerals = {
    1: "I",
    4: "IV",
    5: "V",
    9: "IX",
    10: "X",
    40: "XL",
    50: "L",
    90: "XC",
    100: "C",
    400: "CD",
    500: "D",
    900: "CM",
    1000: "M",
  };

  let result = "";

  if (numerals.hasOwnProperty(num)) {
    return numerals[num];
  }

  const sortedNums = Object.keys(numerals)
    .sort((a, b) => b - a)
    .map(Number);

  for (const value of sortedNums) {
    while (num >= value) {
      result += numerals[value];
      num -= value;
    }
  }

  return result;
}

// Your JavaScript code for interactivity and functionality
document.addEventListener("DOMContentLoaded", function () {
  // Move the code for conversion into a function for reusability
  function performConversion() {
    const input = document.querySelector("#user-input").value;
    if (
      input === "" ||
      input === 0 ||
      input === null ||
      input <= 0 ||
      input % 1 !== 0 ||
      input.includes(".") ||
      input.includes(" ") ||
      input.includes("-") ||
      input.includes("+") ||
      input.includes(",") ||
      input.includes("/") ||
      input.includes(":") ||
      input.includes(";") ||
      input.includes("'") ||
      input.includes('"') ||
      input.includes("[") ||
      input.includes("]") ||
      input.includes("{") ||
      input.includes("}") ||
      isNaN(input)
    ) {
      document.querySelector("#error").textContent =
        "Please enter a valid number";
      setTimeout(function () {
        document.querySelector("#error").textContent = "";
      }, 2000);
      return;
    }

    const result = convertToRoman(input);
    document.querySelector("#result").textContent = `${input} = ${result}`;
  }

  // Add click event listener to the Convert button
  document
    .querySelector("#convert-button")
    .addEventListener("click", performConversion);

  // Listen for keydown event on the input field
  document
    .querySelector("#user-input")
    .addEventListener("keydown", function (event) {
      if (event.keyCode === 13) {
        event.preventDefault(); // Prevent default Enter behavior (form submission)
        performConversion(); // Call the conversion function
      }
    });

  document
    .querySelector("#user-input")
    .addEventListener("input", function (event) {
      event.preventDefault(); // Prevent default behavior
      document.querySelector("#error").textContent = "";
    });
});
