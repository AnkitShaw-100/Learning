class Node {
    int data;
    Node next;

    Node(int data) {
        this.data = data;
    }
}

public class QueueLL {
    Node front, rear;

    void enqueue(int x) {
        Node newNode = new Node(x);
        if (rear == null) {
            front = rear = newNode;
        } else {
            rear.next = newNode;
            rear = newNode;
        }
    }

    void dequeue() {
        if (front == null)
            return;
        front = front.next;
        if (front == null)
            rear = null;
    }

    void print() {
        Node temp = front;
        while (temp != null) {
            System.out.print(temp.data + " ");
            temp = temp.next;
        }
        System.out.println();
    }

    public static void main(String[] args) {
        QueueLL q = new QueueLL();
        q.enqueue(1);
        q.enqueue(2);
        q.enqueue(3);
        q.enqueue(4);
        q.enqueue(5);
        q.print();
        q.dequeue();
        q.print();
    }
}
