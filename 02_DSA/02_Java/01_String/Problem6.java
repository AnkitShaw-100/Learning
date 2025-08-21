import java.util.Scanner;

public class Problem6 {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.println("Enter a string:");
        String str = sc.nextLine();

        boolean allAZ = true;
        if (str.length() < 26) {
            allAZ = false;
        } else {
            for (int i = 0; i < 26; i++) {
                if (str.charAt(i) != (char) ('A' + i)) {
                    allAZ = false;
                    break;
                }
            }
        }

        if (allAZ) {
            System.out.println("String contains A-Z in order.");
        } else {
            System.out.println("A-Z does not exist in order.");
        }
        sc.close();
    }
}