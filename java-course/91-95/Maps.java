import java.util.HashMap;
import java.util.Map;

public class Maps {
  public static void main(String[] args) {
    Map<String, Integer> students = new HashMap<String, Integer>();

    students.put("Nest", 12);
    students.put("Jest", 13);
    students.put("Fest", 14);
    students.put("Pest", 15);
    students.put("Chest", 16);

    System.out.println(students.get("Ne"));
    System.out.println(students.keySet());

    // Loop
    for (String studentName : students.keySet()) {
      System.out.println(studentName + " : " + students.get(studentName));
    }
  }
}
