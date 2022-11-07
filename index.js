function formatSplit(value) {
    if (value == 1) return value + " person";
    return value + " people";
}

// round the Money
function formatMoney(value){
    value = Math.ceil(value * 100)/100; //use this to round up smaller intergar, greater or equal to given number.
    value = value.toFixed(2); //round decimal to 2 digits
    return "$" + value;
}


function update(){
    let bill = Number(document.getElementById("bill").value);
    let tipInput = document.getElementById("tipInput").value;
    let splitPerson = document.getElementById("splitPerson").value;
    
    // calculations
    
    let tipValue = bill * (tipInput/100);
    let tipEach = tipValue / splitPerson;
    let newBillEach =  (bill + tipValue) / splitPerson;

    //setting values 

    document.getElementById("tipPercent").innerHTML = tipInput + "%";
    document.getElementById("tipValue").innerHTML = formatMoney(tipValue);
    document.getElementById("totalwithTip").innerHTML = formatMoney(bill + tipValue);
    document.getElementById("splitValue").innerHTML = formatSplit(splitPerson);
    document.getElementById("billEach").innerHTML = formatMoney(newBillEach);
    document.getElementById("tipEach").innerHTML = formatMoney(tipEach);

}
let container = document.getElementById("container");
container.addEventListener("input", update);