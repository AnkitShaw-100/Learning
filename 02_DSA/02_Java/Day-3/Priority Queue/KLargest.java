import java.util.*;

public class KLargest {
    public static void main(String[] args) {
        int arr[] = { 3, 45, 56, 33, 12, 245 };
        int k = 3;
        PriorityQueue<Integer> minHeap = new PriorityQueue<>();

        for (int i = 0; i < arr.length; i++) {
            minHeap.add(arr[i]);
            if (minHeap.size() > k)
                minHeap.poll();
        }
        while (!minHeap.isEmpty()) {
            System.out.println(minHeap.poll() + " ");
        }
    }
}
