import java.util.*;

public class ReverseString {
    public static void main(String[] args) {
        String str = "Ankit";
        Stack<Character> s = new Stack<>();
        for (int i = 0; i < str.length(); i++) {
            s.push(str.charAt(i));
        }

        StringBuilder reversed = new StringBuilder();
        while (!s.isEmpty()) {
            reversed.append(s.pop());
        }

        System.out.println("Reserved : " + reversed);
    }
}
