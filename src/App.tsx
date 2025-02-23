import './App.css'
import { AudioClip } from './types.ts'
import Drum from './drum.tsx';

const audioClips: AudioClip[] = [
  {
    keyTrigger: "Q",
    url:  "https://cdn.freecodecamp.org/testable-projects-fcc/audio/Dsc_Oh.mp3",
    description: "Open HH",
  },
  {
    keyTrigger: "W",
    url:  "https://cdn.freecodecamp.org/testable-projects-fcc/audio/Cev_H2.mp3",
    description: "Closed HH",
  },
  {
    keyTrigger: "E",
    url:  "https://cdn.freecodecamp.org/testable-projects-fcc/audio/Kick_n_Hat.mp3",
    description: "Kick-n'-Hat",
  },
  {
    keyTrigger: "A",
    url:  "https://cdn.freecodecamp.org/testable-projects-fcc/audio/RP4_KICK_1.mp3",
    description: "Kick",
  },
  {
    keyTrigger: "S",
    url:  "https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-6.mp3",
    description: "Clap",
  },
  {
    keyTrigger: "D",
    url:  "https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-3.mp3",
    description: "Heat 3",
  },
  {
    keyTrigger: "Z",
    url:  "https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-2.mp3",
    description: "Heat 2",
  },
  {
    keyTrigger: "X",
    url:  "https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-4_1.mp3",
    description: "Heat 1",
  },
  {
    keyTrigger: "C",
    url:  "https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-1.mp3",
    description: "Heat 4",
  },

];

function App() {


  const playAudio = (e: React.KeyboardEvent<HTMLDivElement>) => {
    const clip = audioClips.find(
      (clip) => clip.keyTrigger === e.key.toUpperCase()
    );
    if (!clip) return;
    (document.getElementById(clip.keyTrigger) as HTMLAudioElement)
      .play()
      .catch(console.error);

    document.getElementById("drum-" + clip.keyTrigger)?.focus();
    document.getElementById("display")!.innerText = clip.description;
  };
  return (
    <div className="container" id="drum-machine" onKeyDown={playAudio}>
      <h1>FCC Drum Machine</h1>
      <div className="whole-drum">
        {audioClips.map((clip) => (
          <Drum audioClip={clip} key={clip.keyTrigger} />
        ))}
      </div>
      <div id="display"></div>
    </div>
  );
}

export default App;
