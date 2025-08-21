class QueueArray {
    int arr[];
    int front, rear, size;

    QueueArray(int cap) {
        arr = new int[cap];
        front = rear = -1;
        size = cap;
    }

    void enqueue(int x) {
        if (rear == size - 1) {
            System.out.println("Overflow");
            return;
        }
        if (front == -1)
            front = 0;
        arr[++rear] = x;
    }

    void dequeue() {
        if (front == -1 || front > rear) {
            System.out.println("UNderflow");
            return;
        }
        front++;
    }

    void print() {
        for (int i = front; i <= rear; i++) {
            System.out.println(arr[i] + " ");
        }
        System.out.println();
    }

    public static void main(String[] args) {
        QueueArray q = new QueueArray(5);
        q.enqueue(1);
        q.enqueue(2);
        q.enqueue(3);
        q.enqueue(4);
        q.enqueue(5);
        q.enqueue(6);
        q.print();
        q.dequeue();
        q.print();
    }
}