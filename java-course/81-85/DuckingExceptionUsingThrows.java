public class DuckingExceptionUsingThrows {
  public static void main(String[] args) {
    Methods m = new Methods();
    try {
      m.A();
    } catch (Exception e) {
      System.out.println("Error: " + e);
      e.printStackTrace();
    }
  }
}

class Methods {
  // let's say all methods are critical and can throw exception
  // but we don't want to wrap in try catch for every method
  public void A() throws Exception {
    this.B();
  }

  public void B() throws Exception {
    this.C();
    this.D();
  }

  public void C() throws Exception {
  }

  public void D() throws Exception {
    Class.forName("Calc");
  }
}