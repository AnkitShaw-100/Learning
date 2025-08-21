abstract class Vehicle {
    abstract void start();

    void fuel() {
        System.out.println("Vehicle is refueling...");
    }
}

class Car extends Vehicle {
    void start() {
        System.out.println("car engine started");
    }
}

public class Main4 {
    public static void main(String[] args) {
        Vehicle car = new Car();

        car.start();
        car.fuel();
    }
}
