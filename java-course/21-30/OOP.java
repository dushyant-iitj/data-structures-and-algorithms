public class OOP {

  public static void main(String[] args) {

    int num1 = 4;
    int num2 = 4;

    Calculator calc = new Calculator(num1, num2);
    int result = calc.sum();
    System.out.println(result);

  }

}

// Class
class Calculator {
  int a;
  int b;

  // Default Constructor
  public Calculator() {
    this.a = 1;
    this.b = 2;
  }

  // Parametrized Constructor | Constructor Overloading
  public Calculator(int num1, int num2) {
    this.a = num1;
    this.b = num2;
  }

  // Method
  public int sum() {
    return a + b;
  }

  // Method Overloading
  public int sum(int x, int y) {
    return x + y;
  }

  // Method Overloading
  public double sum(double x, double y, double z) {
    return x + y + z;
  }

}

// Object Oriented Programming
// Object - Properties and Behaviors
// How to create objects? - Class