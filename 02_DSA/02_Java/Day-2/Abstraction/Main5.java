interface Calculator {
    int add(int a, int b);

    int subtract(int a, int b);
}

class SimpleCalculator implements Calculator {
    public int add(int a, int b) {
        return a + b;
    }

    public int subtract(int a, int b) {
        return a - b;
    }

    public int multiplication(int a, int b) {
        return a * b;
    }

    public int divide(int a, int b) {
        if (b == 0) {
            System.out.println("Cannot divide by zero!");
            return 0;
        }
        return a / b;
    }
}

public class Main5 {
    public static void main(String[] args) {
        SimpleCalculator calc = new SimpleCalculator();

        System.out.println("Add : " + calc.add(10, 5));
        System.out.println("Subtraction : " + calc.subtract(10, 5));
        System.out.println("Multiplication : " + calc.multiplication(10, 5));
        System.out.println("Division : " + calc.divide(10, 5));
    }
}
