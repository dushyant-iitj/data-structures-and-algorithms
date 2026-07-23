/*
Print N to 1 using Recursion

Problem Description: Given an integer N, write a program to print numbers from N to 1.

Examples
Input: N = 4
Output: 4, 3, 2, 1
Explanation: All the numbers from 4 to 1 are printed.
Input: N = 1
Output: 1 
Explanation: This is the base case.
*/

public class PrintNTo1UsingRecursion {
  public static void main(String[] args) {
    Solution solution = new Solution();

    int a;
    a = 1;
    System.out.println("For int = " + a + " :");
    solution.printNTo1(a);
    System.out.println();

    a = -21;
    System.out.println("For int = " + a + " :");
    solution.printNTo1(a);
    System.out.println();

    a = 5;
    System.out.println("For int = " + a + " :");
    solution.printNTo1(a);
    System.out.println();
  }
}

class Solution {
  public void printNTo1(int n) {
    // wrong input
    if (n < 1) {
      System.out.print("wrong input");
      return;
    }

    // stop condition
    if (n == 1) {
      System.out.print(1);
      return;
    }

    // recursion
    System.out.print(n + ", ");
    printNTo1(n - 1);
  }
}
