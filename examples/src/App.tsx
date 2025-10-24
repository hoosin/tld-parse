import { useState } from 'react'
import tldParse, { ExtractResult } from 'tld-parse'
import './App.css'

function App() {
  const [input, setInput] = useState('https://www.forums.bbc.co.uk')
  const [result, setResult] = useState<ExtractResult | null | (ExtractResult | null)[]>(null)

  const handleExtract = () => {
    // Example of handling both single and array inputs
    const isArray = input.includes(',');
    const data = isArray ? input.split(',').map(s => s.trim()) : input;
    const extracted = tldParse(data as any); // Use 'as any' to satisfy TypeScript with dual-purpose input
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
