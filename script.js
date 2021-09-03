function compute()
{
    var principal = document.getElementById("principal").value;
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    var result = document.getElementById("result");
    if (principal.trim()=="" || parseFloat(principal)<=0){
        document.getElementById("principal").focus();

        alert("Enter a positive number");
        return false;
    }
    principal = parseFloat(principal);
    rate = parseFloat(rate);
    years = parseInt(years);
    var d = new Date();
    var year = d.getFullYear();
    var resuls='If you deposit : <span class="result_text">'+principal+'</span><br>' +
        'at an interest rate of : <span class="result_text">'+(rate+"%")+'</span><br>' +
        'You will receive an amount of : <span class="result_text">'+(principal*rate*years)+'</span><br>' +
        'In the year : <span class="result_text">'+(year+years)+'</span><br>';
    result.innerHTML=resuls;
    return true;

}
function init_values(){
    var years= document.getElementById("years");
    var options="";
    for (var i=1;i<100;i++){
        options+='<option value="'+i+'">'+i+'</option>';
    }
    years.innerHTML=options;
}
function changeRange(){
    var rate = document.getElementById("rate").value;
    document.getElementById("percent").innerText=rate+"%"
    // console.log(rate);
}
        