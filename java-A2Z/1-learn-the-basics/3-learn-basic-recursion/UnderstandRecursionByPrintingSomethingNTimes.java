public class UnderstandRecursionByPrintingSomethingNTimes {
  public static void main(String[] args) {
    int test;
    test = 9;
    recursionExample(test);
  }

  static void recursionExample(int n) {

    if (n == 0)
      return;

    System.out.println(n);
    recursionExample(n - 1);
  }
}
