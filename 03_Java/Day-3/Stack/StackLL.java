class Node {
    int data;
    Node next;

    Node(int data) {
        this.data = data;
    }
}

public class StackLL {
    Node top;

    void push(int data) {
        Node newNode = new Node(data);
        newNode.next = top;
        top = newNode;
    }

    int pop() {
        if (top == null)
            return -1;
        int val = top.data;
        top = top.next;
        return val;
    }

    int peek() {
        return top == null ? -1 : top.data;
    }

    void print() {
        Node temp = top;
        while (temp != null) {
            System.out.println(temp.data + " ");
            temp = temp.next;
        }
        System.out.println();
    }

    public static void main(String[] args) {
        StackLL s = new StackLL();
        s.push(10);
        s.push(20);
        s.push(30);
        s.push(40);
        s.push(50);
        s.print();
        System.out.println("Popped : " + s.pop());
    }
}
