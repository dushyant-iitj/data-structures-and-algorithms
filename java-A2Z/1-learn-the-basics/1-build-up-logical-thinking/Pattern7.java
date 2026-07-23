/*
Pattern - 7: Star Pyramid

Problem Statement: Given an integer N, print the following pattern : 
    *
   ***
  *****
 *******
*********

*/

public class Pattern7 {

  public static void starPyramid(int n) {
    for (int i = 1; i <= n; i++) {
      for (int j = 1; j <= n - i; j++) {
        System.out.print(" ");
      }
      for (int z = 1; z <= (2 * i) - 1; z++) {
        System.out.print("*");
      }
      System.out.println();
    }
  }

  public static void main(String[] args) {
    starPyramid(5);
    starPyramid(3);
  }
}
