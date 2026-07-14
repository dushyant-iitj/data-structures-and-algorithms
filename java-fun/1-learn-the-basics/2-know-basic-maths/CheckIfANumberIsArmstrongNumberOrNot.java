/*
Check if a number is Armstrong Number or not

Problem Statement:Given an integer N, return true it is an Armstrong number otherwise return false.

An Amrstrong number is a number that is equal to the sum of its own digits each raised to the power of the number of digits.
Examples
Example 1:
Input:N = 153
Output:True
Explanation: 1^3+5^3+3^3 = 1 + 125 + 27 = 153
                                        
Example 2:
Input:N = 371                
Output: True
Explanation: 3^3+7^3+1^3 = 27 + 343 + 1 = 371
*/

import java.util.ArrayList;

public class CheckIfANumberIsArmstrongNumberOrNot {
  public static void main(String[] args) {
    Solution solution = new Solution();
    Solution2 solution2 = new Solution2();
    int test;

    test = 153;
    System.out.println(solution2.checkArmstrong(test));
    System.out.println(solution.checkArmstrong(test));
    test = 371;
    System.out.println(solution2.checkArmstrong(test));
    System.out.println(solution.checkArmstrong(test));
    test = 253;
    System.out.println(solution2.checkArmstrong(test));
    System.out.println(solution.checkArmstrong(test));
  }
}

class Solution {
  public boolean checkArmstrong(int n) {
    int digits = (int) (Math.log10(n) + 1);
    int copy = n;
    int store = 0;

    while (n > 0) {
      int digit = n % 10;
      store = (int) (store + Math.pow(digit, digits));
      n = n / 10;
    }

    return store == copy;
  }
}

class Solution2 {
  public boolean checkArmstrong(int n) {
    // get array
    ArrayList<Integer> arrayList = new ArrayList<>();
    arrayList = numberToArray(n);

    // Loop and store
    int powerSum = 0;
    for (Integer i : arrayList) {
      powerSum += Math.pow(i, arrayList.size());
    }

    return powerSum == n;
  }

  public ArrayList<Integer> numberToArray(int n) {
    ArrayList<Integer> arrayList = new ArrayList<>();

    while (n > 0) {
      int digit = n % 10;
      arrayList.add(digit);
      n = (int) n / 10;
    }

    System.out.println(arrayList);
    return arrayList;
  }
}