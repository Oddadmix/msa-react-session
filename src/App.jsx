import { useState } from 'react'
import msaLogo from '/MSAUniversity-Official-Logo.png';
import kandLogo from '/kand-logo.png'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://kand.ca" target="_blank">
          <img src={kandLogo} className="logo" alt="KAND logo" />
        </a>
        <a href="https://www.msa.edu.eg/msauniversity" target="_blank">
          <img src={msaLogo} className="logo" alt="MSA logo" />
        </a>
      </div>
      <h1>KAND + MSA</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
