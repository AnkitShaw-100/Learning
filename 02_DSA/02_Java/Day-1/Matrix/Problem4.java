import java.util.*;

public class Problem4 {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        System.out.print("Enter the row of the matrix :");
        int row = sc.nextInt();
        System.out.print("Enter the col of the matrix :");
        int col = sc.nextInt();

        // Enter the element for matrix 1
        int arr1[][] = new int[row][col];
        for (int i = 0; i < row; i++) {
            for (int j = 0; j < col; j++) {
                System.out.println("Enter the element of the matrix 1:");
                arr1[i][j] = sc.nextInt();
            }
        }

        // Enter the element for matrix 2
        int arr2[][] = new int[row][col];
        for (int i = 0; i < row; i++) {
            for (int j = 0; j < col; j++) {
                System.out.println("Enter the element of the matrix 2:");
                arr2[i][j] = sc.nextInt();
            }
        }

        // Sum of each element of both the matrix
        int arr3[][] = new int[row][col];
        for (int i = 0; i < row; i++) {
            for (int j = 0; j < col; j++) {
                arr3[i][j] = arr1[i][j] + arr2[i][j];
            }
        }

        // Subtraction of each element of both the matrix
        int arr4[][] = new int[row][col];
        for (int i = 0; i < row; i++) {
            for (int j = 0; j < col; j++) {
                arr4[i][j] = arr1[i][j] - arr2[i][j];
            }
        }

        for (int i = 0; i < row; i++) {
            for (int j = 0; j < col; j++) {
                System.out.println("Sum of each element of both the array : " + arr3[i][j]);
            }
        }

        for (int i = 0; i < row; i++) {
            for (int j = 0; j < col; j++) {
                System.out.println("Subtraction of each element of both the array : " + arr4[i][j]);
            }
        }

        sc.close();
    }
}
