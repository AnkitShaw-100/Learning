import java.util.*;

public class NextGreaterElement {
    public static void printNGE(int arr[]) {
        Stack<Integer> stack = new Stack<>();
        int result[] = new int[arr.length];

        for(int i = arr.length - 1; i >= 0; i--){
            while(!stack.isEmpty() && stack.peek() <= arr[i]){
                stack.pop();
            }
            result[i] = stack.isEmpty() ? -1 : stack.peek();
            stack.push(arr[i]);
        }

        for(int r : result) System.out.print(r + " ");
    }
    public static void main(String[] args) {
        printNGE(new int[]{4,5,2,10,22,1,234});
    }
}