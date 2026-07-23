/*
Pattern-19: Symmetric-Void Pattern

Problem Statement: Given an integer N, print the following pattern :

**********
****  ****
***    ***
**      **
*        *
*        *
**      **
***    ***
****  ****
**********

Here, N = 5.
*/

public class Pattern19 {

  public static void symmetricVoidPattern(int n) {
    // top half
    for (int i = 1; i <= n; i++) {
      // top left
      for (int j = n; j >= 1; j--) {
        if (j >= i) {
          System.out.print("*");
        } else {
          System.out.print(" ");
        }
      }
      // top right
      for (int j = 1; j <= n; j++) {
        if (j >= i) {
          System.out.print("*");
        } else {
          System.out.print(" ");
        }
      }

      System.out.println();
    }

    // bottom half
    for (int i = 1; i <= n; i++) {
      // bottom left
      for (int j = 1; j <= n; j++) {
        if (j > i) {
          System.out.print(" ");
        } else {
          System.out.print("*");
        }
      }

      // bottom right
      for (int j = n; j >= 1; j--) {
        if (j > i) {
          System.out.print(" ");
        } else {
          System.out.print("*");
        }
      }

      System.out.println();
    }
  }

  public static void main(String[] args) {
    int a = 5;
    System.out.println("int " + a + ":");
    symmetricVoidPattern(a);
    a = 10;
    System.out.println("int " + a + ":");
    symmetricVoidPattern(a);
  }
}
