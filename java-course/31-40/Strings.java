import sun.misc.Unsafe;
import java.lang.reflect.Field;
import java.lang.management.ManagementFactory;
import com.sun.management.HotSpotDiagnosticMXBean;

public class Strings {

  public static void main(String[] args) throws Exception {
    // String object constructed with "JVM" input
    String name = new String("JVM");
    System.out.println("Hello" + name);

    // Strings are immutable

    // ###########################################
    // String Constant Pool
    // String constant pool is created in Heap
    // The variable stores address for same constant so save memory
    String s1 = "Test";
    String s2 = "Test";
    Address addr = new Address();
    addr.getStringAddress(name);
    addr.getStringAddress(s1);
    addr.getStringAddress(s2);
    // When we try to update, a new object is created
    // Old becomes eligible for garbage collection
    name = name + " Singh";
    addr.getStringAddress(name);
  }

}

class Address {

  public static Unsafe getUnsafe() throws Exception {
    Field field = Unsafe.class.getDeclaredField("theUnsafe");
    field.setAccessible(true);
    return (Unsafe) field.get(null);
  }

  public void getStringAddress(String s) throws Exception {

    Unsafe unsafe = getUnsafe();

    Object[] array = new Object[] { s };

    long baseOffset = unsafe.arrayBaseOffset(Object[].class);

    // With compressed oops (default), references in arrays are 4 bytes
    long compressedOop = unsafe.getInt(array, baseOffset) & 0xFFFFFFFFL;
    System.out.printf("Reference value (compressed oop): 0x%x%n", compressedOop);

    // --- Determine if heap base is 0 ---
    long maxHeap = Runtime.getRuntime().maxMemory();
    long fourGB = 4L * 1024 * 1024 * 1024;

    int shift = getObjectAlignmentShift(); // usually 3 (alignment = 8 bytes)

    if (maxHeap < fourGB) {
      // Heap base == 0: real address = compressedOop << shift
      long realAddress = compressedOop << shift;
      System.out.printf("Real address (heap base = 0): 0x%x%n", realAddress);
    } else {
      System.out.println("Max heap >= 4GB: heap base is likely non-zero. "
          + "Cannot compute real address without knowing CompressedOopsBase "
          + "(not exposed via public API; use JOL or a JVMTI agent).");
    }
  }

  /**
   * Reads -XX:ObjectAlignmentInBytes (default 8) and converts it to a shift
   * value.
   * e.g. 8 -> shift 3, 16 -> shift 4
   */
  private int getObjectAlignmentShift() {
    try {
      HotSpotDiagnosticMXBean bean = ManagementFactory.getPlatformMXBean(HotSpotDiagnosticMXBean.class);
      String value = bean.getVMOption("ObjectAlignmentInBytes").getValue();
      int alignment = Integer.parseInt(value);
      return Integer.numberOfTrailingZeros(alignment);
    } catch (Exception e) {
      // fallback to default alignment of 8 bytes
      return 3;
    }
  }

}