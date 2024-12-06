console.log('Jai Guru - PY!');

var result = [
    {
        "event_id": 2,
        "event_title": "Christmas",
        "event_date": "2024-12-25",
        "event_desc": "Merry Christmas",
        "event_image": "https://yssofindia.org/wp-content/uploads/2024/09/Jesus-Christ-Featured-Image-Ranchi-Ashram-Homepage-Events-Section-300x300.jpg",
        "schedule": [
            {
                "schedule_id": 1,
                "schedule_date": "2024-12-25",
                "schedule_starttime": "2024-01-05T06:30:00+05:30",
                "schedule_endtime": "2024-01-05T08:00:00+05:30",
                "schedule_name": "Morning Meditation",
            },
            {
                "schedule_id": 2,
                "schedule_date": "2024-12-25",
                "schedule_starttime": "2024-01-05T09:30:00+05:30",
                "schedule_endtime": "2024-01-05T11:30:00+05:30",
                "schedule_name": "Guru Puja",
            },
            {
                "schedule_id": 3,
                "schedule_date": "2024-12-25",
                "schedule_starttime": "2024-01-05T18:00:00+05:30",
                "schedule_endtime": "2024-01-05T21:00:00+05:30",
                "schedule_name": "Evening Meditation",
            }
        ]
    },
    {
        "event_id": 3,
        "event_title": "New Years Eve",
        "event_date": "2024-12-31",
        "event_desc": "Happy New Year",
        "event_image": "https://yssofindia.org/wp-content/uploads/2024/01/YSS-Ranchi-Ashram-Diwali-2023-Featured-Image-600x450.jpg",
        "schedule": [
            {
                "schedule_id": 1,
                "schedule_date": "2024-12-31",
                "schedule_starttime": "2024-12-31T23:30:00+05:30",
                "schedule_endtime": "2025-01-01T00:30:00+05:30",
                "schedule_name": "Special New Years Eve Meditation",
                "colspan": 1,
                "rowspan": 1
            }
        ]
    },
    {
        "event_id": 5,
        "event_title": "Gurudeva’s Janmotsav",
        "event_date": "2025-01-05",
        "event_desc": "The celebrations of the 124th Birth Anniversary of Sri Sri Paramahansa Yogananda (1893-1952), author of the spiritual classic ‘Autobiography of a Yogi’, and the centenary of the Yogoda Satsanga Society of India (YSS) took place on 5th Jan in Ranchi",
        "event_image": "https://yssofindia.org/wp-content/uploads/2024/09/Paramahansa-Yogananda-Standard-Image-Ranchi-Ashram-Homepage-Events-Section-300x300.jpg",

        "schedule": [
            {
                "schedule_id": 1,
                "schedule_date": "2025-01-05",
                "schedule_starttime": "2025-01-05T06:40:00+05:30",
                "schedule_endtime": "2025-01-05T08:00:00+05:30",
                "schedule_name": "Morning Meditation",
                "colspan": 1,
                "rowspan": 2
            },
            {
                "schedule_id": 2,
                "schedule_date": "2025-01-05",
                "schedule_starttime": "2025-01-05T18:00:00+05:30",
                "schedule_endtime": "2025-01-05T19:40:00+05:30",
                "schedule_name": "Evening Meditation",
                "colspan": 1,
                "rowspan": 2
            }
        ]
    }
];

var tableStr = '';
result.forEach((obj) => {
    const colImage = `<td rowspan="${obj.schedule.length}"><img class="heroimage" src="${obj.event_image}"></img></td>`;
    const colDate = `<td rowspan="${obj.schedule.length}">${obj.event_date}</td>`;
    const colTitle = `<td rowspan="${obj.schedule.length}">${obj.event_title}</td>`;

    let colSchedule = ``;
    let tableRow = ``;
    obj.schedule.forEach((item,index) => {

        colSchedule = `<td style="vertical-align: middle !important">
        <p style="text-align: center">${item.schedule_starttime} to ${item.schedule_endtime}</p>

        <p style="text-align: center">${item.schedule_name}</p>
        </td>`;
        if(index == 0) {
            tableRow = `<tr>${colImage}${colDate}${colTitle}${colSchedule}</tr>`;
        }
        else {
            tableRow = `<tr>${colSchedule}</tr>`;
        }
        tableStr += tableRow;
    });
});
$('#schedule tbody').html(tableStr);