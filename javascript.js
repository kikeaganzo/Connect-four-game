(function() {
    var currentPlayer = "player1";
    var allDemSlots = $('.slot');

    //All posibilities in diagonal in arrays
    var diagonalSlots = [
        [0, 7, 14, 21],
        [1, 8, 15, 22],
        [2, 9, 16, 23],
        [3, 8, 13, 18],
        [4, 9, 14, 19],
        [5, 10, 15, 20],
        [6, 13, 20, 27],
        [7, 14, 21, 28],
        [8, 15, 22, 29],
        [9, 14, 19, 24],
        [10, 15, 20, 25],
        [11, 16, 21, 26],
        [12, 19, 26, 33],
        [13, 20, 27, 34],
        [14, 21, 28, 35],
        [15, 20, 25, 30],
        [16, 21, 26, 31],
        [17, 22, 27, 32],
        [18, 25, 32, 39],
        [19, 26, 33, 40],
        [20, 27, 34, 41],
        [21, 26, 31, 36],
        [22, 27, 32, 37],
        [23, 28, 33, 38]
    ];

    $(".column").on("click", function(e) {
        var col = $(e.currentTarget);
        var slotsInCol = col.find(".slot");
        var addedClass = false;
        for (var i = 5; i >= 0; i--) {
            if (
                !slotsInCol.eq(i).hasClass("player1") &&
        !slotsInCol.eq(i).hasClass("player2") // if the selected slot does not have any class, then add current class
            ) {
                slotsInCol.eq(i).addClass(currentPlayer);
                addedClass = true;
                break;
            }
        }
        if (!addedClass) {
            // if false, return
            return;
        }

        if (checkForVictory(slotsInCol)) {
            alert(currentPlayer + " wins!");
            location.reload();
            // show victory message
        } else if (checkForVictory($(".row" + i))) {
            alert(currentPlayer + " wins! You deserve a Shot!");
            location.reload();
            // Shows who is the winner in the DIagonal
        } else if (checkMeDiagonally(diagonalSlots)) {
            alert(currentPlayer + " wins! You deserve a Shot!");
            location.reload();
        }

        switchPlayer();
    });

    function checkForVictory(slot) {
    //slot DEFINED????
        var count = 0;
        for (var i = 0; i < slot.length; i++) {
            if (slot.eq(i).hasClass(currentPlayer)) {
                count++;
                if (count == 4) {
                    return true;
                }
            } else {
                count = 0;
            }
        }
    }

    function checkMeDiagonally() {
        var diagCount = 0;
        for (var i = 0; i < diagonalSlots.length; i++) {
            diagCount=0;
            for (var j = 0; j < diagonalSlots[i].length; j++) {

                if (allDemSlots.eq(diagonalSlots[i][j]).hasClass(currentPlayer)) {
                    diagCount++;
                    if (diagCount == 4) {
                        return true;
                    }
                } else {
                    diagCount = 0;
                }
            }
        }
    }

    $( "#myButton" ).click(function() {
        location.reload();
    });


    function switchPlayer() {
        if (currentPlayer == "player1") {
            currentPlayer = "player2";
        } else {
            currentPlayer = "player1";
        }
    }
})();
