document.getElementById("document-footer").innerText = "type.bengodden.com"

const menuOptions = ["Font Size"]


const bodyTextArea = document.getElementById("document-text-area")
bodyTextArea.placeholder = 
`masinahikē ōta! \n 
<Right Alt> + e = ē \n 
<Right Alt> + i = ī \n
<Right Alt> + o = ō \n
<Right Alt> + a = ā \n
\n
<Right Alt> + y = ý \n
<Right Alt> + n = ń \n
\n`
bodyTextArea.style.fontSize = "12pt";
const mainMenu = document.getElementById("main-menu-container")

const enlarge = document.getElementById('btn-increase-font')
enlarge.addEventListener('click', ()=>{
    const element = document.getElementById("document-text-area")
    let style = window.getComputedStyle(element).getPropertyValue('font-size');
    let currentSize = parseFloat(style)
     if (currentSize > 4) { // Set a minimum size, e.g., 4px
        element.style.fontSize = (currentSize+2) + 'px'; // Decrease by 2px
    }
})
const decrease = document.getElementById('btn-decrease-font')
decrease.addEventListener('click', ()=>{
    const element = document.getElementById("document-text-area")
    let style = window.getComputedStyle(element).getPropertyValue('font-size');
    let currentSize = parseFloat(style)
     if (currentSize > 4) { // Set a minimum size, e.g., 4px
        element.style.fontSize = (currentSize - 2) + 'px'; // Decrease by 2px
    }
})
const hotkeys = document.getElementById('hotkeys')
hotkeys.innerText=
`ē = <Right Alt> + e\n 
ī = <Right Alt> + i\n
ō = <Right Alt> + o\n
ā = <Right Alt> + a\n
\n
ý = <Right Alt> + y\n
ń = <Right Alt> + n\n
\n`

window.addEventListener('keydown', (event) => {
    const container = document.getElementById("document-text-area")
    console.log("event is",event)
            let modifiedEntry = ''
            if (event.getModifierState('AltGraph')){
                const cursorStart = event.target.selectionStart
                const cursorEnd = event.target.selectionEnd
                const originalChar = event.target.value
                    switch (event.key){
                        case "e":
                            event.target.value = originalChar.slice(originalChar, cursorStart) + 'ē' + originalChar.slice(cursorEnd)
                            event.target.selectionStart = event.target.selectionEnd = cursorStart +1;
                            event.preventDefault();
                            modifiedEntry = originalChar.slice(originalChar, cursorStart) + 'ē' + originalChar.slice(cursorEnd)
                        break;
                        case "i":
                            event.target.value = originalChar.slice(originalChar, cursorStart) + 'ī' + originalChar.slice(cursorEnd) 
                            event.target.selectionStart = event.target.selectionEnd = cursorStart +1;
                            event.preventDefault();
                            modifiedEntry = originalChar.slice(originalChar, cursorStart) + 'ī' + originalChar.slice(cursorEnd)
                        break;
                        case "a":
                            event.target.value = originalChar.slice(originalChar, cursorStart) + 'ā' + originalChar.slice(cursorEnd) 
                            event.target.selectionStart = event.target.selectionEnd = cursorStart +1;
                            event.preventDefault();
                            modifiedEntry = originalChar.slice(originalChar, cursorStart) + 'ā' + originalChar.slice(cursorEnd)
                        break;
                        case "o":
                            event.target.value = originalChar.slice(originalChar, cursorStart) + 'ō' + originalChar.slice(cursorEnd) 
                            event.target.selectionStart = event.target.selectionEnd = cursorStart +1;
                            event.preventDefault();
                            modifiedEntry = originalChar.slice(originalChar, cursorStart) + 'ō' + originalChar.slice(cursorEnd)
                        break;
                        case "y":
                            event.target.value = originalChar.slice(originalChar, cursorStart) + 'ý' + originalChar.slice(cursorEnd) 
                            event.target.selectionStart = event.target.selectionEnd = cursorStart +1;
                            event.preventDefault();
                            modifiedEntry = originalChar.slice(originalChar, cursorStart) + 'ý' + originalChar.slice(cursorEnd)
                        break;
                        case "n":
                            event.target.value = originalChar.slice(originalChar, cursorStart) + 'ń' + originalChar.slice(cursorEnd) 
                            event.target.selectionStart = event.target.selectionEnd = cursorStart +1;
                            event.preventDefault();
                            modifiedEntry = originalChar.slice(originalChar, cursorStart) + 'ń' + originalChar.slice(cursorEnd)
                        break;
                        default:
                    }
                } else if (event.getModifierState('AltGraph') && event.shiftKey){
                    console.log("alt and shift pressed")
                    const cursorStart = event.target.selectionStart
                    const cursorEnd = event.target.selectionEnd
                    const originalChar = event.target.value
                    switch (event.key){
                        case "e":
                            event.target.value = originalChar.slice(originalChar, cursorStart) + 'ê' + originalChar.slice(cursorEnd)
                            event.target.selectionStart = event.target.selectionEnd = cursorStart +1;
                            event.preventDefault();
                            modifiedEntry = originalChar.slice(originalChar, cursorStart) + 'ê' + originalChar.slice(cursorEnd)
                        break;
                        case "i":
                            event.target.value = originalChar.slice(originalChar, cursorStart) + 'î' + originalChar.slice(cursorEnd) 
                            event.target.selectionStart = event.target.selectionEnd = cursorStart +1;
                            event.preventDefault();
                            modifiedEntry = originalChar.slice(originalChar, cursorStart) + 'î' + originalChar.slice(cursorEnd)
                        break;
                        case "a":
                            event.target.value = originalChar.slice(originalChar, cursorStart) + 'â' + originalChar.slice(cursorEnd) 
                            event.target.selectionStart = event.target.selectionEnd = cursorStart +1;
                            event.preventDefault();
                            modifiedEntry = originalChar.slice(originalChar, cursorStart) + 'â' + originalChar.slice(cursorEnd)
                        break;
                        case "o":
                            event.target.value = originalChar.slice(originalChar, cursorStart) + 'ô' + originalChar.slice(cursorEnd) 
                            event.target.selectionStart = event.target.selectionEnd = cursorStart +1;
                            event.preventDefault();
                            modifiedEntry = originalChar.slice(originalChar, cursorStart) + 'ô' + originalChar.slice(cursorEnd)
                        break;
                        case "y":
                            event.target.value = originalChar.slice(originalChar, cursorStart) + 'ý' + originalChar.slice(cursorEnd) 
                            event.target.selectionStart = event.target.selectionEnd = cursorStart +1;
                            event.preventDefault();
                            modifiedEntry = originalChar.slice(originalChar, cursorStart) + 'ý' + originalChar.slice(cursorEnd)
                        break;
                        case "n":
                            event.target.value = originalChar.slice(originalChar, cursorStart) + 'ń' + originalChar.slice(cursorEnd) 
                            event.target.selectionStart = event.target.selectionEnd = cursorStart +1;
                            event.preventDefault();
                            modifiedEntry = originalChar.slice(originalChar, cursorStart) + 'ń' + originalChar.slice(cursorEnd)
                        break;
                        default:
                    
                }
                
                if(document.getElementById(container) && modifiedEntry !==''){
                    document.getElementById(container).dispatchEvent(new Event('input'))
                }
            
    }

});