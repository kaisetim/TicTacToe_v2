import React, { useState } from "react";

import "./playingField.scss";

export const PlayingField = () => {
  let [round, setRound] = useState();
  round = 0;
  let player1Color = localStorage.getItem("player1Color");
  let player2Color = localStorage.getItem("player2Color");

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
  let colors = ["red", "blue", "green", "yellow", "purple"];
  let win = false;

  let insertColor = id => {
    let option = document.createElement("option");
    option.value = option.text = localStorage.getItem(`${id}`);
    document.querySelector(`#${id}`).appendChild(option);

    colors.forEach(color => {
      if (color !== localStorage.getItem(`${id}`)) {
        option;
        option.value = option.text = localStorage.getItem(`${id}`);
        document.querySelector(`#${id}`).appendChild(option);
      }
    });
  };

  let setColor = () => {
    localStorage.setItem(`${event.target.id}`, `${event.target.value}`);
    window[event.target.id] = localStorage.getItem(`${event.target.id}`);
    document.querySelector(`#${event.target.id}`).style.display = "none";
  };

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
            }, 5);
            win = true;
            location.reload();
          } else if (row.filter(field => field === 2).length === 3) {
            setTimeout(() => {
              alert(`Player 2 won in round ${round}!`);
            }, 5);
            win = true;
            location.reload();
          }
        }
      });
    });
    round++;
    if (round === 9 && win === false) {
      setTimeout(() => {
        alert("It's a draw!");
      }, 1);
      location.reload();
    }
  };

  let gameLogic = () => {
    if (
      event.target.style.backgroundColor === player1Color ||
      event.target.style.backgroundColor === player2Color
    ) {
      alert("Choose another field!");
    } else {
      event.target.style.backgroundColor = "white";
      if (event.target.style.backgroundColor === "white" && round < 9) {
        let box = event.target.classList[1].split("");
        rowResult[box[0]][box[1]] = (round % 2) + 1;

        if (round % 2 === 0) {
          event.target.style.backgroundColor = player1Color;
        } else {
          event.target.style.backgroundColor = player2Color;
        }
        refreshResults();
        check(rowResult, columnResult, diagonalResult);
      }
    }
  };

  return (
    <>
      <div className="playingField">
        <div className="row">
          <div className="field 00" onClick={() => setRound(gameLogic())}></div>
          <div className="field 01" onClick={() => setRound(gameLogic())}></div>
          <div className="field 02" onClick={() => setRound(gameLogic())}></div>
        </div>
        <div className="row">
          <div className="field 10" onClick={() => setRound(gameLogic())}></div>
          <div className="field 11" onClick={() => setRound(gameLogic())}></div>
          <div className="field 12" onClick={() => setRound(gameLogic())}></div>
        </div>
        <div className="row">
          <div className="field 20" onClick={() => setRound(gameLogic())}></div>
          <div className="field 21" onClick={() => setRound(gameLogic())}></div>
          <div className="field 22" onClick={() => setRound(gameLogic())}></div>
        </div>
      </div>
      <div className="chooseColor">
        <select id="player1Color" onChange={() => setColor()}></select>
        <select id="player2Color" onChange={() => setColor()}></select>
      </div>
      {insertColor("player1Color")}
      {insertColor("player2Color")}
    </>
  );
};
