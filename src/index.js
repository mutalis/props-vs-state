// https://kentcdodds.com/blog/props-vs-state

import React from 'react'
import ReactDOM from 'react-dom'

function AddWithInput({n1, initialN2 = 0}) {
  const [n2, setN2] = React.useState(initialN2)

  function handleInputChange(event) {
    const input = event.target
    const newN2 = Number(input.value)
    setN2(newN2)
  }
  return (
    <div>
      {n1}+ <input type="number" value={n2} onChange={handleInputChange} /> ={' '}
      {n1 + n2}
    </div>
  )
}

function GreetSomeone({greeting, subject}) {
  return (
    <div>
      {greeting} {subject}!
    </div>
  )
}

function App() {
  const [greeting, setGreeting] = React.useState('HELLO')

  function handleGreetingChange(event) {
    const input = event.target
    const newGreeting = input.value
    setGreeting(newGreeting)
  }

  return (
    <>
      <AddWithInput n1={23} initialN2={7} />
      <form>
        <div>
          <label htmlFor="greeting">Greeting: </label>
          <input
            id="greeting"
            onChange={handleGreetingChange}
            value={greeting}
          />
        </div>
        <div>
          <GreetSomeone greeting={greeting} subject="Nancy" />
        </div>
      </form>
    </>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
