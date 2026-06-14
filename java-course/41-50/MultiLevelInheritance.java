public class MultiLevelInheritance {
  public static void main(String[] args) {

    /*
     * new C().message();
     */
  }
}

/*
 * Basically in Java A > B > C Okay
 * A,B > C not okay with inheritance
 */

class A {
  public void message() {
    System.out.println("From A");
  }
}

class B {
  public void message() {
    System.out.println("From B");
  }
}

/*
 * Every method is first checked in child class,
 * then up and up in hierarchy
 * but with multiple parents, we can have ambiguity
 * So Not Allowed with inheritance
 * other ways like Interface to deal with this issue
 * 
 * class C extends A,B { // This syntax is invalid
 * 
 * }
 */