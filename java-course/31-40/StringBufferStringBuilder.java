public class StringBufferStringBuilder {

  public static void main(String[] args) {

    StringBuffer sBuffer = new StringBuffer("");
    System.out.println(sBuffer.capacity());
    sBuffer.append("Dushyant");
    System.out.println(sBuffer.capacity());
    sBuffer.append(" Singh");
    System.out.println(sBuffer.capacity());

    String name = sBuffer.toString();
    System.out.println(name);
    sBuffer.setLength(30);
    System.out.println(sBuffer.capacity());
    System.out.println(sBuffer);

    // ###########################################
    // Difference
    System.out.println("StringBuffer is thread safe while StringBuilder is not");
  }

}
