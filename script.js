console.warn('Jai Guru - PY!');


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

function getAppConfigByLanguage(languageId) {
    const appConfig = [
        {
            language: "en", //English
            translations: {
                months: {
                    strJan: "Jan",
                    strFeb: "Feb",
                    strMar: "Mar",
                    strApr: "Apr",
                    strMay: "May",
                    strJun: "Jun",
                    strJul: "Jul",
                    strAug: "Aug",
                    strSep: "Sep",
                    strOct: "Oct",
                    strNov: "Nov",
                    strDec: "Dec",
                },
                strNoEvent: "No event found",
            },
        },
        {
            language: "hi", //Hindi
            translations: {
                months: {
                    strJan: "जनवरी",
                    strFeb: "फ़रवरी",
                    strMar: "मार्च",
                    strApr: "अप्रैल",
                    strMay: "मई",
                    strJun: "जून",
                    strJul: "जुलाई",
                    strAug: "अगस्त",
                    strSep: "सितम्बर",
                    strOct: "अक्टूबर",
                    strNov: "नवम्बर",
                    strDec: "दिसम्बर",
                },
                strNoEvent: "कोई कार्यक्रम नहीं मिला",
            },
        },
        {
            language: "ta", //Tamil
            translations: {
                months: {
                    strJan: "ஜனவரி",
                    strFeb: "பிப்ரவரி",
                    strMar: "மார்ச்",
                    strApr: "ஏப்ரல்",
                    strMay: "மே",
                    strJun: "ஜூன்",
                    strJul: "ஜூலை",
                    strAug: "ஆகஸ்ட்",
                    strSep: "செப்டம்பர்",
                    strOct: "அக்டோபர்",
                    strNov: "நவம்பர்",
                    strDec: "டிசம்பர்",
                },
                strNoEvent: "நிகழ்வு எதுவும் காணப்படவில்லை",
            },
        },
        {
            language: "te", //Telugu
            translations: {
                months: {
                    strJan: "జనవరి",
                    strFeb: "ఫిబ్రవరి",
                    strMar: "మర్చి",
                    strApr: "ఏప్రిల్",
                    strMay: "మే",
                    strJun: "జూన్",
                    strJul: "జూలై",
                    strAug: "ఆగష్టు",
                    strSep: "సెప్టెంబర్",
                    strOct: "అక్టోబర్",
                    strNov: "నవంబర్",
                    strDec: "డిసెంబర్",
                },
            },
        },
    ];
    //Set current Config acroos the app based on Language code from URL
    const languageConfig = appConfig.find((x) => x.language === languageId);

    return languageConfig;
}
const currentConfig = getAppConfigByLanguage("en");

function renderTable() {
    var tableStr = '';
    result.forEach((obj) => {
        const rawStartDate = new Date(obj.event_date);
        let strMonthLocaleString = rawStartDate.toLocaleString("en-US", {
            month: "short",
        });
        strMonthLocaleString = `str` + strMonthLocaleString;
        const calcStrMonth = `${currentConfig.translations.months[strMonthLocaleString]}`;

        const date =
            rawStartDate.getDate() +
            " " +
            calcStrMonth +
            " " +
            rawStartDate.getFullYear();

        const colImage = `<td rowspan="${obj.schedule.length}"><img class="heroimage" src="${obj.event_image}"></img></td>`;
        const colDate = `<td rowspan="${obj.schedule.length}">${date}</td>`;
        const colTitle = `<td rowspan="${obj.schedule.length}"><b>${obj.event_title}</b></td>`;

        let colSchedule = ``;
        let tableRow = ``;
        obj.schedule.forEach((item, index) => {
            const startTimeStr = new Date(item.schedule_starttime).toLocaleString(
                "en-US",
                {
                    hour: "numeric",
                    minute: "numeric",
                    hour12: true,
                }
            );
            const endTimeStr = new Date(item.schedule_endtime).toLocaleString(
                "en-US",
                {
                    hour: "numeric",
                    minute: "numeric",
                    hour12: true,
                }
            );

            colSchedule = `<td style="vertical-align: middle !important">
            <p style="text-align: center">${startTimeStr} to ${endTimeStr}</p>
    
            <p style="text-align: center"><i>${item.schedule_name}</i></p>
            </td>`;
            if (index == 0) {
                tableRow = `<tr>${colImage}${colDate}${colTitle}${colSchedule}</tr>`;
            }
            else {
                tableRow = `<tr>${colSchedule}</tr>`;
            }
            tableStr += tableRow;
        });
    });
    $('#schedule tbody').html(tableStr);
}

renderTable();
