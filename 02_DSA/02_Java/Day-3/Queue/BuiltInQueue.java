import java.util.*;

public class BuiltInQueue {
    public static void main(String[] args) {
        Queue<Integer> q = new LinkedList<>();
        q.add(1); q.add(2);
        System.out.println(q.peek()); // 1
        q.poll();
        System.out.println(q.peek()); // 2
    }
}