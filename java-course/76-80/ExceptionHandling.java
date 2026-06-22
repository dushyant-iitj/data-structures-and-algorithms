public class ExceptionHandling {

  public static void main(String[] args) {

    /*
     * Types of Error:
     * 1) Compile time error
     * 2) Run time error -> Exceptions > Need to handle
     * 3) Logical time error
     */

    int i = 0;
    int j = 0;

    try {
      j = 18 / i;
    } catch (Exception e) {
      System.out.println("Something went wrong. " + e);
    }

    int nums[] = new int[5];

    try {
      System.out.println(nums[5]);
    } catch (Exception e) {
      System.out.println("Something went wrong. " + e);
    }

    System.out.println("End: " + j);
  }

}
