public class Question2 {
    public static void main(String[] args) {
        String str = "Ankit";
        for (int i = 0; i <= str.length(); i++) {
            for (int j = i + 1; j <= str.length(); j++) {
                System.err.print(str.substring(i, j) + " ");
            }
        }
        StringBuilder sb = new StringBuilder("Chemistry");
        sb.reverse();
        System.out.println(sb);
    }
}
