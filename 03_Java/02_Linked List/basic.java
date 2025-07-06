public class basic {

    public static class Node {
        int data; // value
        Node next; // address of next Node

        Node(int data) {
            this.data = data;
        }
    }

    public static void display(Node head) {
        if (head == null)
            return;
        System.out.println(head.data);
        display(head.next);
    }

    public static void displayreverse(Node head) {
        if (head == null)
            return;
        displayreverse(head.next);
        System.out.println(head.data);
    }

    public static int countLength(Node head) {
        int count = 0;
        while (head != null) {
            count++;
            head = head.next;
        }
        return count;
    }

    public static void main(String[] args) {
        Node a = new Node(10);
        // System.out.println(a.next);
        Node b = new Node(11);
        Node c = new Node(12);
        Node d = new Node(13);
        Node e = new Node(14);

        a.next = b;
        b.next = c;
        c.next = d;
        d.next = e;
        // System.out.println(a.next);
        // System.out.println(b);
        // System.out.println(c);
        System.out.println("a.data: " + a.data);
        System.out.println("b.data: " + b.data);
        System.out.println("c.data: " + c.data);
        System.out.println("d.data: " + d.data);
        System.out.println("e.data: " + e.data);
        System.out.println("a.next.data: " + a.next.data);
        System.out.println("a.next.next.data: " + a.next.next.data);
        System.out.println("a.next.next.next.data: " + a.next.next.next.data);
        System.out.println("a.next.next.next.next.data: " + a.next.next.next.next.data);

        Node temp = a;
        while (temp != null) {
            System.out.println("Data: " + temp.data);
            temp = temp.next;
        }

        // Printing list recursively
        display(a);
        // Printing list ulta
        displayreverse(a);
        // Counting length of the list
        int length = countLength(a);
        System.out.println("Length of the list is : " + length);
    }
}