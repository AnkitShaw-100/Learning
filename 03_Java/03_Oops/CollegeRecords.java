// Class and objects (with getter, setter, and this keyword)
// Encapsulation Example
public class CollegeRecords {
    // Learner class
    public static class Learner {
        private String name;
        private int rollNumber;
        private double marks;

        // Setter for name
        public void setName(String name) {
            this.name = name;
        }

        // Getter for name
        public String getName() {
            return this.name;
        }

        // Setter for rollNumber
        public void setRollNumber(int rollNumber) {
            this.rollNumber = rollNumber;
        }

        // Getter for rollNumber
        public int getRollNumber() {
            return this.rollNumber;
        }

        // Setter for marks
        public void setMarks(double marks) {
            this.marks = marks;
        }

        // Getter for marks
        public double getMarks() {
            return this.marks;
        }
    }

    public static void main(String[] args) {
        // Object creation
        Learner l1 = new Learner();

        // Setting values using setter methods
        l1.setName("Ankit");
        l1.setRollNumber(21);
        l1.setMarks(82.0);

        // Getting values using getter methods
        System.out.println("Name: " + l1.getName());
        System.out.println("Roll Number: " + l1.getRollNumber());
        System.out.println("Marks: " + l1.getMarks());
    }
}
