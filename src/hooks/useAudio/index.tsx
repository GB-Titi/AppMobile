import { NativeAudio } from "@ionic-native/native-audio/ngx";

const useAudio = () => {
  const playMusic = (nativeAudio: NativeAudio) => {
    const music = nativeAudio.preloadSimple(
      "pokemonTheme",
      "././public/assets/audio/pokemon-music.mp3"
    );
    console.log(music);
  };

  return {
    playMusic,
  };
};

export default useAudio;
