// import componentImage from './assets/components.png';
import { useState } from "react";
import { CORE_CONCEPTS } from "./data.js";
import Header from "./components/Header.jsx";
import CoreConcept from "./components/CoreConcept.jsx";
import TabButton from './components/TabButton.jsx'
import { EXAMPLES } from './data.js'

function App() {
  const [selectedTopic, setSelectedTopic] = useState(null);

  function handleClick(buttonSelected) {
    setSelectedTopic(buttonSelected);
  }

  return (
    <div>
      <Header />
      <main>
        <section id='core-concepts'>
          <h2>Another healthy recipe</h2>
          {/* <ul>
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
          </ul> */}
        </section>
        <section id="examples">
          <h2>Best natural proteins</h2>
          <menu>
            <TabButton isSelected={selectedTopic === 'components'} clicksito={()=> handleClick('components')}>Components</TabButton>
            <TabButton isSelected={selectedTopic === 'jsx'} clicksito={()=> handleClick('jsx')}>JSX</TabButton>
            <TabButton isSelected={selectedTopic === 'props'} clicksito={()=> handleClick('props')}>Props</TabButton>
            <TabButton isSelected={selectedTopic === 'state'} clicksito={()=> handleClick('state')}>State</TabButton>
          </menu>
          {!selectedTopic ? <p>Please select a topic</p> : <div id="tab-content">
            <h3>{EXAMPLES[selectedTopic].title}</h3>
            <p>{EXAMPLES[selectedTopic].description}</p>
            <pre>
              <code>
                {EXAMPLES[selectedTopic].code}
              </code>
            </pre>
          </div>}
        </section>
      </main>
    </div>
  );
}

export default App;

//create random recipes of healthy foods, later I can add smothies random, custom healthy food recipes, where people can 
//choose the protein and complements, by choosing them or getting any element random. later add a calories per day count
// and on base with that, how many carbs, protein and fat consume per day. a macro calculator