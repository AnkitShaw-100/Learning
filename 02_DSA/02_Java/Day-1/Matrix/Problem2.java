import java.util.*;

public class Problem2 {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        System.out.print("Enter the row of the matrix :");
        int row = sc.nextInt();
        System.out.print("Enter the col of the matrix :");
        int col = sc.nextInt();

        int arr[][] = new int[row][col];
        for (int i = 0; i < row; i++) {
            for (int j = 0; j < col; j++) {
                System.out.println("Enter the element of the matrix :");
                arr[i][j] = sc.nextInt();
            }
        }

        // Row-wise sum
        int sum1 = 0;
        System.out.println();
        for (int i = 0; i < row; i++) {
            for (int j = 0; j < col; j++) {
                sum1 += arr[i][j];
            }
            System.out.println();
        }
        System.out.print("Row wise sum ...." + sum1);

        // Col-wise print
        int sum2 = 0;
        for (int i = 0; i < row; i++) {
            for (int j = 0; j < col; j++) {
                sum2 += arr[j][i];
            }
            System.out.println();
        }
        System.out.print("Col wise prinitng...." + sum2);
        sc.close();
    }
}
