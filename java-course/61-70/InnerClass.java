public class InnerClass {
  public static void main(String[] args) {
    A objA = new A();
    A.B objB = objA.new B();
    objB.config();
  }
}

class A {
  int age;

  public void show() {
    System.out.println("in A show");
  }

  class B {
    public void config() {
      System.out.println("in B config");
    }
  }
}
