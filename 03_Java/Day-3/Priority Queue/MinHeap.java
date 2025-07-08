import java.util.*;

public class MinHeap {
    public static void main(String[] args) {
        PriorityQueue<Integer> pq = new PriorityQueue<>();
        pq.add(4);
        pq.add(3);
        pq.add(100);
        while (!pq.isEmpty()) {
            System.out.println(pq.poll() + " ");
        }
    }
}
