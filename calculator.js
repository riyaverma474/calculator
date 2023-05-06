// let num= document.getElementsByClassName('number')
// console.log(num)

// let showOutput= document.getElementById('output')
// console.log(showOutput)

// Array.prototype.forEach.call (num, (button) => {
//     button.addEventListener("click", () => {
//      showOutput.innerHTML += button.innerText
//     })
//   })

const clearScreen=()=>{
    document.getElementById('output').innerHTML =" "
}



const display=(value)=>{
    document.getElementById('output').innerHTML +=value;
}


function calculate() {
   var p = document.getElementById("output").innerHTML;
    var q = eval(p);
   document.getElementById("output").innerHTML = q;
}

function deleting(){
    var p1 = document.getElementById("output").innerHTML;
    var del = Number(p1.toString().slice(0, -1))
    document.getElementById("output").innerHTML = del;

}


