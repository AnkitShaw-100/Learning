
// Largest and Second Largest
import java.util.*;

public class Problem4 {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        System.out.print("Enter the size of array: ");
        int n = sc.nextInt();
        int arr[] = new int[n];

        for (int i = 0; i < n; i++) {
            System.out.println("Enter the element of the array...");
            arr[i] = sc.nextInt();
        }

        int max = arr[0];
        int secondMax = Integer.MIN_VALUE;
        for (int i = 1; i < arr.length; i++) {
            if (arr[i] > max) {
                secondMax = max;
                max = arr[i];
            } else if (arr[i] > secondMax && arr[i] != max) {
                secondMax = arr[i];
            }
        }

        System.out.println("The max value in the array is: " + max);

        if (secondMax == Integer.MIN_VALUE) {
            System.out.println("No distinct second max value found.");
        } else {
            System.out.println("The second max value in the array is: " + secondMax);
        }

        sc.close();
    }
}
