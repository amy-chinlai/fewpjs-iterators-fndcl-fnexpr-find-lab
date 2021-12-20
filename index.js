function superbowlWin(records) {
    let winner = records.find(function(r) { return r.result === "W" })
    console.log(winner)
    return !!winner ? winner.year : undefined
}

// playing

const records = record.map(record => console.log(record.year))