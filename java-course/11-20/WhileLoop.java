public class WhileLoop {
  public static void main(String[] args) {
    int a;
    Solution sol = new Solution();

    a = 5;
    System.out.println("int " + a + ":");
    sol.practicePattern(a);
    a = 9;
    System.out.println("int " + a + ":");
    sol.practicePattern(a);

    // Do While
    System.out.println();
    System.out.println("// Do While");
    int i = 5;

    do {
      System.out.println("i = " + i);
      i++;
    } while (i <= 4);
  }
}

class Solution {

  public void practicePattern(int n) {
    // Rows
    int i = n;
    int iChecker = n;

    while (i <= n) {

      // Columns
      int j = n;
      int jChecker = n;

      while (j <= n) {
        System.out.print(Math.max(i, j));
        System.out.print("  ");

        jChecker--;
        if (jChecker < 1)
          j++;
        else
          j--;
      }

      System.out.println();
      iChecker--;
      if (iChecker < 1)
        i++;
      else
        i--;
    }

  }
}
