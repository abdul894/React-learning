import { useState } from "react";

function getRandomAnimal() {
    const animals = ['cat', 'horse', 'gator', 'bord', 'cow', 'dog'];

    return animals[Math.floor(Math.random() * animals.length)];
}

function App() {

    const [animals, setAnimals] = useState([]);

    return (
        <div>
            <button onClick={() => setAnimals([...animals, getRandomAnimal()])}>Add Animal</button>
            <div> {animals} </div>
        </div>
    );
}

export default App;