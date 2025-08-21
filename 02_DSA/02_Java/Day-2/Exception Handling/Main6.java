public class Main6 {
    public static void main(String[] args) {
        try {
            int arr[] = new int[3];
            arr[5] = 10;
            int result = 10 / 0;
        } catch (ArithmeticException e) {
            System.out.println("Arithmatic Exception caught.");
        } catch (ArrayIndexOutOfBoundsException e) {
            System.out.println("Array Index Out of Bounds Exception caught.");
        } catch (Exception e) {
            System.out.println("Generic Exception caught.");
        }
    }
}
