import java.util.Arrays;
import java.util.List;
import java.util.stream.Stream;

public class StreamApi {
  public static void main(String[] args) {

    List<Integer> numbers = Arrays.asList(4, 5, 6, 7, 2);

    Stream<Integer> s1 = numbers.stream();

    // System.out.println("s1 :");
    // s1.forEach(n -> System.out.println(n));

    Stream<Integer> s2 = s1.filter(n -> n % 2 == 0);

    // System.out.println("s2 :");
    // s2.forEach(n -> System.out.println(n));

    Stream<Integer> s3 = s2.map(n -> n * 2);

    // System.out.println("s3 :");
    // s3.forEach(n -> System.out.println(n));

    s3.reduce(0, (c, e) -> c + e);

    /*
     * #########################
     * Combine
     * #########################
     */

    int result = numbers.stream()
        .filter(n -> n % 2 == 0)
        .map(n -> n * 2)
        .reduce(0, (c, e) -> c + e);

    System.out.println("result: " + result);
  }
}