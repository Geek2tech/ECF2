$(document).ready(() => {

    // reset board function


    // New game
    // reset all score and active Player 1
    $('#newGame').on('click', function () {
        // Reinit the score
        $('#totalScorePlayer1').html('0')
        $('#totalScorePlayer2').html(0)
        $('#currentScorePlayer1').html(0)
        $('#currentScorePlayer2').html(0)
        // place the Red point on Player 1
        if ($('#player1Point').hasClass('invisible')) {
            $(this).removeClass('invisible')
            $('#player2Point').addClass(('invisible'))
        }
        //set the good dice picture
        $('#dés').prop('src', "assets/images/Blanc_5.svg")

    })

    function whoActive() {

        if ($('#player1Point').hasClass('invisible')) {
            return 'Player2'

        } else {
            return 'Player1'
        }
    }

    // Roll dice
    $('#rollDice').on('click', function () {
        // who is the active player
        let player = whoActive()
        // Random number for dice
        let dice = Math.floor(Math.random() * 6 + 1)
        $('#dés').prop('src', "assets/images/Blanc_"+ dice +".svg")
        // if dice not equal to 1 add dice to current score else current score  = 0
        if (dice !== 1) {
            $('#currentScore' + player).text((parseInt($('#currentScore' + player).text())) + dice)
        } else {
            $('#currentScore' + player).text(0)
        }
    })

    // Hold

    $('#hold').on('click', function () {

    })

})