public class ThreadPriorityAndSleep {
  public static void main(String[] args) {
    A objA = new A();
    B objB = new B();

    // Can set priority: 1-10
    // objA.setPriority(Thread.MAX_PRIORITY);

    objA.start();
    objB.start();
  }
}

class A extends Thread {
  public void run() {
    for (int i = 0; i < 1000; i++) {
      System.out.println("Hi");
      try {
        Thread.sleep(1);
      } catch (InterruptedException e) {
        e.printStackTrace();
      }
    }
  }
}

class B extends Thread {
  public void run() {
    for (int i = 0; i < 1000; i++) {
      System.out.println("Hello");
      try {
        Thread.sleep(1);
      } catch (InterruptedException e) {
        e.printStackTrace();
      }
    }
  }
}