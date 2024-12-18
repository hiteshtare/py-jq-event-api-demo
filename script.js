console.warn('Jai Guru - Thanks PY!');
const url = './example.json';
var result = [];

fetch(url)
    .then((response) => response.json())
    .then((data) => {
        console.warn('JSON response: data');
        console.log(data);
        result = data;
        renderTable();
    });

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
