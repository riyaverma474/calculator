

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
    var del = p1.slice(0, -1)
    document.getElementById("output").innerHTML = del;

}


