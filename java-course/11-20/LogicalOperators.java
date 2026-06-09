public class LogicalOperators {
  public static void main(String[] args) {
    int x = 1;
    int y = 2;
    int a = 3;
    int b = 4;

    /*
     * & - AND
     * | - OR
     * ! - NOT
     */
    boolean result1 = x > y;
    boolean result2 = b > a;
    System.out.println("x > y : " + result1);
    System.out.println("b > a : " + result2);
    System.out.println("OR : " + (result1 | result2));
    System.out.println("And : " + (result1 & result2));

    // Short circuit
    System.out.println("Short circuit:");
    /*
     * && - AND
     * || - OR
     */
    System.out.println("x > y && b > a : " + (x > y && b > a));
    System.out.println("x > y || b > a : " + (x > y || b > a));
  }
}
