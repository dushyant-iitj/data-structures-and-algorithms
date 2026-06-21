public class Interface {
  public static void main(String[] args) {
    /*
     * whenever we want an abstract class with only abstract methods
     * we can create an interface instead
     * every method in an interface is by default public abstract
     */
    A obj;
    obj = new B();
    obj.show();
    System.out.println(A.length);

    Computer a = new Desktop();
    a.code();
  }
}

interface A {
  int length = 12; // every variable in interface is final and static
  String name = "Joe";

  void show();

  void config();
}

class B implements A {

  public void show() {
    System.out.println("B show");
  }

  public void config() {
    System.out.println("B config");
  }
}

/*
 * ##################################
 * Another example of interface
 * ##################################
 */
interface Computer {
  void code();
}

class Desktop implements Computer {
  @Override
  public void code() {
    System.out.println("Coding with Desktop");
  }
}

class Laptop implements Computer {
  @Override
  public void code() {
    System.out.println("Coding with Laptop");
  }
}

/*
 * Interfaces can extend each interfaces
 * A class can implement multiple interfaces
 */
interface X {
  void run();
}

interface Y extends X {

}

interface Z {
  void walk();
}

class Xyz implements Y, Z {

  @Override
  public void run() {
    System.out.println("run implemented");
  }

  @Override
  public void walk() {
    System.out.println("walk implemented");
  }

}