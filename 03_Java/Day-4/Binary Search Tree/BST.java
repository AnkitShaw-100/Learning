class Node {
    int data;
    Node left, right;

    Node(int val) {
        data = val;
        left = right = null;
    }
}

public class BST {
    Node insert(Node root, int key) {
        if (root == null)
            return new Node(key);

        if (key < root.data) {
            root.left = insert(root.left, key);
        } else {
            root.right = insert(root.right, key);
        }
        return root;
    }

    void inOrder(Node root) {
        if (root == null)
            return;
        inOrder(root.left);
        System.out.println(root.data + " ");
        inOrder(root.right);
    }

    public static void main(String[] args) {
        BST tree = new BST();
        Node root = null;

        int[] values = { 5, 3, 7, 2, 4, 6, 8 };
        for (int val : values)
            root = tree.insert(root, val);

        System.out.print("Inorder Traversal : ");
        tree.inOrder(root);
    }
}
