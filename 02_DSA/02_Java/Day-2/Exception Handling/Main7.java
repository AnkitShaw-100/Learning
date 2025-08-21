import java.io.*;

class Main7 {
    public static void main(String[] args) {
        try (BufferedReader br = new BufferedReader(new FileReader("test.txt"))) {
            System.out.println("First Line: " + br.readLine());
        } catch (IOException e) {
            System.out.println("Exception handled : " + e);
        }
    }
}
