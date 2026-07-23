/*
Pattern-15: Reverse Letter Triangle Pattern

Problem Statement: Given an integer N, print the following pattern :

ABCDE
ABCD
ABC
AB
A

*/
public class Pattern15 {

  public static void reverseLetterTrianglePattern(int n) {

    for (int i = 1; i <= n; i++) {
      int c = 'A';
      for (int j = n - i + 1; j >= 1; j--) {
        char letter = (char) c;
        System.err.print(letter);
        c++;
      }

      System.err.println();
    }
  }

  public static void main(String[] args) {
    System.out.println("int 5:");
    reverseLetterTrianglePattern(5);
    // System.out.println("int 124:");
    // reverseLetterTrianglePattern(124);
  }
}
