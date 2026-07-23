/*
Pattern - 9: Diamond Star Pattern

Problem Statement: Given an integer N, print the following pattern : 

    *
   ***
  *****
 *******
*********
*********
 *******
  *****
   ***
    *

*/

public class Pattern9 {

  public static void diamondStarPattern(int n) {
    // Top
    for (int i = 1; i <= n; i++) {
      // Spaces
      for (int j = 1; j <= n - i; j++) {
        System.out.print(" ");
      }

      // Stars
      for (int z = 1; z <= (2 * (i)) - 1; z++) {
        System.out.print("*");
      }

      System.out.println();
    }

    // Bottom
    for (int i = 1; i <= n; i++) {
      // Spaces
      for (int j = 1; j < i; j++) {
        System.out.print(" ");
      }

      // Stars
      for (int z = 1; z <= (2 * (n - i + 1)) - 1; z++) {
        System.out.print("*");
      }

      System.out.println();
    }
  }

  public static void main(String[] args) {
    diamondStarPattern(5);
    diamondStarPattern(3);
  }
}
