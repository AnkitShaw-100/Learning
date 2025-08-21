class Shape {
    void area() {
        System.out.println("Area of Shape");
    }
}

class Circle extends Shape {
    void area() {
        System.out.println("Area of Circle : π*r^2");
    }
}

class Rectangle extends Shape {
    void area() {
        System.out.println("Area of Rectangle : l * b ");
    }
}

public class PolymorphismDemo {
    public static void main(String[] args) {
        Shape[] shapes = { new Circle(), new Rectangle() };

        for (Shape s : shapes) {
            s.area();
        }
    }

}
