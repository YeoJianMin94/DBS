
load_debit_credit = () =>{
    generate_spendings(74)
}

generate_spendings = (accountId) => {
    console.log("here")
    $.getJSON('http://127.0.0.1:3000/customers/transactionsbalance/10',function(data){
        //data = data.json()
        //let result = data.result;
        //console.log(result)
        let data_parse = {
            atm: data.ATM,
            transport: data.TRANSPORT,
            transfer: data.TRANSFER,
            fb: data.FB
        }
        Graph2 = document.getElementById('PieGraph2');
        var data = [{
            values: [data_parse.atm, data_parse.transport, data_parse.transfer, data_parse.fb],
            labels: ['ATM', 'Transport','Transfer','F&B'],
            type: 'pie'
          }];
          
        var layout = {
            height: 400,
            width: 500
          };
          
        Plotly.newPlot(Graph2, data, layout);

    })

    return 1;
}

// Main
$(document).ready(function(){
    //init();
    
    load_debit_credit();
});