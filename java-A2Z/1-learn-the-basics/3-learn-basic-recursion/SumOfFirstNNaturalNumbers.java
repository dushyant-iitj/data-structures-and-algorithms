/*
Sum of first N Natural Numbers

Problem Statement: Given a number ‘N’, find out the sum of the first N natural numbers .

Examples
Input: N=5
Output: 15
Explanation: 1+2+3+4+5=15

Input: N=6
Output: 21
Explanation: 1+2+3+4+5+6=15
*/

public class SumOfFirstNNaturalNumbers {
  public static void main(String[] args) {
    Solution solution = new Solution();

    int a;
    a = 1;
    System.out.println("For int = " + a + " :");
    System.out.println(solution.sumOfNaturalNumbers(a));

    a = -21;
    System.out.println("For int = " + a + " :");
    System.out.println(solution.sumOfNaturalNumbers(a));

    a = 5;
    System.out.println("For int = " + a + " :");
    System.out.println(solution.sumOfNaturalNumbers(a));
  }
}

class Solution {
  public int sumOfNaturalNumbers(int n) {
    // wrong input
    if (n < 1) {
      System.out.println("wrong input");
      return -1;
    }

    // stop condition
    if (n == 1) {
      return 1;
    }

    // recursion
    return n +
        sumOfNaturalNumbers(n - 1);
  }
}
