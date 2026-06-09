public class ConditionalStatements {

  public static void main(String[] args) {

    // #################################
    // If Else
    System.out.println("If Else:");
    int x = 8;
    if (x > 10 && x <= 20) // 11 - 20
      System.out.println("Hello");
    else
      System.out.println("Bye");
    System.out.println("Baby");

    // #################################
    // Max of three
    System.out.println();
    System.out.println("Max of three:");
    int a = 5;
    int b = 8;
    int c = 9;

    if (a >= b && a >= c) {
      System.out.println(a);
    } else if (b >= c) {
      System.out.println(b);
    } else {
      System.out.println(c);
    }

    // #################################
    // Ternary Operator
    // if ? then : else
    System.out.println();
    System.out.println("Ternary Operator:");
    int n = 4;
    int result = n % 2 == 0 ? 10 : 5;
    System.out.println("result: " + result);
  }

}
