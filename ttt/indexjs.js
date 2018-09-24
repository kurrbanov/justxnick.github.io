window.onload = function() {

    var step = 0;

    document.getElementById('gameFiled').onclick = function(event) {
        console.log(event);
        var symbol = '0';   
        if (event.target.className == 'block space') {
            if (step % 2 === 0) {
                //event.target.innerHTML = 'X';
                symbol = 'X';
            } else {
                //event.target.innerHTML = '0';
                symbol = '0';
            }
            event.target.innerHTML = symbol;
            event.target.className = 'block';
        
            step++;
            checkWinner();

            if (checkWinner() == true) {
                setInterval(function() {
                    location.reload();
                }, 1700);
                
            } 
        }
    }

    function checkWinner() {
        var allBlocks = document.getElementsByClassName('block');
        // крестики
        if (allBlocks[0].innerHTML == 'X' && allBlocks[1].innerHTML == 'X' && allBlocks[2].innerHTML == 'X') {
            swal('Победа крестиков')
            return true;
        }
        if (allBlocks[3].innerHTML == 'X' && allBlocks[4].innerHTML == 'X' && allBlocks[5].innerHTML == 'X') {
            swal('Победа крестиков');
            return true; 
        }
        if (allBlocks[6].innerHTML == 'X' && allBlocks[7].innerHTML == 'X' && allBlocks[8].innerHTML == 'X') {
            swal('Победа крестиков');
            return true; 
        }
        if (allBlocks[0].innerHTML == 'X' && allBlocks[3].innerHTML == 'X' && allBlocks[6].innerHTML == 'X') {
            swal('Победа крестиков');
            return true; 
        }
        if (allBlocks[1].innerHTML == 'X' && allBlocks[4].innerHTML == 'X' && allBlocks[7].innerHTML == 'X') {
            swal('Победа крестиков');
            return true; 
        }
        if (allBlocks[2].innerHTML == 'X' && allBlocks[5].innerHTML == 'X' && allBlocks[8].innerHTML == 'X') {
            swal('Победа крестиков');
            return true; 
        }
        if (allBlocks[0].innerHTML == 'X' && allBlocks[4].innerHTML == 'X' && allBlocks[8].innerHTML == 'X') {
            swal('Победа крестиков');
            return true; 
        }
        if (allBlocks[2].innerHTML == 'X' && allBlocks[4].innerHTML == 'X' && allBlocks[6].innerHTML == 'X') {
            swal('Победа крестиков');
            return true; 
        }
        // нолики
        if (allBlocks[0].innerHTML == '0' && allBlocks[1].innerHTML == '0' && allBlocks[2].innerHTML == '0') {
            swal('Победа ноликов');
            return true;
        }
        if (allBlocks[3].innerHTML == '0' && allBlocks[4].innerHTML == '0' && allBlocks[5].innerHTML == '0') {
            swal('Победа ноликов');
            return true;
        }
        if (allBlocks[6].innerHTML == '0' && allBlocks[7].innerHTML == '0' && allBlocks[8].innerHTML == '0') {
            swal('Победа ноликов');
            return true;
        }
        if (allBlocks[0].innerHTML == '0' && allBlocks[3].innerHTML == '0' && allBlocks[6].innerHTML == '0') {
            swal('Победа ноликов');
            return true;
        }
        if (allBlocks[1].innerHTML == '0' && allBlocks[4].innerHTML == '0' && allBlocks[7].innerHTML == '0') {
            swal('Победа ноликов');
            return true;
        }
        if (allBlocks[2].innerHTML == '0' && allBlocks[5].innerHTML == '0' && allBlocks[8].innerHTML == '0') {
            swal('Победа ноликов');
            return true;
        }
        if (allBlocks[0].innerHTML == '0' && allBlocks[4].innerHTML == '0' && allBlocks[8].innerHTML == '0') {
            swal('Победа ноликов');
            return true;
        }
        if (allBlocks[2].innerHTML == '0' && allBlocks[4].innerHTML == '0' && allBlocks[6].innerHTML == '0') {
            swal('Победа ноликов');
            return true;
        }
    }
}