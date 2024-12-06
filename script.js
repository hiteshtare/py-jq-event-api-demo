console.log('Jai Guru - PY!');

var result = [
    {
        "event_id": 2,
        "event_title": "Christmas",
        "event_date": "2024-12-25",
        "event_desc": "Merry Christmas",
        "event_image": "https://yssofindia.org/wp-content/uploads/2024/09/Jesus-Christ-Featured-Image-Ranchi-Ashram-Homepage-Events-Section-300x300.jpg",
        "schedule_id": 1,
        "schedule_date": "2024-12-25",
        "schedule_starttime": "2024-01-05T06:30:00+05:30",
        "schedule_endtime": "2024-01-05T08:00:00+05:30",
        "schedule_name": "Morning Meditation",
        "colspan": 1,
        "rowspan": 3
    },
    {
        "event_id": 2,
        "event_title": "Christmas",
        "event_date": "2024-12-25",
        "event_desc": "Merry Christmas",
        "event_image": "https://yssofindia.org/wp-content/uploads/2024/09/Jesus-Christ-Featured-Image-Ranchi-Ashram-Homepage-Events-Section-300x300.jpg",
        "schedule_id": 2,
        "schedule_date": "2024-12-25",
        "schedule_starttime": "2024-01-05T09:30:00+05:30",
        "schedule_endtime": "2024-01-05T11:30:00+05:30",
        "schedule_name": "Guru Puja",
        "colspan": 1,
        "rowspan": 3
    },
    {
        "event_id": 2,
        "event_title": "Christmas",
        "event_date": "2024-12-25",
        "event_desc": "Merry Christmas",
        "event_image": "https://yssofindia.org/wp-content/uploads/2024/09/Jesus-Christ-Featured-Image-Ranchi-Ashram-Homepage-Events-Section-300x300.jpg",
        "schedule_id": 3,
        "schedule_date": "2024-12-25",
        "schedule_starttime": "2024-01-05T18:00:00+05:30",
        "schedule_endtime": "2024-01-05T21:00:00+05:30",
        "schedule_name": "Evening Meditation",
        "colspan": 1,
        "rowspan": 3
    },
    {
        "event_id": 3,
        "event_title": "New Years Eve",
        "event_date": "2024-12-31",
        "event_desc": "Happy New Year",
        "event_image": "https://yssofindia.org/wp-content/uploads/2024/01/YSS-Ranchi-Ashram-Diwali-2023-Featured-Image-600x450.jpg",
        "schedule_id": 3,
        "schedule_date": "2024-12-31",
        "schedule_starttime": "2024-12-31T23:30:00+05:30",
        "schedule_endtime": "2025-01-01T00:30:00+05:30",
        "schedule_name": "Special New Years Eve Meditation",
        "colspan": 1,
        "rowspan": 1
    },
    {
        "event_id": 5,
        "event_title": "Gurudeva’s Janmotsav",
        "event_date": "2025-01-05",
        "event_desc": "The celebrations of the 124th Birth Anniversary of Sri Sri Paramahansa Yogananda (1893-1952), author of the spiritual classic ‘Autobiography of a Yogi’, and the centenary of the Yogoda Satsanga Society of India (YSS) took place on 5th Jan in Ranchi",
        "event_image": "https://yssofindia.org/wp-content/uploads/2024/09/Paramahansa-Yogananda-Standard-Image-Ranchi-Ashram-Homepage-Events-Section-300x300.jpg",
        "schedule_id": 1,
        "schedule_date": "2025-01-05",
        "schedule_starttime": "2025-01-05T06:40:00+05:30",
        "schedule_endtime": "2025-01-05T08:00:00+05:30",
        "schedule_name": "Morning Meditation",
        "colspan": 1,
        "rowspan": 2
    },
    {
        "event_id": 5,
        "event_title": "Gurudeva’s Janmotsav",
        "event_date": "2025-01-05",
        "event_desc": "The celebrations of the 124th Birth Anniversary of Sri Sri Paramahansa Yogananda (1893-1952), author of the spiritual classic ‘Autobiography of a Yogi’, and the centenary of the Yogoda Satsanga Society of India (YSS) took place on 5th Jan in Ranchi",
        "event_image": "https://yssofindia.org/wp-content/uploads/2024/09/Paramahansa-Yogananda-Standard-Image-Ranchi-Ashram-Homepage-Events-Section-300x300.jpg",
        "schedule_id": 2,
        "schedule_date": "2025-01-05",
        "schedule_starttime": "2025-01-05T18:00:00+05:30",
        "schedule_endtime": "2025-01-05T19:40:00+05:30",
        "schedule_name": "Evening Meditation",
        "colspan": 1,
        "rowspan": 2
    }
];

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
    "user_data": [{
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
result.forEach((obj) => {
    tableStr += '<tr><td colspan="' + obj.colspan + '">' + `<img class="heroimage" src='${obj.event_image}'></img>` + '</td>' + '<td>' + obj.event_date + '</td><td>' + obj.event_title + '</td><td>' + obj.schedule_starttime+ '</td></tr>';
});
$('#schedule tbody').html(tableStr);

var tableStr = '';
data.forEach((obj) => {
    var userData = obj.user_data;
    var total = 0;

    userData.forEach((o, index) => {
        tableStr += '<tr>' + (index == 0 ? '<td rowspan="' + userData.length + '">' + obj.name + '</td>' : '') + '<td>' + o.time1 + '</td><td>' + o.time2 + '</td><td>' + o.amount + '</td></tr>';
        total += o.amount;
    });
    tableStr += '<tr><td colspan="3">Total</td><td>' + total + '</td></tr>';
});
$('#user tbody').html(tableStr);