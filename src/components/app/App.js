import './App.scss';

//projects
import ESignatureApp from '../projects/01-E-Signature-App/ESignatureApp';
import RandomizeColors from '../projects/02-Randomize-Colors/RandomizeColors';
import LikeMyPhoto from '../projects/03-Like-My-Photo/LikeMyPhoto';
import Testimonials from '../projects/04-Testimonials/Testimonials';
import Alerts from '../projects/05-Alerts/Alerts';
import TemperatureController from '../projects/06-Temperature-Controller/TemperatureController';
import LightDarkMode from '../projects/07-Light-and-Dark-Mode/LightDarkMode';


function App() {
  return (
    <div className="App">
      {/* <ESignatureApp /> */}
      {/* <RandomizeColors /> */}
      {/* <LikeMyPhoto /> */}
      {/* <Testimonials /> */}
      {/* <Alerts /> */}
      {/* <TemperatureController /> */}
      <LightDarkMode />

    </div>
  );
}

export default App;
