
#include <array>
using namespace std;

class ParkingSystem {
    
    static enum class CarType {BIG = 1, MEDIUM = 2, SMALL = 3};
    static const size_t TOTAL_TYPES_OF_CARS = 3;
    array<int, TOTAL_TYPES_OF_CARS + 1 > freeSlots{0};
    
public:
    ParkingSystem(int big, int medium, int small) {
        freeSlots[static_cast<int> (CarType::BIG)] = big;
        freeSlots[static_cast<int> (CarType::MEDIUM)] = medium;
        freeSlots[static_cast<int> (CarType::SMALL)] = small;
    }

    bool addCar(int carType) {
        if (freeSlots[carType] > 0) {
            freeSlots[carType]--;
            return true;
        }
        return false;
    }
};
