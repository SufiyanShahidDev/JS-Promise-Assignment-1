
const delayValue = (ms, value) => {
    return new Promise = (resolve, reject) => {
        if (typeof ms !== "number" || ms < 0) {
            return reject("Invalid delay time");
        } else {
            setTimeout(() => {
                resolve(value);
            }, ms);
        }
    };
};

delayValue(3000, "Promise Resolved")
.then((res) => {
    console.log(res);
})
.catch((err) => {
    console.log(err); 
})