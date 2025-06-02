public class Student {
    int rollNumber;
    String name;
    double marks;
    char grade;

    public Student(int rollNumber, String name) {
        this(rollNumber, name, 0.0);
    }

    public Student(int rollNumber, String name, double marks) {
        this.rollNumber = rollNumber;
        this.name = name;
        this.marks = marks;
        calculateGrade();
    }

    public void calculateGrade() {
        if (marks >= 90)
            grade = 'A';
        else if (marks >= 75)
            grade = 'B';
        else if (marks >= 60)
            grade = 'C';
        else
            grade = 'D';
    }

    @Override
    public String toString() {
        return "Roll No: " + rollNumber + ", Name: " + name + ", Marks: " + marks + ", Grade: " + grade;
    }
}
