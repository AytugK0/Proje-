public class Light extends Appliance {
  
    public void setBrightness(int brightness) {
        if (brightness < 0 || brightness > 100) {
            System.out.println("Brightness must be between 0 and 100.");
            return;
        }
        System.out.println("Brightness set to " + brightness + "%.");
    }
}
