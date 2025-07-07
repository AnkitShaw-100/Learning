// Unchecked Exception (NullPointerException)
public class Main2 {
    public static void main(String[] args) {
        try {
            String s = null;
            System.out.println(s.length());
        } catch (NullPointerException e) {
            System.out.println("Caught NullPointerException!");
        }

        try {
            int x = 5 / 0;
        } catch (ArithmeticException e) {
            System.out.println("Caught ArithmeticException");
        }
    }
}
