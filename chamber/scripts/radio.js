
function insertHTML(){
    var radios = document.getElementById("radios");
    var selectedOption = radios.querySelector('input[name="membership"]:checked');

    if(selectedOption){
        var value = selectedOption.value;
        var resultDiv = document.getElementById("memberInfo");

        if(value === "np"){
            resultDiv.innerHTML = "<h1>NP Membership</h1> <h3>Free</h3> <ul><li> Access to all private events (with fee) </li></ul>";
        }else if (value === "bronze"){
            resultDiv.innerHTML = "<h1>Bronze Membership</h1><h3>$1,000</h3> <ul><li> Access to all private events</li><li>10% discount on public events</li></ul>";
        }else if(value === "silver"){
            resultDiv.innerHTML = "<h1>Silver Membership</h1><h3>$5,000</h3> <ul><li> Access to all private events</li><li>10% discount on public events</li><li>Sponsorship on event tents</li></ul>";
        }else if(value === "gold"){
            resultDiv.innerHTML = "<h1>Gold Membership</h1><h3>$10,000</h3> <ul><li> Access to all private events</li><li>25% discount on public events</li><li>Sponsorship on event tents</li><li>Sponsorship on Aquasox billboard</li></ul>";
        }
    }
}