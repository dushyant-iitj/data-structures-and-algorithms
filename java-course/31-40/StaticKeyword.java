class Mobile {
  String brand;
  int price;
  // Static variables will be common for all instances
  // Static variables should be ideally called by class name
  // like: Mobile.name
  static String name;
  // **There is a separate area in JVM for storing static variables, not part of
  // instance variables

  public void info() {
    System.out.println("Brand: " + this.brand + ", Price: " + this.price + ", Name: " + Mobile.name);
  }

  // We can use a static variable inside a static method
  // But we cannot use a non-static variable inside a static method

  // Invalid
  // public static void show() {
  // System.out.println(name + price);
  // }

  // Valid
  public static void show(Mobile mobile) {
    System.out.println(name + mobile.price);
  }
}

public class StaticKeyword {

  public static void main(String[] args) {

    Mobile obj1 = new Mobile();
    obj1.brand = "Apple";
    obj1.price = 12;
    Mobile.name = "Phone";
    Mobile obj2 = new Mobile();
    obj2.brand = "Orange";
    obj2.price = 11;

    obj1.info();
    obj2.info();
    // obj2.show();
    // Mobile.show();

  }

}
