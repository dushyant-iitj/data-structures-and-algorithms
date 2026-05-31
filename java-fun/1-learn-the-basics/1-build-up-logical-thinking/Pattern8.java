/*
Pattern - 8: Inverted Star Pyramid

Problem Statement: Given an integer N, print the following pattern : 
*********
 *******
  *****
   ***
    *

*/

public class Pattern8 {

  public static void invertedStarPyramid(int n) {
    for (int i = 0; i < n; i++) {
      // Spaces
      for (int j = 0; j < i; j++) {
        System.out.print(" ");
      }
      // Stars
      for (int z = 0; z < (2 * (n - i)) - 1; z++) {
        System.out.print("*");
      }
      System.out.println();
    }
  }

  public static void main(String[] args) {
    invertedStarPyramid(5);
    invertedStarPyramid(3);
  }
}
