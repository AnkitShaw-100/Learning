class Node {
    int data;
    Node left, right;

    Node(int val) {
        data = val;
        left = right = null;
    }
}

public class Delete {
    Node delete(Node root, int key) {
        if (root == null) {
            return null;
        }
        if (key < root.data) {
            root.left = delete(root.left, key);
        } else if (key > root.data) {
            root.right = delete(root.right, key);
        } else {
            // node found
            if (root.left == null)
                return root.right;
            else if (root.right == null)
                return root.left;

            root.data = findMin(root.right);
            root.right = delete(root.right, root.data);
        }
        return root;
    }

    int findMin(Node node) {
        while (node.left != null) {
            node = node.left;
        }
        return node.data;
    }

    void inOrder(Node root) {
        if (root == null)
            return;
        inOrder(root.left);
        System.out.print(root.data + " ");
        inOrder(root.right);
    }

    public static void main(String[] args) {
        // Sample BST
        Node root = new Node(50);
        root.left = new Node(30);
        root.right = new Node(70);
        root.left.left = new Node(20);
        root.left.right = new Node(40);
        root.right.left = new Node(60);
        root.right.right = new Node(80);

        Delete tree = new Delete();

        System.out.print("Inorder before deletion: ");
        tree.inOrder(root); // 20 30 40 50 60 70 80
        System.out.println();

        root = tree.delete(root, 50); // delete node with 2 children

        System.out.print("Inorder after deletion: ");
        tree.inOrder(root); // 20 30 40 60 70 80
    }
}
