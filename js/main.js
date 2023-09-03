$(document).ready(() => {

    // Variable for active player by default it's Player1
    let player = 'Player1'

// function to change player

    function changePlayer() {
        if ($('#player1Point').hasClass('invisible')) {
            $('#player1Point').removeClass('invisible')
            $('#player2Point').addClass('invisible')
            $('#player2Name').removeClass('activePlayer')
            $('#player1Name').addClass('activePlayer')
            player = 'Player1'
        } else {
            $('#player1Point').addClass('invisible')
            $('#player2Point').removeClass('invisible')
            $('#player1Name').removeClass('activePlayer')
            $('#player2Name').addClass('activePlayer')
            player = 'Player2'
        }
    }

    function resetBoard() {
        $('#totalScorePlayer1').html('0')
        $('#totalScorePlayer2').html(0)
        $('#currentScorePlayer1').html(0)
        $('#currentScorePlayer2').html(0)
        // place the Red point on Player 1
        if ($('#player1Point').hasClass('invisible')) {
            $('#player1Point').removeClass('invisible')
            $('#player1Name').addClass('activePlayer')

            $('#player2Point').addClass(('invisible'))
            $('#player2Name').removeClass('activePlayer')

        }
        //set the good dice picture
        $('#dés').prop('src', "assets/images/Blanc_5.svg")
        player = 'Player1'
    }

    // reset board function
    // New game
    // reset all score and active Player 1
    $('#newGame').on('click', function () {
        // Reinit the score
        resetBoard()
    })


    // Roll dice
    $('#rollDice').on('click', function () {
        // who is the active player

        // Random number for dice
        let dice = Math.floor(Math.random() * 6 + 1)
        $('#dés').prop('src', "assets/images/Blanc_" + dice + ".svg")
        // if dice not equal to 1 add dice to current score else current score  = 0
        if (dice !== 1) {

            $('#currentScore' + player).text((parseInt($('#currentScore' + player).text())) + dice)
        } else {
            $('#currentScore' + player).text(0)

            changePlayer()
        }
    })

    // Hold

    $('#hold').on('click', function () {

        // add current score to total score
        $('#totalScore' + player).text(parseInt($('#totalScore' + player).text())
            + parseInt($('#currentScore' + player).text()))
        $('#currentScore' + player).text(0)
// verify is total score >= 100
        if (parseInt($('#totalScore' + player).text()) >= 100) {
            alert(` ${player} a reporté la partie !!! `)
            resetBoard()
        }
        //changing the active player
        changePlayer()

    })

})