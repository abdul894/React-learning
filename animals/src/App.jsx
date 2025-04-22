import { useState } from "react";
import AnimalShow from "./AnimalShow";

function getRandomAnimal() {
    const animals = ['cat', 'horse', 'gator', 'bord', 'cow', 'dog'];

    return animals[Math.floor(Math.random() * animals.length)];
}

function App() {

    const [animals, setAnimals] = useState([]);

    const renderedAnimals = animals.map((animal, index) => {
        return <AnimalShow type={animal} key={index} />;
    });

    return (
        <div>
            <button onClick={() => setAnimals([...animals, getRandomAnimal()])}>Add Animal</button>
            <div> {renderedAnimals} </div>
        </div>
    );
}

export default App;