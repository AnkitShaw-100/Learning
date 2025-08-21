import java.util.*;

public class MaxHeap {
    public static void main(String[] args) {
        PriorityQueue<Integer> maxHeap = new PriorityQueue<>(Collections.reverseOrder());
        maxHeap.add(10);
        maxHeap.add(20);
        maxHeap.add(30);
        maxHeap.add(40);
        maxHeap.add(50);

        while (!maxHeap.isEmpty()) {
            System.out.println(maxHeap.poll() + " ");
        }
    }
}
