/*

Pattern-5: Inverted Right Pyramid

Problem Statement: Given an integer N, print the following pattern : 
*****
****
***
**
*

*/

public class Pattern5 {
  public static void invertedRightPyramid(int n) {
    for (int i = 0; i < n; i++) {
      for (int j = n - i; j >= 1; j--) {
        System.out.print("*");
      }
      System.out.println();
    }
  }

  public static void main(String[] args) {
    invertedRightPyramid(5);
    invertedRightPyramid(3);
  }
}
