/*
Pattern - 11: Binary Number Triangle Pattern

Problem Statement: Given an integer N, print the following pattern :
1
01
101
0101
10101

*/

public class Pattern11 {

  public static void binaryNumberTrianglePattern(int n) {

    for (int i = 1; i <= n; i++) {
      for (int j = 1; j <= i; j++) {
        if ((i + j - 1) % 2 == 1) {
          System.out.print(1);
        } else {
          System.out.print(0);
        }
      }
      System.out.println();
    }

  }

  public static void main(String[] args) {
    System.out.println("int 5 :");
    binaryNumberTrianglePattern(5);
    System.out.println("int 12 :");
    binaryNumberTrianglePattern(12);
  }
}
