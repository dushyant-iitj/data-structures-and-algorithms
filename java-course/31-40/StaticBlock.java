public class StaticBlock {

  public static void main(String[] args) throws ClassNotFoundException {

    Mobile obj1 = new Mobile();
    obj1.brand = "Oppo";
    obj1.price = 12;
    Mobile.name = "Phone";
    Mobile obj2 = new Mobile();
    obj2.brand = "Redmi";
    obj2.price = 11;
    Mobile obj3 = new Mobile();
    obj3.brand = "Apple";
    obj3.price = 13;

    /*
     * 1. Class loads classloader
     * 2. Objects instantiated
     * so class is loaded once
     * but can be instantiated many times
     */
    obj1.info();
    obj2.info();
    obj3.info();

    // ##########################################
    /*
     * What if we just want to load class without instances
     */
    Class.forName("SmartPhone");

  }

}

class Mobile {
  String brand;
  int price;
  static String name;

  // Ideal way is to move static part initialization out of constructor in a
  // separate Static Block
  // Static Block will be called only once no matter how many instances of object
  // are created
  static {
    name = "Phone";
    System.out.println("Mobile Static Block");
  }

  public Mobile() {
    brand = "";
    price = 14;
    System.out.println("Mobile Default Constructor");
  }

  public void info() {
    System.out.println("Brand: " + this.brand + ", Price: " + this.price + ", Name: " + Mobile.name);
  }
}

class SmartPhone {
  String brand;
  int price;
  static String name;

  // Ideal way is to move static part initialization out of constructor in a
  // separate Static Block
  // Static Block will be called only once no matter how many instances of object
  // are created
  static {
    name = "Phone";
    System.out.println("SmartPhone Static Block");
  }

  public SmartPhone() {
    brand = "";
    price = 14;
    System.out.println("SmartPhone Default Constructor");
  }

  public void info() {
    System.out.println("Brand: " + this.brand + ", Price: " + this.price + ", Name: " + SmartPhone.name);
  }
}