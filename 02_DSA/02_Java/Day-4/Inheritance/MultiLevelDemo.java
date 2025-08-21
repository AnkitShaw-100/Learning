class Person {
    protected String name;

    Person(String name) {
        this.name = name;
    }
}

class Employee extends Person {
    protected double salary;

    Employee(String name, double salary) {
        super(name);
        this.salary = salary;
    }
}

class Manager extends Employee {
    private String department;

    Manager(String name, double salary, String department) {
        super(name, salary);
        this.department = department;
    }

    void printDetails() {
        System.out.println("Manager: " + name + " | Salary : " + salary + " | Dept:" + department);
    }
}

public class MultiLevelDemo {
    public static void main(String[] args) {
        Manager m = new Manager("Ankit", 85000, "Engineering");
        m.printDetails();
    }
}
