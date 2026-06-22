public class Annotation{
  public static void main(String args[]) {
    B obj = new B();
    obj.aVeryLongNamedFunction();
  }
}

class A {
  public void aVeryLongNamedFunction(){
    System.out.println("in A show");
  }
}

class B extends A {
  @Override
  public void aVeryLongNamedFunction(){
    System.out.println("in B show");
  }
}