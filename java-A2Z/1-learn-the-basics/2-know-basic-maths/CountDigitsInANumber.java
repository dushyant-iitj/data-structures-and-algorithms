/*
Count digits in a number

Problem Statement: Given an integer N, return the number of digits in N.
*/

public class CountDigitsInANumber {

  public static void main(String[] args) {
    int n = 232453;
    System.out.println(bruteForce(n));
    System.out.println(stringify(n));
    System.out.println(logarithm(n));
  }

  static int bruteForce(int n) {
    int count = 0;
    int store = n;

    while (store > 0) {
      count++;
      store = (int) (store / 10);
    }

    return count;
  }

  static int stringify(int n) {
    String s = Integer.toString(n);
    return s.length();
  }

  static int logarithm(int n) {
    return (int) (Math.log10(n) + 1);
  }
}
