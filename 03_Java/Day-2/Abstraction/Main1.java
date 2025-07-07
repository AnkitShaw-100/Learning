abstract class Animal {

    String name;

    Animal(String name) {
        this.name = name;
    }

    abstract void makeSound();

    void sleep() {
        System.out.println(name + " is sleeping.....");
    }
}

class Dog extends Animal {

    Dog(String name) {
        super(name);
    }

    void makeSound() {
        System.out.println(name + " says: Wooff!!!!!");
    }
}

public class Main1 {
    public static void main(String[] args) {
        Animal myDog = new Dog("Brunoo");
        myDog.makeSound();
        myDog.sleep();
    }
}
