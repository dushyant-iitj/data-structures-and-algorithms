/*
Pattern - 21: Hollow Rectangle Pattern

Problem Statement: Given an integer N, print the following pattern : 

****
*  *
*  *
****

Here, N = 5.
*/

public class Pattern21 {
  public static void main(String[] args) {
    Solution sol = new Solution();
    int a = 5;
    System.out.println("int " + a + ":");
    sol.hollowRectanglePattern(a);
  }
}

class Solution {
  public void hollowRectanglePattern(int n) {

    // rows loop running till n - 1
    for (int i = 1; i < n; i++) {

      // columns loop running till n - 1
      for (int j = 1; j < n; j++) {

        // Condition for spaces vs stars
        if (i > 1 &&
            i < n - 1 &&
            j > 1 &&
            j < n - 1) {
          System.out.print(" ");
        } else {
          System.out.print("*");
        }

      }

      System.out.println();
    }
  }
}