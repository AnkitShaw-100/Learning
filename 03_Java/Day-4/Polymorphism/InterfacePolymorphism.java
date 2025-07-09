interface MediaPlayer {
    void play();
}

class Mp3Player implements MediaPlayer {
    public void play() {
        System.out.println("Playing MP3 audio.....");
    }
}

class VideoPlayer implements MediaPlayer {
    public void play() {
        System.out.println("Playing video file....");
    }
}

public class InterfacePolymorphism {
    public static void main(String[] args) {
        MediaPlayer mp = new Mp3Player();
        MediaPlayer vp = new VideoPlayer();

        mp.play();
        vp.play();
    }
}
