import java.util.ArrayList;
import java.util.Collections;
import java.util.Comparator;
import java.util.List;

public class ComparableVsComparator {
  public static void main(String[] args) {
    // ##########################################
    // Last digit Comparator
    Comparator<Integer> lastDigitComparator = new Comparator<Integer>() {
      public int compare(Integer i, Integer j) {
        if (i % 10 > j % 10) {
          return 1;
        } else {
          return -1;
        }
      }
    };

    List<Integer> numbers = new ArrayList<>();
    numbers.add(43);
    numbers.add(31);
    numbers.add(72);
    numbers.add(29);

    Collections.sort(numbers, lastDigitComparator);

    System.out.println(numbers);

    // ##########################################
    // Length of string Comparator
    // Comparator<String> stringLengthComparator = new Comparator<String>() {
    // public int compare(String i, String j) {
    // if (i.length() > j.length()) {
    // return 1;
    // } else {
    // return -1;
    // }
    // }
    // };

    Comparator<String> stringLengthComparator = (i, j) -> i.length() > j.length() ? 1 : -1;

    List<String> names = new ArrayList<>();
    names.add("Sonia");
    names.add("Meenakshi");
    names.add("Neelam");
    names.add("Neha");
    names.add("Devisha");

    Collections.sort(names, stringLengthComparator);

    System.out.println(names);

    // ##########################################
    // Student age with Comparable

    List<Student> students = new ArrayList<>();
    students.add(new Student("Somya", 42));
    students.add(new Student("Janki", 32));
    students.add(new Student("Seema", 12));
    students.add(new Student("Sakshi", 22));

    Collections.sort(students);

    for (Student s : students) {
      System.out.println(s.toString());
    }
  }
}

class Student implements Comparable<Student> {
  String name;
  Integer age;

  public Student(String name, Integer age) {
    this.age = age;
    this.name = name;
  }

  @Override
  public String toString() {
    return "Student : " + this.name + ", age : " + this.age;
  }

  public String getName() {
    return name;
  }

  public void setName(String name) {
    this.name = name;
  }

  public Integer getAge() {
    return age;
  }

  public void setAge(Integer age) {
    this.age = age;
  }

  public int compareTo(Student that) {
    if (this.getAge() > that.getAge()) {
      return 1;
    } else {
      return -1;
    }
  }

}