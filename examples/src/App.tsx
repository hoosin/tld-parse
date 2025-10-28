import { useState } from 'react'
import tldParse, { ExtractResult } from 'tld-parse'
import './App.css'

// Import the raw text content of the .dat file using Vite's `?raw` suffix
import tldData from '../../data/test.dat?raw';

// Register the TLD list synchronously on module load
tldParse.register(tldData);

function App() {
  const [input, setInput] = useState('https://www.forums.bbc.co.uk')
  const [result, setResult] = useState<ExtractResult | null | (ExtractResult | null)[]>(null)

  const handleExtract = () => {
    const isArray = input.includes(',');
    const data = isArray ? input.split(',').map(s => s.trim()) : input;
    const extracted = tldParse(data as string);
    setResult(extracted)
  }

  return (
    <div className="App">
      <h1>tld-parse Example</h1>
      <div className="card">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Enter a URL or comma-separated URLs"
        />
        <button onClick={handleExtract}>
          Extract
        </button>
      </div>

      {result && (
        <div className="result-card">
          <h2>Extraction Result:</h2>
          <pre>{JSON.stringify(result, null, 2)}</pre>
        </div>
      )}
    </div>
  )
}

export default App
