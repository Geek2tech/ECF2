$(document).ready(()=>{

    // reset board function




    // New game
    // reset all score and active Player 1
    $('.newGame').on('click', function() {
        $('#totalScorePlayer1').html('0')
        $('#totalScorePlayer2').html(0)
        $('#currentScorePlayer1').html(0)
        $('#currentScorePlayer2').html(0)

        if ($('#player1Point').hasClass('invisible')){
            $(this).removeClass('invisible')
            $('#player2Point').addClass(('invisible'))
        }

    })

})