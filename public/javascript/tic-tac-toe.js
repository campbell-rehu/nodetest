/*
  Image sources:
  "circle.png" -> https://www.thinglink.com/scene/487249257363931138
  "cork-wallet.png" -> http://subtlepatterns.com/cork-wallet/
  "cross.png" -> http://www.clker.com/clipart-28652.html
*/

var divs = document.querySelectorAll(".col-xs-4");
var i = 0;
var turn = true;
var winner = 0;

var playerOne = { id:"1" };
var playerTwo = { id:"2" };

var game = [3];

game[0] = [3];
game[1] = [3];
game[2] = [3];

game[0][0] = "";
game[0][1] = "";
game[0][2] = "";

game[1][0] = "";
game[1][1] = "";
game[1][2] = "";

game[2][0] = "";
game[2][1] = "";
game[2][2] = "";

AddEventListeners();

function AddEventListeners() {
  for(i = 0; i < divs.length; i++) {
    divs[i].addEventListener("click", function(e) {
      var targetId = "#" + e.target.id;

      var element = document.querySelector(targetId);

      var child = element.childNodes[1];

      var imageSource = (turn) ? "cross.png" : "circle.png";

      child.setAttribute("src", imageSource);

      RegisterGameBoard(e.target.id+"");

      turn = !turn;

      if (CheckForWin()) {
        var alertDiv = document.querySelector("#alert");
        alertDiv.className = "alert alert-success";
        alertDiv.innerHTML = `Player ${winner} has won!
          <a id="reset" href="#" class="alert-link">Play again?</a>`;
        document.querySelector("#reset").addEventListener("click", function() {
          alertDiv.className = "";
          alertDiv.innerHTML = "";
          Reset();
        });
      } else if (CheckForNoWin()) {
        var alertDiv = document.querySelector("#alert");
        alertDiv.className = "alert alert-danger";
        alertDiv.innerHTML = `No one has won!
          <a id="reset" href="#" class="alert-link">Play again?</a>`;
        document.querySelector("#reset").addEventListener("click", function() {
          alertDiv.className = "";
          alertDiv.innerHTML = "";
          Reset();
        });
      }
    });
  }
}

function CheckForNoWin() {
  var i = 0;
  var j = 0;
  for (i = 0; i < game.length; i++) {
    for (j = 0; j < game.length; j++) {
      if (game[i][j] === "") {
        return false;
      }
    }
  }
  return true;
}

function Reset() {
  ResetImages();
  ResetArray();
  winner = 0;
}

function ResetImages() {
  var i = 0;
  for (i = 0; i < divs.length; i++) {
    var child = divs[i].childNodes[1];
    child.setAttribute("src", "");
  }
}

function ResetArray() {
  var i = 0;
  var j = 0;
  for (i = 0; i < game.length; i++) {
    for (j = 0; j < game.length; j++) {
      game[i][j] = "";
    }
  }
}

function RegisterGameBoard(targetName) {
  switch (targetName) {
    case "topLeft":
      return game[0][0] = (turn) ? playerOne.id : playerTwo.id;

    case "topMiddle":
      return game[0][1] = (turn) ? playerOne.id : playerTwo.id;

    case "topRight":
      return game[0][2] = (turn) ? playerOne.id : playerTwo.id;

    case "middleLeft":
      return game[1][0] = (turn) ? playerOne.id : playerTwo.id;

    case "middleMiddle":
      return game[1][1] = (turn) ? playerOne.id : playerTwo.id;

    case "middleRight":
      return game[1][2] = (turn) ? playerOne.id : playerTwo.id;

    case "bottomLeft":
      return game[2][0] = (turn) ? playerOne.id : playerTwo.id;

    case "bottomMiddle":
      return game[2][1] = (turn) ? playerOne.id : playerTwo.id;

    case "bottomRight":
      return game[2][2] = (turn) ? playerOne.id : playerTwo.id;

    default:
      return "";
  }
}

function CheckForWin() {
  return CheckColumns() || CheckRows() || CheckDiagonals();
}

function CheckColumns() {
  var i = 0;
  for (i = 0; i < 3; i++) {

    if ( game[0][i].concat(game[1][i]).concat(game[2][i]) === "111"
      || game[0][i].concat(game[1][i]).concat(game[2][i]) === "222" ) {
      winner = game[0][i];
      return true;
    }
  }
  return false;
}

function CheckRows() {
  var i = 0;

  for (i = 0; i < 3; i++) {
    if ( game[i][0].concat(game[i][1]).concat(game[i][2]) === "111"
      || game[i][0].concat(game[i][1]).concat(game[i][2]) === "222" ) {
      winner = game[i][0];
      return true;
    }
  }
  return false;
}

function CheckDiagonals() {

  /*
  game[0][0] - topLeft
  game[1][1] - middleMiddle
  game[2][2] - bottomRight
  */

  if ( game[0][0].concat(game[1][1]).concat(game[2][2]) === "111"
    || game[0][0].concat(game[1][1]).concat(game[2][2]) === "222" ) {
        winner = game[0][0];
        return true;
  }

  /*
  game[0][2] - topRight
  game[1][1] - middleMiddle
  game[2][0] - bottomLeft
  */

  if ( game[0][2].concat(game[1][1]).concat(game[2][0]) === "111"
    || game[0][2].concat(game[1][1]).concat(game[2][0]) === "222" ) {
    winner = game[0][2];
    return true;
  }
  return false;
}
