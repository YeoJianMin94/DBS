let debit_credit_balance = {
    debit: 0,
    credit: 0
}

load_debit_credit = () =>{
    generate_debit_credit(74)
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
        TESTER = document.getElementById('PieGraph1');
        var data = [{
            values: [debit_credit_balance.debit, debit_credit_balance.credit],
            labels: ['Debit', 'Credit'],
            type: 'pie'
          }];
          
        var layout = {
            title:'Total Debit vs Total Crebit',
            height: 400,
            width: 500
          };
          
        Plotly.newPlot(TESTER, data, layout);

    })

    return 1;
}

// Main
$(document).ready(function(){
    //init();
    
    load_debit_credit();
});