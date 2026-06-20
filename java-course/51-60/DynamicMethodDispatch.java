public class DynamicMethodDispatch {

  public static void main(String[] args) {

    // Parent type obj is allowed
    Computer comp = new Laptop();

    A obj = new A();
    obj.show();

    obj = new B();
    obj.show();

    /*
     * So irrespective of type of obj, method depends on which object is created
     * Also, only child obj can have the parent type, not otherwise
     */

  }

}

class A {
  public void show() {
    System.out.println("in A show");
  }
}

class B extends A {
  public void show() {
    System.out.println("in B show");
  }
}

class Computer {

}

class Laptop extends Computer {

}