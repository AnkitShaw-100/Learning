
// Two Sum brute force
import java.util.*;

public class Problem2 {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.println("Enter the size of array : ");
        int n = sc.nextInt();

        int arr[] = new int[n];
        int arr2[] = new int[2];
        for (int i = 0; i < arr.length; i++) {
            System.out.println("Enter the elements of array....");
            arr[i] = sc.nextInt();
        }

        System.out.println("Enter the target sum you want to get by the sum of the elements of array :");
        int target = sc.nextInt();

        boolean found = false;
        for (int i = 0; i < arr.length; i++) {
            for (int j = i + 1; j < arr.length; j++) {
                if (arr[i] + arr[j] == target) {
                    arr2[0] = i;
                    arr2[1] = j;
                    found = true;
                    break;
                }
            }
            if (found)
                break;
        }
        if (found) {
            System.out.println("Index of the elements whose sum is target : " + arr2[0] + " and " + arr2[1]);
        } else {
            System.out.println("No two elements found with the target sum.");
        }
        sc.close();
    }
}
