import { useState } from 'react'
import { CopySVG, CheckmarkSVG } from '../../assets/svg'

export const CodeSpan = ({ text }) =>
  <code className='code-span'>{text}</code>

export const CodeBlock = ({ code }) => {
  const [hasBeenClicked, setHasBeenClicked] = useState(false)
  const copyToClipboard = () => {
    setHasBeenClicked(true)
    navigator.clipboard.writeText(code)

    setTimeout(() => {
      setHasBeenClicked(false)
    }, 1500)
  }

  return (
    <div className='Code-Block-Container'>
      <div className='code-block'>
        <code>
          {code}
        </code>
      </div>
      <button onClick={copyToClipboard}>{hasBeenClicked ? <CheckmarkSVG /> : <CopySVG />}</button>
    </div>
  )
}
