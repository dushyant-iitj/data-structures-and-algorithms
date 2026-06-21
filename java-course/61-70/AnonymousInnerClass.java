public class AnonymousInnerClass {
  public static void main(String[] args) {
    A objA = new A() { // Anonymous inner class
      public void show() {
        System.out.println("in new Show");
      }
    };
    objA.show();

    Abs obj = new Abs() {
      /*
       * Remember we are not creating obj of A,
       * we are creating an object of the
       * anonymous inner class, that's why it works
       */
      public void show() {
        System.out.println("Anonymous show defined on the time of creation");
      }
    };
    obj.show();
  }
}

class A {
  public void show() {
    System.out.println("in A show");
  }
}

/*
 * can also be used to define class methods of an abstract class
 */
abstract class Abs {
  public abstract void show();
}