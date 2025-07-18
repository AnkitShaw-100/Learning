import java.lang.classfile.attribute.SourceIDAttribute;

class Node {
    int data;
    Node left, right;

    Node(int val) {
        data = val;
        left = right = null;
    }
}

public class BinaryTreeTraversal {
    public static void inOrder(Node root) {
        if (root == null)
            return;
        inOrder(root.left);
        System.out.println(root.data + " ");
        inOrder(root.right);
    }

    public static void preOrder(Node root) {
        if (root == null)
            return;
        System.out.println(root.data + " ");
        preOrder(root.left);
        preOrder(root.right);
    }

    public static void postOrder(Node root) {
        if (root == null)
            return;
        postOrder(root.left);
        postOrder(root.right);
        System.out.println(root.data + " ");
    }

    public static void main(String[] args) {
        Node root = new Node(1);
        root.left = new Node(2);
        root.right = new Node(3);
        root.left.left = new Node(4);
        root.right.right = new Node(5);
        root.left.left.left = new Node(6);
        root.right.right.right = new Node(7);

        System.out.print("Inorder: ");
        inOrder(root);
        System.out.print("\nPreorder: ");
        preOrder(root);
        System.out.print("\nPostorder: ");
        postOrder(root);

    }
}
