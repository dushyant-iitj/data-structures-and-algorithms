/*
Pattern-2: Right-Angled Triangle Pattern

Problem Statement: Given an integer N, print the following pattern : 
*
**
***
****
*****
*/

public class Pattern2 {
  public static void rightAngledTriangle(int n) {
    for (int i = 1; i <= n; i++) {
      for (int j = 1; j <= i; j++) {
        System.out.print("*");
      }
      System.out.println();
    }
  }

  public static void main(String[] args) {
    rightAngledTriangle(5);
    rightAngledTriangle(3);
  }
}
