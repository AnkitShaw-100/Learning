class StackArray {
    int[] stack;
    int top;
    int capacity;

    StackArray(int size) {
        capacity = size;
        stack = new int[capacity];
        top = -1;
    }

    void push(int data) {
        if (top == capacity - 1) {
            System.out.println("Stack Overflow");
            return;
        }
        stack[++top] = data;
    }

    int pop() {
        if (top == -1) {
            System.out.println("Stack Underflow");
            return -1;
        }
        return stack[top--];
    }

    int peek() {
        return (top == -1) ? -1 : stack[top];
    }

    void print() {
        for (int i = 0; i <= top; i++) {
            System.out.print(stack[i] + " ");
        }
        System.out.println();
    }

    public static void main(String[] args) {
        StackArray s = new StackArray(5);
        s.push(10);
        s.push(20);
        s.push(30);
        s.push(40);
        s.print();
        System.out.println("Popped : " + s.pop());
        System.out.println("Peek : " + s.peek());
    }
}