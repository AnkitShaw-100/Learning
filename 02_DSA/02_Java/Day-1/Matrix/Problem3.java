import java.util.*;

public class Problem3 {
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

        // Row-wise minimum & maximum
        for (int i = 0; i < row; i++) {
            int rowMin = arr[i][0];
            int rowMax = arr[i][0];
            for (int j = 1; j < col; j++) {
                rowMin = Math.min(rowMin, arr[i][j]);
                rowMax = Math.max(rowMax, arr[i][j]);
            }
            System.out.println("Row " + (i + 1) + " -> Min: " + rowMin + ", Max: " + rowMax);
        }

        // Col-wise minimum & maximum
        for (int j = 0; j < col; j++) {
            int colMin = arr[0][j];
            int colMax = arr[0][j];
            for (int i = 1; i < row; i++) {
                colMin = Math.min(colMin, arr[i][j]);
                colMax = Math.max(colMax, arr[i][j]);
            }
            System.out.println("Col " + (j + 1) + " -> Min: " + colMin + ", Max: " + colMax);
        }

        sc.close();
    }
}
