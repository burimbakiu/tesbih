let counter = document.getElementById("count-el");
let count = 0;

var selectedValue = 0;

const selectDropDown = document.getElementById("dropdown");
selectDropDown.addEventListener("change", (event) => {
  selectedValue = document.getElementById("dropdown").value;
  count = 0;
  counter.innerHTML = 0;
  console.log(selectedValue);

  // console.log(selectedValue);
  // console.log(event);
});

const klikoje = () => {
  count = count + 1;
  counter.innerHTML = count;

  if (selectedValue == 33 && count == 34) {
    count = 0;
    counter.innerHTML = 0;
    counter.style.background = "";
  } else if (count == 33 && selectedValue == 33) {
    counter.style.background = "green";
  } else if (selectedValue == 100 && count == 101) {
    count = 0;
    counter.innerHTML = 0;
    counter.style.background = "";
  } else if (count == 100 && selectedValue == 100) {
    counter.style.background = "green";
  }

  // console.log(count);
  // console.log(selectedValue);
};

//   switch (count) {
//     case 33:
//       counter.style.background = "green";
//       break;
//     case 34:
//       counter.style.background = "";
//       count = 0;
//       counter.innerHTML = 0;
//     default:
//       break;
//   }
// };

//   if (count === 33) {
//     counter.style.background = "green";
//   }
//   if (count === 34) {
//     counter.style.background = "";
//   }
//   console.log(count);
// }

const resetBtn = () => {
  count = 0;
  counter.innerHTML = count;
  counter.style.background = "";
};
