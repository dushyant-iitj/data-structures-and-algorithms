public class MultipleThreads {
  public static void main(String[] args) {
    A objA = new A();
    B objB = new B();

    objA.start();
    objB.start();
  }
}

class A extends Thread {
  public void run() {
    for (int i = 0; i < 1000; i++) {
      System.out.println("Hi");
    }
  }
}

class B extends Thread {
  public void run() {
    for (int i = 0; i < 1000; i++) {
      System.out.println("Hello");
    }
  }
}