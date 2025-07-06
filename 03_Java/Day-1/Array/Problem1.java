// Finidng dulpicates
import java.util.*;

class Problem1 {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.println("Enter the size of array : ");

        int n = sc.nextInt();
        int arr[] = new int[n];

        for (int i = 0; i < n; i++) {
            System.out.println("Enter the elements of arrays..... ");
            arr[i] = sc.nextInt();
        }

        int ans = 0;
        for (int i = 0; i < n; i++) {
            ans = ans ^ arr[i];
        }

        if (ans > 0) {
            System.out.println("Non duplicate element in the array is : " + ans);
        } else {
            System.out.println("No duplicate element in the array.");
        }
        sc.close();
    }

}