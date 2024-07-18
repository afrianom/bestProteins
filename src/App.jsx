// import componentImage from './assets/components.png';
import { useState } from "react";
import { CORE_CONCEPTS } from "./data.js";
import Header from "./components/Header.jsx";
import CoreConcept from "./components/CoreConcept.jsx";
import TabButton from './components/TabButton.jsx'

function App() {
  const [selectedTopic, setSelectedTopic] = useState('Please click a button');

  function handleClick(buttonSelected) {
    if(buttonSelected==='components' || buttonSelected==='props') {
      setSelectedTopic('alguna cosa')
    } else {
      setSelectedTopic('otra cosa')
    }
    console.log(buttonSelected);

  }

  console.log('App executing')

  return (
    <div>
      <Header />
      <main>
        <section id='core-concepts'>
          <h2>Core Concepts</h2>
          <ul>
            <CoreConcept title={CORE_CONCEPTS[0].title}
            description={CORE_CONCEPTS[0].description}
            image={CORE_CONCEPTS[0].image} />
            <CoreConcept title={CORE_CONCEPTS[1].title}
            description={CORE_CONCEPTS[1].description}
            image={CORE_CONCEPTS[1].image} />
            <CoreConcept title={CORE_CONCEPTS[2].title}
            description={CORE_CONCEPTS[2].description}
            image={CORE_CONCEPTS[2].image} />
            <CoreConcept title={CORE_CONCEPTS[3].title}
            description={CORE_CONCEPTS[3].description}
            image={CORE_CONCEPTS[3].image} />
          </ul>
        </section>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButton onClick={()=> handleClick('components')}>Components</TabButton>
            <TabButton onClick={()=> handleClick('jsx')}>JSX</TabButton>
            <TabButton onClick={()=> handleClick('props')}>Props</TabButton>
            <TabButton onClick={()=> handleClick('state')}>State</TabButton>
          </menu>
          {selectedTopic}
        </section>
      </main>
    </div>
  );
}

export default App;