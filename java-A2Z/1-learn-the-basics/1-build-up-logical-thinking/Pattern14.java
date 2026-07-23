/*
Pattern-14: Increasing Letter Triangle Pattern

Problem Statement: Given an integer N, print the following pattern :
A
AB
ABC
ABCD
ABCDE

*/
public class Pattern14 {

  public static void increasingLetterTrianglePattern(int n) {

    // int a = '~';
    // System.err.println("a: " + a);
    // a++;
    // char d = (char) a;
    // System.err.println("d: " + d);
    // System.err.println("a: " + a);

    for (int i = 1; i <= n; i++) {
      int c = 'A';
      for (int j = 1; j <= i; j++) {
        char letter = (char) c;
        System.err.print(letter);
        c++;
      }

      System.err.println();
    }
  }

  public static void main(String[] args) {
    System.out.println("int 5:");
    increasingLetterTrianglePattern(5);
    // System.out.println("int 124:");
    // increasingLetterTrianglePattern(124);
  }
}
