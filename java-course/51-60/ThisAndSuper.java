public class ThisAndSuper {

  public static void main(String[] args) {
    B obj = new B("Hey");
  }

}

// Every class extends Object class
class A extends Object {
  public A() {
    // Every class uses super - which calls constructor of parent class
    super();
    System.out.println("in A default constructor");
  }

  public A(String s) {
    this();
    System.out.println("in A parametrized constructor");
  }
}

class B extends A {
  public B() {
    super("string");
    System.out.println("in B default constructor");
  }

  public B(String s) {
    this();
    System.out.println("in B parametrized constructor");
  }
}