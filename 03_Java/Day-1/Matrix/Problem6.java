import java.util.*;

public class Problem6 {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        System.out.print("Enter size of square matrix (n x n): ");
        int n = sc.nextInt();

        int[][] arr = new int[n][n];

        // Input matrix
        System.out.println("Enter elements of the matrix:");
        for (int i = 0; i < n; i++) {
            for (int j = 0; j < n; j++) {
                arr[i][j] = sc.nextInt();
            }
        }

        // Upper triangle (i <= j)
        System.out.println("\nUpper Triangle:");
        for (int i = 0; i < n; i++) {
            for (int j = 0; j < n; j++) {
                if (i <= j)
                    System.out.print(arr[i][j] + " ");
                else
                    System.out.print("  ");
            }
            System.out.println();
        }

        // Lower triangle (i >= j)
        System.out.println("\nLower Triangle:");
        for (int i = 0; i < n; i++) {
            for (int j = 0; j < n; j++) {
                if (i >= j)
                    System.out.print(arr[i][j] + " ");
                else
                    System.out.print("  ");
            }
            System.out.println();
        }

        sc.close();
    }

}
