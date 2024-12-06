console.log('Hello!');

var data = [{
    "user_data": [{
      "amount": 2550,
      "time1": "2017/04/05",
      "time2": "2017/04/06"
    }, {
      "amount": 2550,
      "time1": "2017/04/05",
      "time2": "2017/04/06"
    }],
    "name": "hulk"
  }, {
    "user_data": [ {
      "amount": 2125,
      "time1": "2017/04/05",
      "time2": "2017/04/06"
    }, {
      "amount": 1700,
      "time1": "2017/04/05",
      "time2": "2017/04/06"
    }, {
      "amount": 1700,
      "time1": "2017/04/05",
      "time2": "2017/04/06"
    }, {
      "amount": 2125,
      "time1": "2017/04/05",
      "time2": "2017/04/06"
    }],
    "name": "gomu"
  }];
  
  var tableStr = '';
  data.forEach((obj) => {
      var userData = obj.user_data;
      var total = 0;
     
      userData.forEach((o, index) => {
        tableStr += '<tr>' + (index == 0 ? '<td rowspan="' + userData.length + '">' + obj.name + '</td>' : '') + '<td>'+o.time1+'</td><td>'+o.time2+'</td><td>'+o.amount+'</td></tr>';
         total += o.amount;
     });
     tableStr += '<tr><td colspan="3">Total</td><td>' + total + '</td></tr>';
  });
  $('#user tbody').html(tableStr);