// Class and objects (Car Example)
public class CarClass {
    // Car class
    public static class Car {
        String name;
        int number;
        int seats;
    }

    public static void main(String[] args) {
        // Object 1
        Car c1 = new Car();
        c1.name = "Honda City";
        c1.number = 101;
        c1.seats = 4;

        // Object 2
        Car c2 = new Car();
        c2.name = "Scorpio";
        c2.number = 202;
        c2.seats = 7;

        // Object 3
        Car c3 = new Car();
        c3.name = "Thar";
        c3.number = 303;
        c3.seats = 4;

        // Print details
        System.out.println(c1.name);
        System.out.println(c1.number);
        System.out.println(c1.seats);

        System.out.println(c2.name);
        System.out.println(c2.number);
        System.out.println(c2.seats);

        System.out.println(c3.name);
        System.out.println(c3.number);
        System.out.println(c3.seats);
    }
}
