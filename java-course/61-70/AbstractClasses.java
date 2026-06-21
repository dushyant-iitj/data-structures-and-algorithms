public class AbstractClasses {
  public static void main(String[] args) {
    Car obj = new WagonR();
    obj.drive();
    obj.playMusic();
  }
}

// Cannot create object of Abstract class directly
abstract class Car {
  public abstract void drive();

  public void playMusic() {
    System.out.println("playing music");
  }
}

// A class extending an abstract class must define all the abstract methods!
class WagonR extends Car { // this is called a concrete class
  public void drive() {
    System.out.println("driving implementation");
  }
}