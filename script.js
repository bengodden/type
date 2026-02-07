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
\n
<Right Alt> + <Shift> + e = ê \n
<Right Alt> + <Shift> + i = î \n
<Right Alt> + <Shift> + o = ô \n
<Right Alt> + <Shift> + a = â \n`
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
\n
ê = <Right Alt> + <Shift> + e\n
î = <Right Alt> + <Shift> + i\n
ô = <Right Alt> + <Shift> + o\n
â = <Right Alt> + <Shift> + a\n`