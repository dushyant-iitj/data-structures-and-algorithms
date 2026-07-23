/*
Pattern - 10: Half Diamond Star Pattern

Problem Statement: Given an integer N, print the following pattern : 

*
**
***
****
*****
*****
****
***
**
*

*/

public class Pattern10 {

  public static void halfDiamondStarPattern(int n) {
    // Top
    for (int i = 1; i <= n; i++) {
      // Stars
      for (int j = 1; j <= i; j++) {
        System.out.print("*");
      }

      System.out.println();
    }

    // Bottom
    for (int i = n - 1; i > 0; i--) {
      // Stars
      for (int j = 1; j <= i; j++) {
        System.out.print("*");
      }

      System.out.println();
    }
  }

  public static void main(String[] args) {
    System.out.println("int 5: ");
    halfDiamondStarPattern(5);
    System.out.println("int 3: ");
    halfDiamondStarPattern(3);
  }
}
