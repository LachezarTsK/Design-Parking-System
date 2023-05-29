
using System;

public class ParkingSystem
{
    enum CarType { BIG = 1, MEDIUM = 2, SMALL = 3 }
    static readonly int TOTAL_TYPES_OF_CARS = 3;
    readonly int[] freeSlots = new int[TOTAL_TYPES_OF_CARS + 1];

    public ParkingSystem(int big, int medium, int small)
    {
        freeSlots[((int)CarType.BIG)] = big;
        freeSlots[(int)CarType.MEDIUM] = medium;
        freeSlots[(int)CarType.SMALL] = small;
    }

    public bool AddCar(int carType)
    {
        if (freeSlots[carType] > 0)
        {
            freeSlots[carType]--;
            return true;
        }
        return false;
    }
}
