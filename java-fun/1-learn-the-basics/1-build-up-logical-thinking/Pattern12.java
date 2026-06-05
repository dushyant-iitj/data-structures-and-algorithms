/*
Pattern - 12: Number Crown Pattern

Problem Statement: Given an integer N, print the following pattern :
1      1
12    21
123  321
12344321

Here, N = 5.
*/

public class Pattern12 {

  public static void numberCrownPattern(int n) {
    for (int i = 1; i < n; i++) {
      // start
      for (int j = 1; j < n; j++) {
        if (j > i) {
          System.out.print(" ");
        } else {
          System.out.print(j);
        }
      }

      // end
      for (int l = n - 1; l >= 1; l--) {
        if (l > i) {
          System.out.print(" ");
        } else {
          System.out.print(l);
        }
      }

      System.out.println();
    }
  }

  public static void main(String[] args) {
    System.out.println("int 5 :");
    numberCrownPattern(5);
    System.out.println("int 9 :");
    numberCrownPattern(9);
  }
}
