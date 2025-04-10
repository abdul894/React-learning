import 'bulma/css/bulma.css';
import ProfileCard from "./ProfileCard";
import AlexaImage from "./assets/alexa.png";
import CortanaImage from "./assets/cortana.png";
import SiriImage from "./assets/siri.png";

function App() {
    return (
        <div>
            <section className='hero is-info'>
                <div className='hero-body'>
                    <p className='title'>Personal Digital Assistant</p>
                </div>
            </section>

            <div className='container'>
                <div className='section'>
                    <div className='columns'>
                        <div className='column is-3'>
                            <ProfileCard 
                                title='Alexa' 
                                handle='@alexa99' 
                                image={AlexaImage}
                                description="Alexa was created by Amazon to help you buy things." 
                            />
                        </div>
                        <div className='column is-3'>
                            <ProfileCard 
                                title='Cortana' 
                                handle='@cortana32' 
                                image={CortanaImage} 
                                description="Cortana was made by Microsoft."
                            />
                        </div>
                        <div className='column is-3'>
                            <ProfileCard 
                                title='Siri' 
                                handle='@siri01' 
                                image={SiriImage} 
                                description="Siri was made by Apple"
                            />
                        </div>
                    </div>
                </div>
            </div>
        
        </div>
    );
}

export default App;