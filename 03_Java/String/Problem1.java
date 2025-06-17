import java.util.Scanner;

public class Problem1 {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        System.out.print("Enter a string: ");
        String str = scanner.nextLine();
        int ascii;
        for (int i = 0; i < str.length(); i++) {
            char ch = str.charAt(i);
            ascii = (int) ch;
            System.out.println(ascii);
        }
        scanner.close();
    }
}
