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

    Solution solution = new Solution();

    int a = 5;

    System.out.println("n: " + a);
    solution.theNumberPattern(a);
  }
}

class Solution {
  public void theNumberPattern(int n) {

    int x = n;
    int xSwitch = 1;

    while (x <= n) {
      // y
      int y = n;
      int ySwitch = 1;

      while (y <= n) {

        // print
        System.out.print(Math.max(x, y));

        if (ySwitch == 1) {
          y--;
        } else {
          y++;
        }

        if (y <= 1) {
          ySwitch = 0;
        }
      }

      System.out.println();

      if (xSwitch == 1) {
        x--;
      } else {
        x++;
      }

      if (x <= 1) {
        xSwitch = 0;
      }
    }
  }
}