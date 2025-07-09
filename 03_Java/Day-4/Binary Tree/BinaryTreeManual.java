class Node {
    int data;
    Node left, right;

    Node(int val) {
        data = val;
        left = right = null;
    }
}

public class BinaryTreeManual {
    public static void main(String[] args) {
        Node root = new Node(1);
        root.left = new Node(2);
        root.right = new Node(3);
        root.left.left = new Node(4);
        root.right.right = new Node(5);
        root.left.left.left = new Node(6);
        root.right.right.right = new Node(7);

        System.out.println("Tree created manually.");
    }
}
