// export default function TabButton(props) {
//     return  <li><button>{props.children}</button></li>;
// }

// we can also use destructuring
export default function TabButton({ children, onSelect, isSelected }) {
    console.log('TabButton component Renders/Executes');
    return  <li><button className={isSelected ? 'active' : ''} onClick={ onSelect }>{ children }</button></li>;
}