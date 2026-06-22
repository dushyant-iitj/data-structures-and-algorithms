public class MultipleExceptions {

  public static void main(String[] args) {

    int i = 0;
    int j = 0;
    int nums[] = new int[5];
    String str = null;

    try {
      System.out.println(str.length());
      j = 18 / i;
      System.out.println(nums[5]);
    } catch (ArithmeticException e) {
      System.out.println("ArithmeticException: " + e.getLocalizedMessage());
    } catch (ArrayIndexOutOfBoundsException e) {
      System.out.println("ArrayIndexOutOfBoundsException: " + e.getLocalizedMessage());
    } catch (Exception e) {
      System.out.println("Something else: " + e);
    }

    System.out.println("End: " + j);
  }

}
