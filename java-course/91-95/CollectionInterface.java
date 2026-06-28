import java.util.ArrayList;
import java.util.Collection;

public class CollectionInterface {
  public static void main(String[] args) {
    Collection<Integer> numbers = new ArrayList<>();
    numbers.add(0);
    numbers.add(1);
    numbers.add(2);
    numbers.add(3);
    numbers.add(4);

    for (int n : numbers) {
      System.out.println(n);
    }
  }
}