import './App.css'
import { useState } from 'react'

function App() {
  const [number, setNumber] = useState(0)
  const [result, setResult] = useState(0)
  const [operation, setOperation] = useState('')
  const [isDecimal, setIsDecimal] = useState(false) // New state to handle decimal

  // Function to handle button clicks
  const handleDisplay = (event) => {
    const value = event.target.value

    switch (value) {
      case 'AC':
        setNumber(0)
        setResult(0)
        setOperation('')
        setIsDecimal(false)
        break
      case '+/-':
        setNumber(number * -1)
        break
      case '%':
        setNumber(number / 100)
        break
      case '.':
        if (!isDecimal) {
          setNumber(number + '.')
          setIsDecimal(true)
        }
        break
      case '+':
      case '-':
      case 'X':
      case '÷':
        setOperation(value)
        setResult(number)
        setNumber(0)
        setIsDecimal(false)
        break
      case '=':
        let calculationResult
        switch (operation) {
          case '+':
            calculationResult = result + number
            break
          case '-':
            calculationResult = result - number
            break
          case 'X':
            calculationResult = result * number
            break
          case '÷':
            calculationResult = result / number
            break
          default:
            calculationResult = number
        }
        setNumber(calculationResult)
        setResult(calculationResult)
        setOperation('')
        setIsDecimal(false)
        break
      default:
        const numberValue = parseFloat(value)
        const updatedNumber =
          number === 0 ? numberValue : parseFloat(`${number}${value}`)
        setNumber(updatedNumber)
        setIsDecimal(false) // Reset decimal flag on new input
    }
  }

  return (
    <>
      <div className="screen">{number}</div>
      <div className="grid-container">
        <button className="grid-item" value="AC" onClick={handleDisplay}>
          AC
        </button>
        <button className="grid-item" value="+/-" onClick={handleDisplay}>
          +/-
        </button>
        <button className="grid-item" value="%" onClick={handleDisplay}>
          %
        </button>
        <button className="grid-item" value="÷" onClick={handleDisplay}>
          ÷
        </button>
        <button className="grid-item" value={7} onClick={handleDisplay}>
          7
        </button>
        <button className="grid-item" value={8} onClick={handleDisplay}>
          8
        </button>
        <button className="grid-item" value={9} onClick={handleDisplay}>
          9
        </button>
        <button className="grid-item" value="X" onClick={handleDisplay}>
          X
        </button>
        <button className="grid-item" value={4} onClick={handleDisplay}>
          4
        </button>
        <button className="grid-item" value={5} onClick={handleDisplay}>
          5
        </button>
        <button className="grid-item" value={6} onClick={handleDisplay}>
          6
        </button>
        <button className="grid-item" value="-" onClick={handleDisplay}>
          -
        </button>
        <button className="grid-item" value={1} onClick={handleDisplay}>
          1
        </button>
        <button className="grid-item" value={2} onClick={handleDisplay}>
          2
        </button>
        <button className="grid-item" value={3} onClick={handleDisplay}>
          3
        </button>
        <button className="grid-item" value="+" onClick={handleDisplay}>
          +
        </button>
        <button
          className="grid-item grid-double-width"
          value={0}
          onClick={handleDisplay}
        >
          0
        </button>
        <button className="grid-item" value="." onClick={handleDisplay}>
          .
        </button>
        <button className="grid-item" value="=" onClick={handleDisplay}>
          =
        </button>
      </div>
    </>
  )
}

export default App
