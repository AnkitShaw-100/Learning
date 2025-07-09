class Student {
    private String name;
    private int age;
    private int marks;

    public Student(String name, int age, int marks) {
        this.name = name;
        this.age = age;
        setMarks(marks);
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public int getMarks() {
        return marks;
    }

    public void setMarks(int marks) {
        if (marks < 0 || marks > 100) {
            System.out.println("Invalid marks!");
            this.marks = 0;
        } else {
            this.marks = marks;
        }
    }

    public int getAge() {
        return age;
    }

    public void display() {
        System.out.println(name + " | Age: " + age + " | Marks : " + marks);
    }
}

public class EncapsulationDemo {
    public static void main(String[] args) {
        Student s1 = new Student("Ankit", 21, 855); // invalid marks
        s1.display();

        Student[] students = {
                new Student("Raj", 20, 70),
                new Student("Simran", 22, 93),
                new Student("Kiran", 19, 80)
        };

        for (Student s : students) {
            s.display();
        }
    }

}