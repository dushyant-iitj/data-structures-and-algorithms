import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;

public class TryWithResources {
  public static void main(String[] args) throws NumberFormatException, IOException {

    /*
     * Try with resources
     * Closes the resource automatically
     */

    /*
     * int num = 0;
     * BufferedReader bf = null;
     * 
     * try {
     * 
     * InputStreamReader in = new InputStreamReader(System.in);
     * bf = new BufferedReader(in);
     * num = Integer.parseInt(bf.readLine());
     * } finally {
     * System.out.println(num);
     * bf.close();
     * }
     */

    int num = 0;

    // Try with resources
    // Automatically closes resources
    try (BufferedReader br = new BufferedReader(new InputStreamReader(System.in))) {
      num = Integer.parseInt(br.readLine());
      System.out.println(num);
    }
  }
}
