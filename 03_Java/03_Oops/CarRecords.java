// Class and objects (Car Example using Constructor)
public class CarRecords {
    // Car class
    public static class Car {
        String name;
        int number;
        int seats;

        // Constructor
        Car(String name, int number, int seats) {
            this.name = name;
            this.number = number;
            this.seats = seats;
        }

        // Method to print car details
        void displayDetails() {
            System.out.println(name);
            System.out.println(number);
            System.out.println(seats);
        }
    }

    public static void main(String[] args) {
        // Create objects using constructor
        Car c1 = new Car("Honda City", 101, 4);
        Car c2 = new Car("Scorpio", 202, 7);
        Car c3 = new Car("Thar", 303, 4);

        // Print details
        c1.displayDetails();
        c2.displayDetails();
        c3.displayDetails();
    }
}
