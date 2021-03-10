const Queue = require('./queue-data-structure');

const extractMeetingsFromCalendar = (data) => {
    const resultArray = [];

    for (let left = 0, right = data.length - 1; left < right; left++, right--) {
        const length = Math.max(data[left].meetings.length, data[right].meetings.length);
        for (let i = 0; i < length; i++) {
            if (data[left].meetings[i])
                resultArray.push({
                    startTime: Date.parse(data[left].meetings[i].startTime),
                    endTime: Date.parse(data[left].meetings[i].endTime)
                });
            if (data[right].meetings[i])
                resultArray.push({
                    startTime: Date.parse(data[right].meetings[i].startTime),
                    endTime: Date.parse(data[right].meetings[i].endTime)
                });
        }
    }
    if (data.length % 2 != 0) {
        const middle = Math.floor(data.length / 2) + 1;
        for (let i = 0; i < data[middle].meetings.length; i++) {
            resultArray.push({
                startTime: Date.parse(data[middle].meetings[i].startTime),
                endTime: Date.parse(data[middle].meetings[i].endTime)
            });
        }
    }
    return resultArray;
};

const mergeObligationTimelines = (array) => {
    const result = [];
    const q = new Queue();
    for (let meeting of array) q.enqueue(meeting);
    result.push(q.dequeue());
    let i = 0;
    while (q.size > 0) {
        const meeting = q.dequeue();
        const last = result.length - 1;
        if (result[last].endTime >= meeting.startTime) result[last].endTime = meeting.endTime;
        else result.push(meeting);
    }
    return result;
}

const createAvailableSlotArray = (windowStartTime, windowEndTime, windowSize, array) => {
    let resultArray = [];
    resultArray = addWindow(windowStartTime, array[0].startTime, windowSize, resultArray);
    for (let i = 0; i < array.length - 1; i++) {
        const startTime = array[i].endTime;
        const endTime = array[i + 1].startTime;
        resultArray = addWindow(startTime, endTime, windowSize, resultArray);
    }
    resultArray = addWindow(array[array.length - 1].endTime, windowEndTime, windowSize, resultArray);
    return resultArray;
}

const addWindow = (startTime, endTime, windowSize, resultArray) => {
    if (endTime - startTime >= windowSize) {
        resultArray.push({
            startTime: (new Date(startTime).toISOString()),
            endTime: (new Date(endTime).toISOString())
        });
    }
    return resultArray;
};

module.exports = {
    extractMeetingsFromCalendar,
    mergeObligationTimelines,
    createAvailableSlotArray
}

