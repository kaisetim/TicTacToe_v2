import React, { useState } from "react";

import "./playingField.scss";

import { Field } from "../field/field.jsx";

export const PlayingField = () => {
  let roundCount = 0;
  let rows = [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0]
  ];
  let columns = [
    [rows[0][0], rows[1][0], rows[2][0]],
    [rows[0][1], rows[1][1], rows[2][1]],
    [rows[0][2], rows[1][2], rows[2][2]]
  ];
  let diagonals = [
    [rows[0][0], rows[1][1], rows[2][2]],
    [rows[0][2], rows[1][1], rows[2][0]]
  ];
  let win = false;

  // increases round counter at he end of every round
  const increaseRoundCount = () => {
    roundCount++;
    console.log(roundCount);
  };

  // changes the color of the clicked field
  const changeColor = round => {
    // checks if the field already has a color
    if (
      event.target.style.backgroundColor === "red" ||
      event.target.style.backgroundColor === "blue"
    ) {
      alert("Already chosen!");
      // decreases round count to stay in the same round
      roundCount--;
    } else {
      // checks if player is player 1 or 2 and changes the color of the field
      if (round === 0) {
        event.target.style.backgroundColor = "blue";
      } else {
        event.target.style.backgroundColor = "red";
      }
    }
  };

  // gets the number of the field and puts either "Player1" or "Player2" in the rows array
  const updateArraysByFieldNumber = round => {
    let fieldNumbers = event.target.classList[1].split("_");
    if (round === 0) {
      rows[fieldNumbers[0]][fieldNumbers[1]] = "Player1";
    } else {
      rows[fieldNumbers[0]][fieldNumbers[1]] = "Player2";
    }

    // updates the other updates after changing rows array
    columns = [
      [rows[0][0], rows[1][0], rows[2][0]],
      [rows[0][1], rows[1][1], rows[2][1]],
      [rows[0][2], rows[1][2], rows[2][2]]
    ];

    diagonals = [
      [rows[0][0], rows[1][1], rows[2][2]],
      [rows[0][2], rows[1][1], rows[2][0]]
    ];
  };

  // win announcement to reduce code lines
  const winAnnouncement = player => {
    // "win = true" is neccesary to be able to get a draw as result
    win = true;
    alert(`${player} won in round ${roundCount}!`);
    location.reload();
  };

  // function to check every single array if array contains only "Player1" or "Player2"
  const evaluateArrays = arr => {
    // access first level array
    arr.forEach(insideArr => {
      // check if second level array doesn't contain a 0
      if (insideArr.filter(item => item === 0).length === 0) {
        // if array contains only "Player1" or "Player2" announce winner
        if (insideArr.filter(item => item === "Player1").length === 3) {
          winAnnouncement("Player 1");
        } else if (insideArr.filter(item => item === "Player2").length === 3) {
          winAnnouncement("Player 2");
        }
      }
    });
  };

  const checkArraysIfWinner = () => {
    // checks if there is winner
    evaluateArrays(rows);
    evaluateArrays(columns);
    evaluateArrays(diagonals);
    // if there was no winner and it is round 9 it's a draw
    if (roundCount === 9 && win === false) {
      alert("It's a draw!");
      location.reload();
    }
  };

  // calls all needed functions; is added as onClick function
  const gameFunctions = () => {
    changeColor(roundCount % 2);
    updateArraysByFieldNumber(roundCount % 2);
    increaseRoundCount();
    setTimeout(() => {
      checkArraysIfWinner();
    }, 1);
  };

  return (
    <>
      <div className="playingField">
        <div className="row">
          <Field
            fieldNumber="0_0"
            onClickFunction={() => {
              gameFunctions();
            }}
          />
          <Field
            fieldNumber="0_1"
            onClickFunction={() => {
              gameFunctions();
            }}
          />
          <Field
            fieldNumber="0_2"
            onClickFunction={() => {
              gameFunctions();
            }}
          />
        </div>
        <div className="row">
          <Field
            fieldNumber="1_0"
            onClickFunction={() => {
              gameFunctions();
            }}
          />
          <Field
            fieldNumber="1_1"
            onClickFunction={() => {
              gameFunctions();
            }}
          />
          <Field
            fieldNumber="1_2"
            onClickFunction={() => {
              gameFunctions();
            }}
          />
        </div>
        <div className="row">
          <Field
            fieldNumber="2_0"
            onClickFunction={() => {
              gameFunctions();
            }}
          />
          <Field
            fieldNumber="2_1"
            onClickFunction={() => {
              gameFunctions();
            }}
          />
          <Field
            fieldNumber="2_2"
            onClickFunction={() => {
              gameFunctions();
            }}
          />
        </div>
      </div>
    </>
  );
};
