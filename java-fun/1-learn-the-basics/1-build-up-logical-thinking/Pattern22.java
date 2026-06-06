/*
Pattern - 22: The Number Pattern

Problem Statement: Given an integer N, print the following pattern : 

4444444
4333334
4322234
4321234
4322234
4333334
4444444

Here, N = 4.
*/

public class Pattern22 {
  public static void main(String[] args) {
    int a = 5;
    // Solution object
    Solution sol = new Solution();
    // call function
    sol.theNumberPattern(a);
  }
}

class Solution {
  // function
  public void theNumberPattern(int n) {
    System.out.println("int " + n + ":");
    // row counter
    int x = n;
    int xChecker = n;

    while (x <= n) {
      // column counter
      int y = n;
      int yChecker = n;

      while (y <= n) {
        // System.out.print(x);
        // System.out.print(y);
        if (x > y) {
          System.out.print(x);
        } else {
          System.out.print(y);
        }

        // y logic
        yChecker--;
        if (yChecker < 1) {
          y++;
        } else {
          y--;
        }
      }

      System.out.println();

      // x logic
      xChecker--;
      if (xChecker < 1) {
        x++;
      } else {
        x--;
      }
    }
  }
}
