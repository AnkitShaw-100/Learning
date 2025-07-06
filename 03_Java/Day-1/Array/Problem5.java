// Second minimum 
import java.util.*;

public class Problem5 {

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.println("Enter the size of array : ");

        int n = sc.nextInt();
        int arr[] = new int[n];

        for (int i = 0; i < arr.length; i++) {
            System.out.println("Enter the elements of teh array : ");
            arr[i] = sc.nextInt();
        }

        int min = arr[0];
        int secondMin = Integer.MAX_VALUE;

        for (int i = 1; i < arr.length; i++) {
            if (min > arr[i]) {
                secondMin = min;
                min = arr[i];
            } else if (arr[i] > secondMin && arr[i] < secondMin) {
                secondMin = arr[i];
            }
        }

        System.out.println("The minimum value of Min is : " + min);

        if (secondMin == Integer.MAX_VALUE) {
            System.out.println("No distinct second min value found.");
        } else {
            System.out.println("The second min value in the array is: " + secondMin);
        }
        sc.close();
    }
}