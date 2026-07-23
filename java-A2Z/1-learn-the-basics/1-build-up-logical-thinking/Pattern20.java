/*
Pattern - 20: Symmetric-Butterfly Pattern

Problem Statement: Given an integer N, print the following pattern : 

*        *
**      **
***    ***
****  ****
**********
****  ****
***    ***
**      **
*        *

Here, N = 5.
*/

public class Pattern20 {

  public static void main(String[] args) {
    int a = 5;
    Solution sol = new Solution();
    sol.symmetricButterflyPattern(a);
    a = 10;
    sol.symmetricButterflyPattern(a);
  }
}

class Solution {
  public void symmetricButterflyPattern(int n) {
    System.out.println("int " + n + ":");
    // top part

    // initial spaces
    int spaces = 2 * (n - 1);

    for (int i = 1; i <= n; i++) {

      // left stars
      for (int j = 1; j <= i; j++) {
        System.out.print("*");
      }

      // middle spaces
      for (int j = spaces; j > 0; j--) {
        System.out.print(" ");
      }

      // right stars
      for (int j = 1; j <= i; j++) {
        System.out.print("*");
      }

      spaces -= 2;
      System.out.println();
    }

    // bottom except middle row

    // initial spaces
    spaces = 2;

    for (int i = n - 1; i >= 1; i--) {

      // left stars
      for (int j = 1; j <= i; j++) {
        System.out.print("*");
      }

      // middle spaces
      for (int j = spaces; j > 0; j--) {
        System.out.print(" ");
      }

      // right stars
      for (int j = 1; j <= i; j++) {
        System.out.print("*");
      }

      spaces += 2;
      System.out.println();
    }
  }
}
