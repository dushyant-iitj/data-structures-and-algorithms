import java.util.Iterator;
import java.util.Set;
import java.util.TreeSet;

public class Sets {
  public static void main(String[] args) {
    Set<Integer> numbers = new TreeSet<Integer>();
    numbers.add(6);
    numbers.add(5);
    numbers.add(3);
    numbers.add(2);
    numbers.add(6);
    numbers.add(6);

    Iterator<Integer> values = numbers.iterator();

    while (values.hasNext()) {
      System.out.println(values.next());
    }

    // for (Integer n : numbers) {
    // System.out.println(n);
    // }
  }
}
