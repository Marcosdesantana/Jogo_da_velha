let jogar = 1
let vetor = []
let letra

let divi1 = document.getElementsByClassName('divi_1')[0]
let divi2 = document.getElementsByClassName('divi_2')[0]
let divi3 = document.getElementsByClassName('divi_3')[0]
let divi4 = document.getElementsByClassName('divi_4')[0]
let divi5 = document.getElementsByClassName('divi_5')[0]
let divi6 = document.getElementsByClassName('divi_6')[0]
let divi7 = document.getElementsByClassName('divi_7')[0]
let divi8 = document.getElementsByClassName('divi_8')[0]
let divi9 = document.getElementsByClassName('divi_9')[0]

for(let c = 0 ; c < 9; c++){
    vetor[c] = 3
}

function receber_valor(valor){
    if(vetor[valor] == 3){

       if(vetor[valor] != 1 && vetor[valor] != 2){
        vetor[valor] = jogar
       }

       if(jogar == 1){
          jogar = 2
          letra = 'x'
       }else{
          jogar = 1
          letra = 'o'
       }
    } 
}

function receber_letra(id){

    if(id == 0 && divi1.innerHTML == ''){
        divi1.innerHTML = `${letra}`
    }

    if(id == 1 && divi2.innerHTML == ''){
        divi2.innerHTML = `${letra}`
    }

    if(id == 2 && divi3.innerHTML == ''){
        divi3.innerHTML = `${letra}`
    }

    if(id == 3 && divi4.innerHTML == ''){
        divi4.innerHTML = `${letra}`
    }

    if(id == 4 && divi5.innerHTML == ''){
        divi5.innerHTML = `${letra}`
    }

    if(id == 5 && divi6.innerHTML == ''){
        divi6.innerHTML = `${letra}`
    }

    if(id == 6 && divi7.innerHTML == ''){
        divi7.innerHTML = `${letra}`
    }

    if(id == 7 && divi8.innerHTML == ''){
        divi8.innerHTML = `${letra}`
    }

    if(id == 8 && divi9.innerHTML == ''){
        divi9.innerHTML = `${letra}`
    }

    //comando de fim de jogo
    
    if(vetor[2] == vetor[4] && vetor[4] == vetor[6] && vetor[6] != 3){
       gameover()

    }

    if(vetor[0] == vetor[4] && vetor[4] == vetor[8] && vetor[8] != 3){
       gameover()
    }
    
    if(vetor[0] == vetor[3] && vetor[3] == vetor[6] && vetor[6] != 3){
       gameover()
    }

    if(vetor[0] == vetor[1] && vetor[1] == vetor[2] && vetor[2] != 3){
       gameover()
    }

    if(vetor[3] == vetor[4] && vetor[4] == vetor[5] && vetor[5] != 3){
       gameover()
    }

    if(vetor[6] == vetor[7] && vetor[7] == vetor[8] && vetor[8] != 3){
       gameover()
    }

    if(vetor[1] == vetor[4] && vetor[4] == vetor[7] && vetor[7] != 3){
       gameover()
    }

    if(vetor[2] == vetor[5] && vetor[5] == vetor[8] && vetor[8] != 3){
       gameover()
    }  
}

function resetar(){
    vetor = []
    for(let c = 0 ; c < 9; c++){
        vetor[c] = 3
    }
        divi1.innerHTML = '' ; divi2.innerHTML = '' ; divi3.innerHTML = ''
        divi4.innerHTML = '' ; divi5.innerHTML = '' ; divi6.innerHTML = ''
        divi7.innerHTML = '' ; divi8.innerHTML = '' ; divi9.innerHTML = ''

}

function gameover(){
    alert('fim de jogo')
    vetor = []
    for(let c = 0 ; c < 9; c++){
        vetor[c] = 3
    }
        divi1.innerHTML = '' ; divi2.innerHTML = '' ; divi3.innerHTML = ''
        divi4.innerHTML = '' ; divi5.innerHTML = '' ; divi6.innerHTML = ''
        divi7.innerHTML = '' ; divi8.innerHTML = '' ; divi9.innerHTML = ''
}

