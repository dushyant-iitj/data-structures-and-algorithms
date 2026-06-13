public class ArrayDrawbacks {

  public static void main(String[] args) {
    /*
     * Drawbacks of Array
     * continuos storage, if copy same size new memory created
     * fixed size
     * same types, can't store different types
     * traversing
     */

    Student s1 = new Student(10, "Satish", 23);
    Student s2 = new Student(11, "Matish", 43);
    Student s3 = new Student(12, "Jatish", 63);
    Student[] students = { s1, s2, s3 };

    // For Each loop
    for (Student s : students) {
      System.out.println("Roll no: " + s.getRollNo() + ", Name: " + s.getName() + ", Marks: " + s.getMarks() + "");
    }
  }

}

class Student {
  private int rollNo;
  private String name;
  private int marks;

  public Student() {
    this.rollNo = 0;
    this.name = "Name";
    this.marks = 0;
  }

  public Student(int rollNo, String name, int marks) {
    this.rollNo = rollNo;
    this.name = name;
    this.marks = marks;
  }

  public int setRollNo(int rollNo) {
    this.rollNo = rollNo;
    return rollNo;
  }

  public String setName(String name) {
    this.name = name;
    return name;
  }

  public int setMarks(int marks) {
    this.marks = marks;
    return marks;
  }

  public int getRollNo() {
    return this.rollNo;
  }

  public String getName() {
    return this.name;
  }

  public int getMarks() {
    return this.marks;
  }
}