import { CopyBlock, sunburst } from 'react-code-blocks'

export const Bash = ({ text, showLineNumbers }) =>
  <div className='Code-Block' >
    <div className='bash'>
      <CopyBlock 
          text={text}
          language='bash'
          showLineNumbers={showLineNumbers}
          theme={sunburst}
          codeBlock
      />
    </div>
  </div>

export const CodeSpan = ({ text }) =>
  <code className='code-span'>{text}</code>

