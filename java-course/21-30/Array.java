public class Array {

  public static void main(String[] args) {

    // Array
    /*
     * int[] x = { 1, 2, 3 };
     * int[] y = new int[5];
     */
    int[] y = { 1, 2, 3 };
    for (int i = 0; i < y.length; i++) {
      System.out.println(y[i]);
    }

    // ######################################
    // 2D Array
    System.out.println("2D Array:");
    int[][] numbers = new int[3][4];

    // Assign
    for (int i = 0; i < numbers.length; i++) {

      for (int j = 0; j < numbers[0].length; j++) {
        numbers[i][j] = (int) Math.floor(Math.random() * 10);
      }

    }

    // Print
    for (int[] n : numbers) {

      for (int m : n) {
        System.out.print(m + " ");
      }

      System.out.println();
    }

    // ######################################
    /*
     * Jagged Array:
     * 1st row has 3 elements array
     * 2nd row has 4 elements array
     * 3nd row has 2 elements array
     */
    System.out.println("Jagged Array:");
    int[][] jaggedArray = new int[3][];
    jaggedArray[0] = new int[3];
    jaggedArray[1] = new int[4];
    jaggedArray[2] = new int[2];

    // Assign
    for (int i = 0; i < jaggedArray.length; i++) {

      for (int j = 0; j < jaggedArray[i].length; j++) {
        jaggedArray[i][j] = (int) Math.floor(Math.random() * 10);
      }

    }

    // Print
    for (int[] n : jaggedArray) {

      for (int m : n) {
        System.out.print(m + " ");
      }

      System.out.println();
    }
  }

}
