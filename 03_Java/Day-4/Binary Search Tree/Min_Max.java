class Node {
    int data;
    Node left, right;

    Node(int val) {
        data = val;
        left = right = null;
    }
}

public class Min_Max {
    int findMin(Node root) {
        if (root == null)
            return -1;
        while (root.left != null) {
            root = root.left;
        }
        return root.data;
    }

    int findMax(Node root) {
        if (root == null)
            return -1;
        while (root.right != null) {
            root = root.right;
        }
        return root.data;
    }

    public static void main(String[] args) {
        // Create a BST
        Node root = new Node(10);
        root.left = new Node(5);
        root.right = new Node(20);
        root.left.left = new Node(2);
        root.right.right = new Node(30);

        Min_Max mm = new Min_Max();
        System.out.println("Min: " + mm.findMin(root)); // 2
        System.out.println("Max: " + mm.findMax(root)); // 30
    }
}
