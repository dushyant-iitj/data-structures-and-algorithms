import other.tools.*;

public class Packages {

  public static void main(String[] args) {

    // AdvCalc
    AdvCalc advCalc = new AdvCalc();
    advCalc.show();
    double result = advCalc.add(12.4, 6.5);
    System.out.println("Result: " + result);

    // Calc
    Calc calc = new Calc();
    calc.show();

  }

}
