const { data, inputAssumptions } = require('./data');
const { mergeSort } = require('./sortingFunctions');
const {
    extractMeetingsFromCalendar,
    mergeObligationTimelines,
    createAvailableSlotArray
} = require('./proccess-Input');

const createSlot = (data, inputAssumptions) => {
    let obligationArray = extractMeetingsFromCalendar(data); //O(n log n)
    obligationArray = mergeSort(obligationArray)  //O(n log n)
    obligationArray = mergeObligationTimelines(obligationArray); //O(n)
    const { startTime, endTime, requiredSlot } = inputAssumptions;
    const slot = createAvailableSlotArray(startTime, endTime, requiredSlot, obligationArray); //O(n)
    return JSON.stringify(slot);
}

console.log(createSlot(data, inputAssumptions)); //Total Complexity: O(n log n)