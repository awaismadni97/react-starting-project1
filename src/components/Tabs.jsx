export default function Tabs({ children, buttons, buttonsContainer }) {
    const ButtonContainer = buttonsContainer;
    // The Custom Component started with uppercase and to store buttonsContainer in custom compponnet is
    // because otherwise react will buttonsContainer as a built is html elemnet which it is not. So we will 
    // have to save it custom HTML eleement and that would work.
    return <>
        <ButtonContainer>
            {buttons}
        </ButtonContainer>
        {children}
    </>
}