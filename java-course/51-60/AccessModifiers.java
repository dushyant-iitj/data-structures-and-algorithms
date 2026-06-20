public class AccessModifiers {

  public static void main(String[] args) {

    /*
     * public - can be accessed anywhere
     * private - can be used in the same class only
     * default - private protected - can be accessed in the same package
     * protected - can be used in same package
     * and in the other packages in subclasses
     */

    /*
     * Best Practice:
     * use public - for methods and the main class of file
     * only one class can be public in a file
     * 
     * use private - for variables
     * 
     * protected - specific cases for same package and children/subclasses allow
     * 
     * default - don't use
     */
  }

}
