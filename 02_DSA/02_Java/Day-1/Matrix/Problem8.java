import java.util.Scanner;

public class Problem8 {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        System.out.print("Enter size of square matrix (n x n): ");
        int n = sc.nextInt();

        int[][] arr = new int[n][n];

        System.out.println("Enter matrix elements:");
        for (int i = 0; i < n; i++) {
            for (int j = 0; j < n; j++) {
                arr[i][j] = sc.nextInt();
            }
        }

        boolean isIdentity = true;

        for (int i = 0; i < n; i++) {
            for (int j = 0; j < n; j++) {
                if ((i == j && arr[i][j] != 1) || (i != j && arr[i][j] != 0)) {
                    isIdentity = false;
                    break;
                }
            }
            if (!isIdentity)
                break;
        }

        if (isIdentity) {
            System.out.println("It is an identity matrix.");
        } else {
            System.out.println("It is NOT an identity matrix.");
        }

        sc.close();
    }
}
