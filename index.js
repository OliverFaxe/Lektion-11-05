const car = {
    make: "Volvo",
    model: "V70",
    year: 2016,
    manualTransmission: true,
    start: function() {
        console.log("The car has started");
    },
};

for (const key in car) {
    const value = car[key];
    console.log(`${key}: ${value}`);
}