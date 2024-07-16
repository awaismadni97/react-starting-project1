import { useState } from 'react';

import { CORE_CONCEPTS, EXAMPLES } from './data.js';
import Header from './components/Header/Header.jsx';
import CoreConcepts from './components/CoreConcepts.jsx';
import TabButton from './components/TabButton.jsx';

function App() {
  const [selectedTopic, setSelectedTopic] = useState();

  function handleClick(selectedButton) {
    // selectedButton => 'components', 'jsx', 'props', 'state'
    setSelectedTopic(selectedButton);
    console.log(selectedTopic);   // Here selectedTopic will have previous State value and not updated one. The reason
    // behind is when we call setSelectedTopic function, React schedule this function execution , and then call
    //  App() componrnt func, so till that the line 14 gets executed which have previus state value.
    // So, once  App() executes / renders again we got the updates state and we can see it on the UI screen.
  }

  console.log('App component Renders/Executes');

  // let tabContent = <p>please select the topic</p>;
  // if (selectedTopic) {
  //   tabContent = <div id='tab-content'>
  //     <h3>{EXAMPLES[selectedTopic].title}</h3>
  //     <p>{EXAMPLES[selectedTopic].description}</p>
  //     <pre>
  //       <code>{EXAMPLES[selectedTopic].code}</code>
  //     </pre>
  //   </div>
  // }

  return (
    <div>
      <Header />
      <main>
        <section id='core-concepts'>
          <h2>Core Concepts</h2>

          <ul>
            {CORE_CONCEPTS.map((coreConceptItem) => (
              <CoreConcepts key={coreConceptItem.title} {...coreConceptItem} />
            ))}
          </ul>
        </section>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButton isSelected={selectedTopic == 'components' ? true : false} onSelect={() => handleClick('components')}>Components</TabButton>
            <TabButton isSelected={selectedTopic == 'jsx' ? true : false} onSelect={() => handleClick('jsx')}>JSX</TabButton>
            <TabButton isSelected={selectedTopic == 'props' ? true : false} onSelect={() => handleClick('props')}>Props</TabButton>
            <TabButton isSelected={selectedTopic == 'state' ? true : false} onSelect={() => handleClick('state')}>State</TabButton>
          </menu>
          {!selectedTopic && <p>please select the topic</p>}

          {selectedTopic &&
            (
              <div id='tab-content'>
                <h3>{EXAMPLES[selectedTopic].title}</h3>
                <p>{EXAMPLES[selectedTopic].description}</p>
                <pre>
                  <code>{EXAMPLES[selectedTopic].code}</code>
                </pre>
              </div>
            )
          }
        </section>
      </main>
    </div>
  );
}

export default App;
