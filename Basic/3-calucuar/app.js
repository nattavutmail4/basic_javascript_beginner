const displayElement = document.getElementById('calculator-display')
// displayElement.value = '100'

const validator = (input)=>{
    const forbiddens = ['+','-','*','/','.']
    const displayText = displayElement.value
    const symbolWithSymbol = 
    forbiddens.includes(input) 
    && forbiddens.includes(displayText[displayText.length -1])

    const symbolWithoutnumber =  forbiddens.includes(input) 
    && displayText === '' && input !== '-'

  return ( ! symbolWithSymbol || symbolWithoutnumber)   
}
const addText = (text) =>{
    if(validator(text)){
        const displayTet = displayElement.value
        const newText = displayTet + text
        displayElement.value = newText
        setDisplay(newText)
    }
 
}

const setDisplay = (text) =>{
     displayElement.value = text
}

const clerDisplay = () =>{
    setDisplay('')
}

const deleteLastCharacter = ()=>{
    const displayText = displayElement.value
    const newText = displayText.slice(0,displayText.length - 1)
    setDisplay(newText)
}

const calculateAnumber = ()=>{
    const displayText = displayElement.value
    if(displayText){
        const newText = eval(displayText)
        setDisplay(newText)
    }
    
}