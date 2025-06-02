import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        // Taking input from user
        System.out.print("Enter Roll Number: ");
        int rollNo = sc.nextInt();
        sc.nextLine(); // consume newline

        System.out.print("Enter Name: ");
        String name = sc.nextLine();

        System.out.print("Enter Marks: ");
        double marks = sc.nextDouble();

        // Creating Student object with input
        Student s = new Student(rollNo, name, marks);

        // Displaying the student details
        System.out.println("\nStudent Details:");
        System.out.println(s);
        sc.close();
    }
}
