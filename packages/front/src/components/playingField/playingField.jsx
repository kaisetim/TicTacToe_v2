import React, { useState } from 'react';

import './playingField.scss';

import { Field } from '../field/field.jsx';

// tbd @ateiri << GENERAL COMMENTS.
// tbd @ateiri 1) Please read more about React hooks API, they provide a lot of power.
// tbd @ateiri 2) Please use less abstract names for your functions and variables and propagate parameters which functions uses to accomplish operation, that add a lot of clarity and provide less side-effects.
// tbd @ateiri 3) Your <Field /> component obviously have state with properties such as "color", "fieldNumber" and "onFieldClick" can pass both of this parameter to your handler and you can use them!

export const PlayingField = () => {
  // tbd @ateiri << please check, maybe for roundCount at least better to use React.useState hook, please understand what is it and why that is used. >>
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

  // tbd @ateiri << any kind of modifing variables in closures could provide dangerous side-effects and bugs, you can use, but be careful, that stuff hard to test. In this case OK. >>
  // increases round counter at he end of every round
  const increaseRoundCount = () => {
    roundCount++;
    console.log(roundCount);
  };

  // changes the color of the clicked field
  const changeColor = round => {
    // tbd @ateiri I don't know what is event here, I really feel that you need to read it from <Field> component.
    // checks if the field already has a color
    if (
      event.target.style.backgroundColor === 'red' ||
      event.target.style.backgroundColor === 'blue'
    ) {
      alert('Already chosen!');
      // decreases round count to stay in the same round
      roundCount--;
    } else {
      // checks if player is player 1 or 2 and changes the color of the field
      if (round === 0) {
        event.target.style.backgroundColor = 'blue';
      } else {
        event.target.style.backgroundColor = 'red';
      }
    }
  };

  // @tbd @ateiri << name of this function is not clear, maybe on field click you need to update field information depends on clicked column and row? Then propagate col and row as param and rename func to setAsPlayerOwnedField(col, row, round, player); >>
  // gets the number of the field and puts either "Player1" or "Player2" in the rows array
  const updateArraysByFieldNumber = round => {
    // @tbd @ateiri << what is event here? Where you got it? >>
    let fieldNumbers = event.target.classList[1].split('_');
    if (round === 0) {
      rows[fieldNumbers[0]][fieldNumbers[1]] = 'Player1';
    } else {
      rows[fieldNumbers[0]][fieldNumbers[1]] = 'Player2';
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
        if (insideArr.filter(item => item === 'Player1').length === 3) {
          winAnnouncement('Player 1');
        } else if (insideArr.filter(item => item === 'Player2').length === 3) {
          winAnnouncement('Player 2');
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

  // tbd @ateiri << gameFunctions name is very abstract, that is fieldOnClickHandler (then I understood whom belongs this logic). >>

  // calls all needed functions; is added as onClick function
  const gameFunctions = () => {
    // tdb @ateiri << what is roundCount % 2, please create variable instead with appropriate name, it will make me clear to understand what is it exactly. >>
    changeColor(roundCount % 2);
    // tbd @ateiri << name confusing, params confusing, need to understand what function do and which params needed to accomplish operation, please read seperated comment about for extra information. >>
    updateArraysByFieldNumber(roundCount % 2);
    increaseRoundCount();

    // tbd @ateiri << set timeout in most cases anti-pattern, you should use React.useEffect(() => { if (round % 2 === 0) { doSomethingBadOnGameFinish(); } }, [round]);
    // tbd @ateiri please read more and understand how React.useEffect hook works, that is proper way to control changes and postponed operations. >>
    setTimeout(() => {
      checkArraysIfWinner();
    }, 1);
  };

  // tbd @ateiri << you have a lot of <Field> components below manually written, please create array and just place in rendering.
  // const rowLength = 3;
  // const colLength = 3;
  // const fieldsComponents = new Array(rowLength * colLength).map((v, idx) => (
  //   <Field
  //     fieldNumber={`${Math.floor(idx / colLength)}_${idx % rowLength}`}
  //     onClickFunction={gameFunctions}
  //   />
  // ));
  // return fieldsComponents;
  // tbd @ateiri >>

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
