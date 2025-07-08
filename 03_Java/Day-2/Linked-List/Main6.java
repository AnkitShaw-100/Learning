class Node {
    int data;
    Node next;

    Node(int data) {
        this.data = data;
        this.next = null;
    }
}

public class Main6 {
    Node head;

    public void createCycle() {
        Node n1 = new Node(1);
        Node n2 = new Node(2);
        Node n3 = new Node(3);
        Node n4 = new Node(4);
        // Node n5 = new Node(5);

        head = n1;
        n1.next = n2;
        n2.next = n3;
        n3.next = n4;
        n4.next = n3;
    }

    public boolean hasCycle() {
        Node slow = head, fast = head;
        while (fast != null && fast.next != null) {
            slow = slow.next;
            fast = fast.next.next;

            if (slow == fast)
                return true;
        }
        return false;
    }

    public static void main(String[] args) {
        Main6 list = new Main6();
        list.createCycle();
        System.out.println("Cycle present : " + list.hasCycle());
    }
}
