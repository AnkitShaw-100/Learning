import java.util.*;

public class Problem1 {
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

        // Row-wise print
        System.out.println("Row wise prinitng....");
        for (int i = 0; i < row; i++) {
            for (int j = 0; j < col; j++) {
                System.out.print(arr[i][j] + " ");
            }
            System.out.println();
        }

        // Col-wise print
        System.out.println();
        System.out.println();
        System.out.println("Col wise prinitng....");
        for (int i = 0; i < row; i++) {
            for (int j = 0; j < col; j++) {
                System.out.print(arr[j][i] + " ");
            }
            System.out.println();
        }
        sc.close();
    }
}
