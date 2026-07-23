/*
Pattern-1: Rectangular Star Pattern

Problem Statement: Given an integer N, print the following pattern.
*****
*****
*****
*****
*****
*/

class Pattern1 {

  static void rectangularPattern(int n) {
    for (int i = 1; i <= n; i++) {
      for (int j = 1; j <= n; j++) {
        System.out.print("*");
      }
      System.out.println();
    }
  }

  public static void main(String args[]) {
    rectangularPattern(5);
    rectangularPattern(8);
  }
}
