/*
Check if a number is Palindrome or Not

Problem Statement: Given an integer N, return true if it is a palindrome else return false.

A palindrome is a number that reads the same backward as forward. For example, 121, 1331, and 4554 are palindromes because they remain the same when their digits are reversed.
*/

public class CheckIfANumberIsPalindromeOrNot {
  public static void main(String[] args) {
    int test;
    Solution solution = new Solution();

    test = 1221;
    System.out.println(test + " : " + solution.checkPalindrome(test));
    test = 1223;
    System.out.println(test + " : " + solution.checkPalindrome(test));
    test = 12321;
    System.out.println(test + " : " + solution.checkPalindrome(test));
    test = 1221232;
    System.out.println(test + " : " + solution.checkPalindrome(test));
  }
}

class Solution {
  public boolean checkPalindrome(int n) {
    int nCopy = n;
    int reverse = 0;

    while (n > 0) {
      int remainder = n % 10;
      reverse = reverse * 10 + remainder;
      n = (int) (n - remainder) / 10;
    }

    return nCopy == reverse;
  }
}
