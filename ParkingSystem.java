
public class ParkingSystem {

    static enum CarType {
        BIG(1), MEDIUM(2), SMALL(3);
        int code;
        CarType(int code) {
            this.code = code;
        }
    }

    static final int TOTAL_TYPES_OF_CARS = 3;
    int[] freeSlots = new int[TOTAL_TYPES_OF_CARS + 1];

    public ParkingSystem(int big, int medium, int small) {
        freeSlots[CarType.BIG.code] = big;
        freeSlots[CarType.MEDIUM.code] = medium;
        freeSlots[CarType.SMALL.code] = small;
    }

    public boolean addCar(int carType) {
        if (freeSlots[carType] > 0) {
            freeSlots[carType]--;
            return true;
        }
        return false;
    }
}
