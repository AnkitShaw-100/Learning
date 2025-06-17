import java.util.Scanner;

public class Problem2 {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter a string: ");
        String str = sc.nextLine();
        int ascii = 0;
        int countCharacter = 0;
        int countNumber = 0;
        int countSpecial = 0;

        for (int i = 0; i < str.length(); i++) {
            ascii = (int) str.charAt(i);
            if ((ascii >= 65 && ascii <= 90) || (ascii >= 97 && ascii <= 122)) {
                countCharacter++;
            } else if (ascii >= 48 && ascii <= 57) {
                countNumber++;
            } else {
                countSpecial++;
            }
        }
        System.out.println("Character counts are : " + countCharacter);
        System.out.println("Number counts are : " + countNumber);
        System.out.println("Special characters are : " + countSpecial);
        sc.close();
    }
}
