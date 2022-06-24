// //DATUM

// let datum = document.getElementById("datum")
// let dag = new Date()
// let options= {weekday: 'short', year: 'numeric', month: 'long', day:'numeric'}
// let volDat = dag.toLocaleString('nl-BE', options)

// datum.innerHTML = volDat
// let weekdag = ["zondag", "maandag", "dinsdag", "woensdag", "donderdag", "vrijdag", "zaterdag"]

// weekdag = weekdag[new Date().getDay()]
// console.log(weekdag)
// // getDay(), getDate(), getMonth(), getFullYear()

// let datum1 = document.getElementById("datum1")
// let date = new Date().getDate()
// console.log(date)
// let maand = ["jan", "feb", "maa", "apr", "mei", "juni"]
// maand = maand[new Date().getMonth()]
// console.log(maand)
// let jaar = new Date().getFullYear()
// console.log(jaar)
// datum1.innerHTML = weekdag + " " + date + " " + maand + " "+ jaar



// //opdrachtje: afhankelijk van de tijd andere boodschap in HTML
// console.log(new Date().getMinutes())

// // setInterval(function(){
// //     datum1.innerHTML = new Date().getSeconds()
// // },1000)

// //MATH OBJECTS
// let result = Math.random()
// result = Math.random()
// result = (Math.round(result *9))+1 //van 1-10
// // result = (Math.round(Math.random()*10))
// console.log(result)

// let speelgoed = ["bal", "pop", "lego", "beer", "auto", "puzzel", "playstation", "monopoly", "kleuren", "kaarten", "lezen"]
// let kind = speelgoed[Math.round(Math.random()*10)]
// console.log(speelgoed)
// console.log(kind)

// //functies
// function test1(param1,param2,param3){
//     console.log("hallo") 
//  return   console.log(param1, param2, param3)
// console.log("goodbuy")
// }
// test1("hello", 5, "🎁")
// test1("hallo", "Freddy", 10)
// test1("5", "hoi", 5)

// const test2 = (param4, param5)=>{
//     console.log(param4, param5)
// }
// test2("hallo", "hello")

// let vrienden = ["Els", "Marie", "Linda", "Karen"]
// console.log(vrienden)
// function friends(vriend){
//     vrienden.push(vriend)
// }
// friends("An");
// friends("Sofie")
// friends("Lola")
// console.log(vrienden)

// let z;
// let a=5;
// let b=7;
// // a=6;
// // b=4;
// function gemiddelde(a,b){
//     return z=(a+b)/2
// }
// gemiddelde(a,b)
// console.log(z)

//FILTER
var studenten =[
    {
        id:1,
        naam: "Jos",
        cursus: "JAVA",
        punten: 55
    },
    {
        id:2,
        naam: "Louis",
        cursus: "JAVA",
        punten: 25
    },
    {
        id:3,
        naam: "Marie",
        cursus: "JAVA",
        punten: 75
    },
    {
        id:4,
        naam: "Linda",
        cursus: "JAVA",
        punten: 15
    },
    {
        id:5,
        naam: "Marc",
        cursus: "JAVA",
        punten: 60
    }
]
let geslaagd = studenten.filter(diploma)

function diploma(punt){
    return punt.punten <=50
}
console.log(geslaagd)

//EVENTS
let num1= document.getElementById("num1")
console.log(Number(num1.value))
let num2 = document.getElementById("num2")
let som;
let uitkomst = document.getElementById("uitkomst")
function bereken(){
 som = Number(num1.value) + Number(num2.value)
uitkomst.innerHTML = "De uitkomst is " + som
}

let counter = document.getElementById("counter")
let optellen = document.getElementById("optellen")
let aftrekken = document.getElementById("aftrekken")
let reset = document.getElementById("reset")
let count = 0
optellen.addEventListener("click", function() {
    
count ++
counter.innerHTML = count
if(count>0){
    counter.style.color = 'green'
}
console.log(count)

})

aftrekken.addEventListener("click", function(){
count--;
counter.innerHTML = count
if(count<0){
    counter.style.color = 'red'
}
console.log(count) 
})

reset.addEventListener("click", function(){
   
        count=0
        counter.innerHTML = count
        if(count==0){
            counter.style.color = 'blue'
        }
console.log(count)
    

})
          counter.textContent = count
         console.log(count)


