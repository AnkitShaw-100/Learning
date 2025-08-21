// Custom Exception Class 
class InvalidAgeException extends Exception {
    InvalidAgeException(String message) {
        super(message);
    }
}

class Main5 {
    public static void checkAge(int age) throws InvalidAgeException {
        if (age < 18) {
            throw new InvalidAgeException("Age must be 18 or above.");
        } else {
            System.out.println("Access Granted");
        }
    }

    public static void main(String[] args) {
        try {
            checkAge(17);
        } catch (InvalidAgeException e) {
            System.out.println("Custom exception: " + e.getMessage());
        }
    }
}
