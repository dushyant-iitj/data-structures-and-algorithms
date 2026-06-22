public class Throw {

  public static void main(String[] args) {

    /*
     * Throw is used when you want to throw an error
     */

    int j = 0;

    try {
      if (j == 0) {
        throw new ArithmeticException("we threw this error!");
      }
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
