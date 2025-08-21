import java.util.*;

public class Problem5 {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        System.out.print("Enter the row of the matrix :");
        int row = sc.nextInt();
        System.out.print("Enter the col of the matrix :");
        int col = sc.nextInt();
        
        int arr[][] = new int[row][col];
        // Enter the element for matrix 1
        for (int i = 0; i < row; i++) {
            for (int j = 0; j < col; j++) {
                System.out.println("Enter the element of the matrix :");
                arr[i][j] = sc.nextInt();
            }
        }

        // Left diagonal the matrix
        for (int i = 0; i < row; i++) {
            for (int j = 0; j < col; j++) {
                if (i == j) {
                    System.out.println("Left D elem :" +arr[i][j]);
                }
            }
        }

        System.out.println();
        // Right diagonal the matrix
        for (int i = 0; i < row; i++) {
            for (int j = 0; j < col; j++) {
                if (i + j == col -1) {
                    System.out.println("Right D elem :" +arr[i][j]);
                }
            }
        }

        sc.close();
    }
}
