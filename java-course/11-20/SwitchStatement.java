public class SwitchStatement {

  public static void main(String[] args) {

    // Let's say 1st was Wednesday, tell which day it is
    int dayOfMonth = 23;
    Solution sol = new Solution();
    String day = sol.day(dayOfMonth);
    System.out.println(day);
  }

}

class Solution {
  public String day(int d) {

    // Old Syntax
    /*
     * switch (d % 7) {
     * case 0:
     * a = "Tuesday";
     * break;
     * case 1:
     * a = "Wednesday";
     * break;
     * case 2:
     * a = "Thursday";
     * break;
     * case 3:
     * a = "Friday";
     * break;
     * case 4:
     * a = "Saturday";
     * break;
     * case 5:
     * a = "Sunday";
     * break;
     * case 6:
     * a = "Monday";
     * default:
     * a = "Invalid number";
     * }
     */

    // New Syntax
    /*
     * String a;
     * switch (d % 7) {
     * case 0 -> a = "Tuesday";
     * case 1 -> a = "Wednesday";
     * case 2 -> a = "Thursday";
     * case 3 -> a = "Friday";
     * case 4 -> a = "Saturday";
     * case 5 -> a = "Sunday";
     * case 6 -> a = "Monday";
     * default -> a = "Invalid number";
     * }
     */

    // Switch used as expression
    String result = switch (d % 7) {
      case 0 -> "Tuesday";
      case 1 -> "Wednesday";
      case 2 -> "Thursday";
      case 3 -> "Friday";
      case 4 -> "Saturday";
      case 5 -> "Sunday";
      case 6 -> "Monday";
      default -> "Invalid number";
    };

    return result;

  }
}
