/*
Pattern - 16: Alpha-Ramp Pattern

Problem Statement: Given an integer N, print the following pattern :

A
BB
CCC
DDDD
EEEEE

*/

public class Pattern16 {

  public static void alphaRampPattern(int n) {

    int c = 'A';

    for (int i = 1; i <= n; i++) {

      for (int j = 1; j <= i; j++) {
        System.out.print((char) c);
      }

      System.out.println();
      c++;
    }

  }

  public static void main(String[] args) {
    System.err.println("int 5:");
    alphaRampPattern(5);
  }
}
