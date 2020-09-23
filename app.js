class Die{
    constructor(){
        this.value = Math.floor(Math.random()*6)+1
    }
    roll(){
        this.value = Math.floor(Math.random()*6)+1
    }
}

let generateBtn = document.getElementById('generate-die')

generateBtn.addEventListener('click',()=>{
    let die = new Die
    let div = document.createElement('div')
    let divText = document.createTextNode(die.value)
    document.body.appendChild(div)
    div.appendChild(divText)
    div.className = 'dice'
    div.addEventListener('dblclick',()=>{
        div.remove()
    })
})

let rollBtn = document.getElementById('roll-dice')

rollBtn.addEventListener('click',()=>{
    let diceArray = document.getElementsByClassName('dice')
    for (x of diceArray){
        x.innerHTML = Math.floor(Math.random()*6)+1
    }
})

let sumBtn = document.getElementById('sum-dice')

sumBtn.addEventListener('click', ()=>{
    let diceArray = document.getElementsByClassName('dice')
    let diceTotal = 0
    for (x of diceArray){
        diceTotal = diceTotal + parseInt(x.innerHTML)
    }
    alert(diceTotal)
})