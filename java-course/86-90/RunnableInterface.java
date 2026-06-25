public class RunnableInterface {
  public static void main(String[] args) {
    Runnable objA = new A();
    // with Lambda:
    Runnable objB = () -> {
      for (int i = 0; i < 5; i++) {
        System.out.println("Hi");
        try {
          Thread.sleep(1);
        } catch (InterruptedException e) {
          e.printStackTrace();
        }
      }
    };

    Thread t1 = new Thread(objA);
    Thread t2 = new Thread(objB);

    t1.start();
    t2.start();
  }
}

class A implements Runnable {
  public void run() {
    for (int i = 0; i < 5; i++) {
      System.out.println("Hello");
      try {
        Thread.sleep(1);
      } catch (InterruptedException e) {
        e.printStackTrace();
      }
    }
  }
}