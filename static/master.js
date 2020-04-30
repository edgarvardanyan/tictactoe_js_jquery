var iters = 0;
var matrix = [[0,0,0],[0,0,0],[0,0,0]]

$('td').click(function(event){
    var i = Number($(this).attr('id')[0])
    var j = Number($(this).attr('id')[1])
    console.log()
    if (matrix[i][j] === 0){
        if($('span').text() === 'X'){
            $('span').text('O')
        }
        else{
            $('span').text('X')
        }
        if(iters % 2 === 0){
            $(this).html("<img src='static/x.png'>");
            matrix[i][j] = 1;
        }
        else{
            $(this).html("<img src='static/o.png'>");
            matrix[i][j] = -1;
        }
        iters++;
        console.log((i+j), Math.abs(matrix[0][2]+matrix[1][1]+matrix[2][0]))
        if (Math.abs(matrix[i][0]+matrix[i][1]+matrix[i][2])===3 ||
            Math.abs(matrix[0][j]+matrix[1][j]+matrix[2][j])===3 ||
            i===j && Math.abs(matrix[0][0]+matrix[1][1]+matrix[2][2])===3 ||
            (i+j)===2 && Math.abs(matrix[0][2]+matrix[1][1]+matrix[2][0])===3){
            var winner = iters%2?'X':'O';
            setTimeout(function() {
                alert(winner+' wins!');
                
                $('td').html('')
                iters = 0
                matrix = [[0,0,0],[0,0,0],[0,0,0]]
            },10)
        }
    }
    if (iters === 9){
        setTimeout(function() {
            alert('game is finished with draw');
                $('td').html('')
                iters = 0
                matrix = [[0,0,0],[0,0,0],[0,0,0]]
        },10)
    }
})
