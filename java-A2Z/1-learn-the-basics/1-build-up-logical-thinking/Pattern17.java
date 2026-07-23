/*
Pattern - 17: Alpha-Hill Pattern

Problem Statement: Given an integer N, print the following pattern :

   A
  ABA
 ABCBA
ABCDCBA

Here, N = 4.
*/

public class Pattern17 {

  public static void alphaHillPattern(int n) {

    for (int i = 1; i <= n; i++) {
      int c = 'A';

      // spaces
      for (int j = n - i; j >= 1; j--) {
        System.err.print(" ");
      }

      // ramp up letters
      for (int k = 1; k <= i; k++) {
        System.err.print((char) c);
        c++;
      }

      // ramp down letters
      c--;
      for (int k = 1; k < i; k++) {
        c--;
        System.err.print((char) c);
      }

      System.err.println();
    }

  }

  public static void main(String[] args) {
    System.err.println("int 4:");
    alphaHillPattern(4);
    System.err.println("int 8:");
    alphaHillPattern(8);
  }
}
