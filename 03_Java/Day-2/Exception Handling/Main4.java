
// // Using throws
import java.io.*;

class Main4 {
    public static void readFile() throws IOException {
        FileReader file = new FileReader("test.txt");
        BufferedReader br = new BufferedReader(file);
        System.out.println(br.readLine());
    }

    public static void main(String[] args) {
        try {
            readFile();
        } catch (IOException e) {
            System.out.println("Handled exception using throws: " + e);
        }
    }
}
