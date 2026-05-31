/*

Pattern - 6: Inverted Numbered Right Pyramid

Problem Statement: Given an integer N, print the following pattern :  
12345
1234
123
12
1

*/

public class Pattern6 {
  public static void invertedNumberedRightPyramid(int n) {
    for (int i = 0; i < n; i++) {
      for (int j = 1; j <= n - i; j++) {
        System.out.print(j);
      }
      System.out.println();
    }
  }

  public static void main(String[] args) {
    invertedNumberedRightPyramid(5);
    invertedNumberedRightPyramid(3);
  }
}
