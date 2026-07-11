import java.util.Arrays;
import java.util.List;
import java.util.function.Consumer;

public class ForEachConsumer {
  public static void main(String[] args) {

    List<Integer> numbers = Arrays.asList(4, 5, 6, 7, 2);

    // Consumer<Integer> consumer = new Consumer<Integer>() {
    // public void accept(Integer n) {
    // System.out.println(n);
    // }
    // };
    Consumer<Integer> consumer = (Integer n) -> {
      System.out.println(n);
    };

    numbers.forEach(consumer);
  }
}
