/*
Pattern - 3: Right-Angled Number Pyramid

Problem Statement: Given an integer N, print the following pattern : 
1
12
123
1234
12345
*/

public class Pattern3 {
  public static void rightAngledNumberPyramid(int n) {
    for (int i = 1; i <= n; i++) {
      for (int j = 1; j <= i; j++) {
        System.out.print(j);
      }
      System.out.println();
    }
  }

  public static void main(String[] args) {
    rightAngledNumberPyramid(5);
    rightAngledNumberPyramid(3);
  }
}
