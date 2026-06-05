/*
Pattern - 13: Increasing Number Triangle Pattern

Problem Statement: Given an integer N, print the following pattern :
1
2 3
4 5 6
7 8 9 10
11 12 13 14 15
*/

public class Pattern13 {

  public static void increasingNumberTrianglePattern(int n) {
    int v = 1;

    for (int i = 1; i <= n; i++) {
      for (int j = 1; j <= i; j++) {
        System.out.print(v);
        System.out.print(" ");
        v++;
      }

      System.out.println();
    }
  }

  public static void main(String[] args) {
    increasingNumberTrianglePattern(5);
    increasingNumberTrianglePattern(12);
  }
}
