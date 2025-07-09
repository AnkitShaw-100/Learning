class Node {
    int data;
    Node left, right;

    Node(int val) {
        data = val;
        left = right = null;
    }
}

public class Search {
    Node Search(Node root, int key) {
        if (root == null || root.data == key) {
            return root;
        }
        if (key < root.data) {
            return Search(root.left, key);
        } else {
            return Search(root.right, key);
        }
    }

    public static void main(String[] args) {
        // Build a small BST
        Node root = new Node(5);
        root.left = new Node(3);
        root.right = new Node(8);
        root.left.left = new Node(1);
        root.left.right = new Node(4);

        Search s = new Search();
        int key = 4;
        Node result = s.Search(root, key);

        if (result != null) {
            System.out.println("Found: " + result.data);
        } else {
            System.out.println("Key not found.");
        }
    }
}
