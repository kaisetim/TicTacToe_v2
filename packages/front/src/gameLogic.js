let round = 0;
let rowResult = [["-", "-", "-"], ["-", "-", "-"], ["-", "-", "-"]];
let columnResult = [
  [rowResult[0][0], rowResult[1][0], rowResult[2][0]],
  [rowResult[0][1], rowResult[1][1], rowResult[2][1]],
  [rowResult[0][2], rowResult[1][2], rowResult[2][2]]
];
let diagonalResult = [
  [rowResult[0][0], rowResult[1][1], rowResult[2][2]],
  [rowResult[0][2], rowResult[1][1], rowResult[2][0]]
];
let fields = document.querySelectorAll(".field");

fields.forEach(field => {
  field.style.backgroundColor = "white";
  field.addEventListener("click", () => {
    if (event.target.style.backgroundColor === "white" && round < 9) {
      let box = event.target.classList[1].split("");
      rowResult[box[0]][box[1]] = (round % 2) + 1;

      if (round % 2 === 0) {
        event.target.style.backgroundColor = "blue";
      } else {
        event.target.style.backgroundColor = "red";
      }
      refreshResults();
      check(rowResult, columnResult, diagonalResult);
      round++;
    } else {
      alert("Choose another field!");
    }
  });
});

const refreshResults = () => {
  columnResult = [
    [rowResult[0][0], rowResult[1][0], rowResult[2][0]],
    [rowResult[0][1], rowResult[1][1], rowResult[2][1]],
    [rowResult[0][2], rowResult[1][2], rowResult[2][2]]
  ];
  diagonalResult = [
    [rowResult[0][0], rowResult[1][1], rowResult[2][2]],
    [rowResult[0][2], rowResult[1][1], rowResult[2][0]]
  ];
};

const check = (...arrs) => {
  let lists = [...arrs];

  lists.forEach(list => {
    list.forEach(row => {
      if (row.find(field => typeof field !== "number") === undefined) {
        if (row.filter(field => field === 1).length === 3) {
          setTimeout(() => {
            alert(`Player 1 won in round ${round}!`);
          }, 1);
          location.reload();
        } else if (row.filter(field => field === 2).length === 3) {
          setTimeout(() => {
            alert(`Player 2 won in round ${round}!`);
          }, 1);
          location.reload();
        }
      }
    });
  });
};
