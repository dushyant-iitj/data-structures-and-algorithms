// final - variable, method, class

/*
final variable - no one can change it

final class - no one can inherit it

final method - cannot be overridden
*/
public class FinalKeyword {

  public static void main(String[] args) {

  }

}

class Calc {
  final public void show() {
    System.out.println("in Calc show");
  }

  public void add(int a, int b) {
    System.out.println("Add: " + (a + b));
  }
}

class AdvCalc extends Calc {
  public void show() {
    System.out.println("in AdvCalc show");
  }
}