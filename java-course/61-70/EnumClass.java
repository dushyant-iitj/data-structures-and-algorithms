public class EnumClass {
  public static void main(String[] args) {
    Laptop s = Laptop.ThinkPad;
    System.out.println(s.getClass());
    System.out.println(s.getClass().getSuperclass());

    System.out.println();
    for (Laptop laptop : Laptop.values()) {
      laptop.print();
    }

  }
}

enum Laptop {
  ThinkPad(20), Dell(12), Surface, HP(11);

  private int price;

  /*
   * We using private as the objects are being created inside the class itself
   */
  private Laptop() {
    System.out.println("in default constructor : " + this.name());
  }

  private Laptop(int price) {
    this.price = price;
    System.out.println("in parametrized constructor : " + this.name());
  }

  public int getPrice() {
    return this.price;
  }

  public void print() {
    System.out.println(this + " : " + this.getPrice());
  }

}