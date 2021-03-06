const data = [
    {
        "name": "Betty",
        "meetings": [
            {
                "startTime": "2021-03-10T08:55:39+00:00",
                "endTime": "2021-03-10T09:15:39+00:00",
                "subject": "Meeting 1"
            },
            {
                "startTime": "2021-03-10T09:55:39+00:00",
                "endTime": "2021-03-10T10:15:39+00:00",
                "subject": "Meeting 2"
            },
            {
                "startTime": "2021-03-10T11:55:39+00:00",
                "endTime": "2021-03-10T12:15:39+00:00",
                "subject": "Meeting 3"
            }
        ]
    },
    {
        "name": "John",
        "meetings": [
            {
                "startTime": "2021-03-10T08:15:39+00:00",
                "endTime": "2021-03-10T09:55:39+00:00",
                "subject": "Meeting a"
            },
            {
                "startTime": "2021-03-10T10:15:39+00:00",
                "endTime": "2021-03-10T10:55:39+00:00",
                "subject": "Meeting b"
            },
            {
                "startTime": "2021-03-10T11:15:39+00:00",
                "endTime": "2021-03-10T12:55:39+00:00",
                "subject": "Meeting c"
            }
        ]
    }
];

const inputAssumptions = {
    startTime: Date.parse("2021-03-10T07:15:39+00:00"),
    endTime: Date.parse("2021-03-10T23:15:39+00:00"),
    requiredSlot: 1000 * 60 * 45 //45 Minutes
}

module.exports = { data, inputAssumptions };

