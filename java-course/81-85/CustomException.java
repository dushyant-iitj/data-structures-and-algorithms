public class CustomException {

  public static void main(String[] args) {
    try {
      throw new NestException("Phata!");
    } catch (NestException e) {
      System.out.println("Something else: " + e);
    } catch (Exception e) {
      System.out.println("Something else: " + e);
    }
  }

}

class NestException extends RuntimeException {
  public NestException() {

  }

  public NestException(String s) {
    super(s);
  }
}