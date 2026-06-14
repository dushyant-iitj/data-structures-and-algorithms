public class Inheritance {
  public static void main(String[] args) {

    VeryAdvCalc calc = new VeryAdvCalc();
    System.out.println(calc.sum(1, 2));
    System.out.println(calc.divide(10, 2));
    System.out.println(calc.pow(10, 2));

  }
}

class Calculator {
  public double sum(double a, double b) {
    return a + b;
  }

  public double subtract(double a, double b) {
    return a - b;
  }
}

class AdvancedCalculator extends Calculator {

  public double multiply(double a, double b) {
    return a * b;
  }

  public double divide(double a, double b) {
    return a / b;
  }
}

class VeryAdvCalc extends AdvancedCalculator {

  public double pow(double a, double b) {
    return Math.pow(a, b);
  }

  public double max(double a, double b) {
    return Math.max(a, b);
  }

  public double min(double a, double b) {
    return Math.min(a, b);
  }

}