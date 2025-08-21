class Animal {
    protected String name;

    Animal(String name) {
        this.name = name;
    }

    void makeSound() {
        System.out.println(name + " makes a sound.");
    }
}

class Dog extends Animal {
    Dog(String name) {
        super(name);
    }

    @Override
    void makeSound() {
        System.out.println(name + " says : Woofff!!!!");
    }
}

public class InheritanceDemo {
    public static void main(String[] args) {
        Animal a = new Dog("Killer");
        a.makeSound();
    }
}
