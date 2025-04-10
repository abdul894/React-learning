import ProfileCard from "./ProfileCard";
import AlexaImage from "./assets/alexa.png";
import CortanaImage from "./assets/cortana.png";
import SiriImage from "./assets/siri.png";

function App() {
    return (
        <div>
            <div>Personal Digital Assistant</div>

            <ProfileCard title='Alexa' handle='@alexa99' image={AlexaImage} />
            <ProfileCard title='Cortana' handle='@cortana32' image={CortanaImage} />
            <ProfileCard title='Siri' handle='@siri01' image={SiriImage} />
        </div>
    );
}

export default App;