/*
Pattern-18: Alpha-Triangle Pattern

Problem Statement: Given an integer N, print the following pattern :

E
DE
CDE
BCDE
ABCDE

*/

public class Pattern18 {

  public static void alphaTrianglePattern(int n) {
    int c = 'E';

    for (int i = 1; i <= n; i++) {
      for (int j = i; j >= 1; j--) {
        System.out.print((char) (c - j + 1));
      }

      System.out.println();
    }
  }

  public static void main(String[] args) {
    int a = 5;
    System.out.println("int " + a + ":");
    alphaTrianglePattern(a);
    a = 25;
    System.out.println("int " + a + ":");
    alphaTrianglePattern(a);
  }

}
