let debit_credit_balance = {
    debit: 0,
    credit: 0
}

load_debit_credit = () =>{
    generate_debit_credit(74)
    // document.getElementById("debit").innerHTML = debit_credit_balance.debit;
    // document.getElementById("credit").innerHTML = debit_credit_balance.credit;
}

generate_debit_credit = (accountId) => {
    console.log("here")
    $.getJSON('http://127.0.0.1:3000/customers/transactionsbalance/10',function(data){
        //data = data.json()
        //let result = data.result;
        //console.log(result)
        let data_parse = {
            debit: data.debit,
            credit: data.credit
        }
        debit_credit_balance = data_parse;
        document.getElementById("debit").innerHTML = data.debit;
        document.getElementById("credit").innerHTML = data.credit;
        console.log(data_parse)
    })

    return 1;
}

// Main
$(document).ready(function(){
    //init();
    
    load_debit_credit();
});