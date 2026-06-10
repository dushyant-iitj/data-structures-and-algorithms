public class ForLoop {
  public static void main(String[] args) {

    for (int i = 1; i <= 7; i++) {
      System.out.println("Day " + i);
      for (int j = 9; j <= 17; j++) {
        System.out.println("  " + (j) + " - " + (j + 1));
      }
    }

  }
}
