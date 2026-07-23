/*
Reverse Digits of A Number

Problem Statement: Given an integer N return the reverse of the given number.

Note: If a number has trailing zeros, then its reverse will not include them. For e.g , reverse of 10400 will be 401 instead of 00401.
*/

public class ReverseDigitsOfANumber {

  public static void main(String[] args) {
    System.out.println(bruteForce(123456));
  }

  static int bruteForce(int n) {
    int store = 0;

    while (n > 0) {
      int remainder = n % 10;
      store = store * 10 + remainder;
      n = (n - remainder) / 10;
      System.out.println("remainder : " + remainder);
      System.out.println("store : " + store);
      System.out.println("n : " + n);
    }

    return store;
  }
}
