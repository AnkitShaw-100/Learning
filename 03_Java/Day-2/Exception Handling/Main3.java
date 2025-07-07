// Using throw
public class Main3 {
    public static void checkAge(int age) {
        if (age < 18) {
            throw new ArithmeticException("You are not eligible to vote..!!");
        } else {
            System.out.println("You can vote.");
        }
    }

    public static void main(String[] args) {
        checkAge(19);
    }
}
