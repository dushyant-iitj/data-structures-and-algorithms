public class Encapsulation {

  public static void main(String[] args) {
    Human h1 = new Human();
    h1.setAge(12);
    h1.setName("Clown");
    Human h2 = new Human(11, "Jija");

    h1.showInfo();
    h2.showInfo();
    System.out.println(h1.toString());
    System.out.println(h2.toString());
  }

}

class Human {
  private int age;
  private String name;

  public Human() {
    this.age = 0;
    this.name = "Name";
  }

  public Human(int age, String name) {
    this.age = age;
    this.name = name;
  }

  // ##################################
  // Getters
  public int getAge() {
    return this.age;
  }

  public String getName() {
    return this.name;
  }

  // ##################################
  // Setters
  public int setAge(int age) {
    this.age = age;
    return this.age;
  }

  public String setName(String name) {
    this.name = name;
    return this.name;
  }

  // ##################################
  // Methods
  public void showInfo() {
    System.out.println("Age: " + this.getAge() + ", Name: " + this.getName());
    System.out.println("Class: " + this.getClass());
  }
}