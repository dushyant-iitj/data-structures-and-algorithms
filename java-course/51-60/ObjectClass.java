public class ObjectClass {

  public static void main(String[] args) {

    Laptop obj = new Laptop();
    obj.model = "Lenovo";
    obj.price = 12.25;
    System.out.println(obj); // calls toString() in background
    System.out.println(obj.toString());
  }

}

class Laptop {
  String model;
  double price;
}