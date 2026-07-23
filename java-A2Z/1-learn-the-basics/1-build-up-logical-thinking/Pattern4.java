/*
Pattern - 4: Right-Angled Number Pyramid - II

Problem Statement: Given an integer N, print the following pattern : 
1
22
333
4444
55555
*/

public class Pattern4 {
  public static void rightAngledNumberPyramid2(int n) {
    for (int i = 1; i <= n; i++) {
      for (int j = 1; j <= i; j++) {
        System.out.print(i);
      }
      System.out.println();
    }
  }

  public static void main(String args[]) {
    rightAngledNumberPyramid2(5);
    rightAngledNumberPyramid2(3);
  }
}
