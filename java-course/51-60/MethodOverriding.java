public class MethodOverriding {

  public static void main(String[] args) {
    B obj = new B();
    obj.show();
    System.out.println(obj.hashCode());
  }

}

/*
 * Method overriding - every method is first searched in current class then up
 * the inheritance chain
 */

class A {
  public void show() {
    System.out.println("A show");
  };

  public int hashCode() {
    System.out.println("A Overridden hashCode");
    return 5;
  }
}

class B extends A {
  public void show() {
    System.out.println("B show");
  };
}