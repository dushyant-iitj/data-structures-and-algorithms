public class UpCastingAndDownCasting {
  public static void main(String[] args) {

    A obj = new B();
    // this implicitly is calling
    // A obj = (A) new B();
    // so obj won't have method showB()
    // this is upCasting

    B obj1 = (B) obj;
    // DownCasting
    // now obj1 will have method showB()
    obj1.showB();

  }
}

class A {
  public void showA() {
    System.out.println("show A");
  }
}

class B extends A {
  public void showB() {
    System.out.println("show B");
  }
}