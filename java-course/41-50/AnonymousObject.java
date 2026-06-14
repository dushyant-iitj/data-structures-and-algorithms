public class AnonymousObject {

  public static void main(String[] args) {

    // variable creation
    int marks;
    // Assignment
    marks = 12;

    // Similarly A obj = new A(); has two parts
    // Reference obj creation
    A obj;
    // Create and assign to variable
    obj = new A();
    obj.show();
    // obj can created without assigning
    new A().show(); // This is Anonymous object

  }

}

class A {

  public A() {
    System.out.println("A object constructor");
  }

  public void show() {
    System.out.println("in A show");
  }
}