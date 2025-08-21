class Node {
    int data;
    Node next;

    Node(int data) {
        this.data = data;
        this.next = null;
    }
}

public class Main3 {
    Node head;

    public void deleteNode(int key) {
        if (head == null)
            return;

        if (head.data == key) {
            head = head.next;
            return;
        }

        Node prev = null, current = head;
        while (current != null && current.data != key) {
            prev = current;
            current = current.next;
        }
        if (current == null)
            return;
        prev.next = current.next;
    }

    public void insert(int data) {
        Node newNode = new Node(data);
        if (head == null)
            head = newNode;
        else {
            Node temp = head;
            while (temp.next != null)
                temp = temp.next;
            temp.next = newNode;
        }
    }

    public void printList() {
        Node temp = head;
        while (temp != null) {
            System.out.print(temp.data + " -> ");
            temp = temp.next;
        }
        System.out.println("null");
    }

    public static void main(String[] args) {
        Main3 list = new Main3();
        list.insert(10);
        list.insert(20);
        list.insert(30);
        list.insert(40);
        list.printList();

        list.deleteNode(30);
        list.printList();
    }
}
