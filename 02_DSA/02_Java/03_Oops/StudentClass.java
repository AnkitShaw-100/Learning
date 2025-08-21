// Class and objects (1)
public class StudentClass {
    // Student
    public static class Student {
        String name;
        int roll_number;
        double marks;
    }

    public static void main(String args[]) {
        // Object
        Student s1 = new Student();
        s1.name = "Ankit";
        s1.roll_number = 21;
        s1.marks = 82;
        System.out.println(s1.name);
        System.out.println(s1.roll_number);
        System.out.println(s1.marks);
    }
}