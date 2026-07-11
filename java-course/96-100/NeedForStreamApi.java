import java.util.Arrays;
import java.util.List;

public class NeedForStreamApi {
  public static void main(String[] args) {

    List<Integer> numbers = Arrays.asList(4, 5, 6, 7, 2);

    int sum = 0;
    for (int n : numbers) {
      if (n % 2 == 0) {
        n = n * 2;
        sum = sum + n;
      }
    }

    numbers.forEach(n -> System.out.println(n));

    System.out.println(sum);
  }
}
