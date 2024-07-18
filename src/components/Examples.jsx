import { useState } from 'react';
import TabButton from './TabButton.jsx';
import { EXAMPLES } from '../data.js';
import Section from './Section.jsx';
import Tabs from './Tabs.jsx';

export default function Examples() {

    const [selectedTopic, setSelectedTopic] = useState();

    function handleClick(selectedButton) {
        // selectedButton => 'components', 'jsx', 'props', 'state'
        setSelectedTopic(selectedButton);
        console.log(selectedTopic);
        // Here selectedTopic will have previous State value and not updated one. The reason
        // behind is when we call setSelectedTopic function, React schedule this function execution , and then call
        //  App() componrnt func, so till that the line 10 gets executed which have previus state value.
        // So, once  App() executes / renders again we got the updates state and we can see it on the UI screen.

    }

    let tabContent = <p>please select the topic</p>;
    if (selectedTopic) {
        tabContent = (
            <div id='tab-content'>
                <h3>{EXAMPLES[selectedTopic].title}</h3>
                <p>{EXAMPLES[selectedTopic].description}</p>
                <pre>
                    <code>{EXAMPLES[selectedTopic].code}</code>
                </pre>
            </div>
        );
    }
    return (
        <Section title="Examples" id="examples">
            <Tabs 
                buttons={
                    <>
                        <TabButton isSelected={selectedTopic == 'components' ? true : false} onClick={() => handleClick('components')}>Components</TabButton>
                        <TabButton isSelected={selectedTopic == 'jsx' ? true : false} onClick={() => handleClick('jsx')}>JSX</TabButton>
                        <TabButton isSelected={selectedTopic == 'props' ? true : false} onClick={() => handleClick('props')}>Props</TabButton>
                        <TabButton isSelected={selectedTopic == 'state' ? true : false} onClick={() => handleClick('state')}>State</TabButton>
                    </>
                }>
                {tabContent}
            </Tabs>
        </Section>
    )
}