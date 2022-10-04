import { useState } from "react"
import { Textarea } from '@chakra-ui/react'
import ReactMarkdown from "react-markdown"

function App() {
  const [markdown, setMarkdown] = useState<string>('')

  return (
    <div className='flex gap-2'>
      <div className="w-2/5">
        <Textarea value={markdown} onChange={(e) => setMarkdown(e.target.value)} />
      </div>
      <div className="w-2/5">
        <ReactMarkdown>
          {markdown}
        </ReactMarkdown>
      </div>
    </div>
  )
}

export default App
