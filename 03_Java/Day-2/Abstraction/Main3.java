interface Printable {
    void print();
}

class Document implements Printable {
    public void print() {
        System.out.println("Printing document.....");
    }
}

class ImageFile implements Printable {
    public void print() {
        System.out.println("Priting image.....");
    }
}

public class Main3 {
    public static void main(String[] args) {
        Printable doc = new Document();
        Printable img = new ImageFile();

        doc.print();
        img.print();
    }
}
