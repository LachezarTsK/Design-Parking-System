
/**
 * @param {number} big
 * @param {number} medium
 * @param {number} small
 */
var ParkingSystem = function (big, medium, small) {
    this.CarType = {BIG: 1, MEDIUM: 2, SMALL: 3};
    this.TOTAL_TYPES_OF_CARS = 3;
    this.freeSlots = new Array(this.TOTAL_TYPES_OF_CARS + 1).fill(0);

    this.freeSlots[this.CarType.BIG] = big;
    this.freeSlots[this.CarType.MEDIUM] = medium;
    this.freeSlots[this.CarType.SMALL] = small;
};

/** 
 * @param {number} carType
 * @return {boolean}
 */
ParkingSystem.prototype.addCar = function (carType) {
    if (this.freeSlots[carType] > 0) {
        this.freeSlots[carType]--;
        return true;
    }
    return false;
};
