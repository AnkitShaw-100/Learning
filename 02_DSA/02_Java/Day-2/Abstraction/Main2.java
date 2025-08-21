interface Shape {
    double area();

    double perimeter();
}

class Rectangle implements Shape {

    double length, width;

    Rectangle(double l, double w) {
        length = l;
        width = w;
    }

    public double area() {
        return length * width;
    }

    public double perimeter() {
        return 2 * (length + width);
    }
}

class Circle implements Shape {

    double radius;

    Circle(double r) {
        radius = r;
    }

    public double area() {
        return 3.14 * radius * radius;
    }

    public double perimeter() {
        return 2 * 3.14 * radius;
    }
}

public class Main2 {
    public static void main(String[] args) {
        Shape rect = new Rectangle(4, 5);
        System.out.println("Area : " + rect.area());
        System.out.println("Perimeter : " + rect.perimeter());

        Shape Circle = new Circle(4);
        System.out.println("Area : " + Circle.area());
        System.out.println("Perimeter : " + Circle.perimeter());

    }

}
