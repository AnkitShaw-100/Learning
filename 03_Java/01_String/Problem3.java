import java.util.Scanner;

public class Problem3 {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter a string: ");
        String str = sc.nextLine();
        int Vowels = 0;
        int Consonants = 0;
        int ascii = 0;

        for (int i = 0; i < str.length(); i++) {
            ascii = (int) str.charAt(i);
            if (ascii == 65 || ascii == 69 || ascii == 73 || ascii == 79 || ascii == 85 || ascii == 97 || ascii == 101
                    || ascii == 105 || ascii == 111 || ascii == 117) {
                Vowels++;
            } else if ((ascii >= 97 && ascii <= 122) || (ascii >= 65 && ascii <= 90)
                    && (ascii != 65 || ascii != 69 || ascii != 73 || ascii != 79 || ascii != 85 || ascii != 97
                            || ascii != 101 || ascii != 105 || ascii != 111 || ascii != 117)) {
                Consonants++;
            }
        }
        System.out.println("Vowels count is : " + Vowels);
        System.out.println("Consonants count is : " + Consonants);
        sc.close();
    }
}
