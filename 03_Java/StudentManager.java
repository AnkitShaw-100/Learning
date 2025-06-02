import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;

public class StudentManager {
    private List<Student> students;

    public StudentManager() {
        students = new ArrayList<>();
    }

    public void addStudent(Student s) {
        students.add(s);
    }

    public Student findStudentByRollNumber(int rollNumber) {
        for (Student s : students) {
            if (s.rollNumber == rollNumber) {
                return s;
            }
        }
        return null;
    }

    public boolean removeStudent(int rollNumber) {
        Iterator<Student> it = students.iterator();
        while (it.hasNext()) {
            Student s = it.next();
            if (s.rollNumber == rollNumber) {
                it.remove();
                return true;
            }
        }
        return false;
    }

    // Optional: display all students
    public void displayAllStudents() {
        if (students.isEmpty()) {
            System.out.println("No students to display.");
        } else {
            for (Student s : students) {
                System.out.println(s);
            }
        }
    }
}
