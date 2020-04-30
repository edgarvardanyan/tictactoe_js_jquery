var iters = 0; // the number of x-s and o-s placed
var matrix = [[0,0,0],[0,0,0],[0,0,0]] // 0-nothing, 1-x, (-1)-o
var wins = {
    'X': 0,
    'O': 0,
    'draw': 0
} // the number of wins by x, draws, wins by o

function reset(){
    $('td').html('')
    iters = 0
    matrix = [[0,0,0],[0,0,0],[0,0,0]]
    $('span').text('X')
    $('#xwins').text(wins['X'])
    $('#owins').text(wins['O'])
    $('#draws').text(wins['draw'])
}

$('td').click(function(event){
    // getting the row and the column
    var i = Number($(this).attr('id')[0])
    var j = Number($(this).attr('id')[1])

    // checking if the clicked cell is not busy
    if (matrix[i][j] === 0){

        // changing the players name
        if($('#player').text() === 'X'){
            $('#player').text('O')
        }
        else{
            $('#player').text('X')
        }

        // changing the image depending on who is playing
        if(iters % 2 === 0){
            $(this).html("<img src='static/x.png'>");
            matrix[i][j] = 1;
        }
        else{
            $(this).html("<img src='static/o.png'>");
            matrix[i][j] = -1;
        }

        // checking if there is win after this move.
        // the first and second lines check the row and the column of the inserted element
        // the third and forth lines check the 2 diagonals if the inserted element is on them
        if (Math.abs(matrix[i][0]+matrix[i][1]+matrix[i][2])===3 ||
            Math.abs(matrix[0][j]+matrix[1][j]+matrix[2][j])===3 ||
            i===j && Math.abs(matrix[0][0]+matrix[1][1]+matrix[2][2])===3 ||
            (i+j)===2 && Math.abs(matrix[0][2]+matrix[1][1]+matrix[2][0])===3){
            
            //estimating the winner and adding the win count
            var winner = iters%2?'O':'X';
            wins[winner] += 1;

            // setting timout so that changes will be visible before alert
            setTimeout(function() {
                alert(winner+' wins!');
                reset();
            },10)
        }
        else if (iters === 8){
            // setting timout so that changes will be visible before alert
            wins['draw'] += 1;
            setTimeout(function() {
                alert('game is finished with draw');
                reset();
            },10)
        }
        
        iters++;
    }
})
