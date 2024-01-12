import { useState } from 'react'
import './App.css'
import ReactMarkdown from "react-markdown"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFreeCodeCamp } from "@fortawesome/free-brands-svg-icons"
import { faMaximize, faMinimize } from "@fortawesome/free-solid-svg-icons"

const defaultMarkdown = `
# Welcome to my React Markdown Previewer!

## This is a sub-heading...
### And here's some other cool stuff:

Heres some code, \`<div></div>\`, between 2 backticks.

\`\`\`
// this is multi-line code:

function anotherExample(firstLine, lastLine) {
  if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
    return multiLineCode;
  }
}
\`\`\`

You can also make text **bold**... whoa!
Or _italic_.
Or... **_both!_**

There's also [links](https://www.freecodecamp.com), and
> Block Quotes!

![React Logo w/ Text](https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png)

- And of course there are lists.
  - Some are bulleted.
      - With different indentation levels.
        - That look like this.
`;



function App() {
  const [markdownText, setMarkdownText] = useState<string>(defaultMarkdown)
  const [isEditorMaximized, setIsEditorMaximized] = useState<boolean>(false);
  const [isPreviewMaximized, setIsPreviewMaximized] = useState<boolean>(false);

  const handleEditorIconClick = () => {
    setIsEditorMaximized((prevIsEditorMaximized) => !prevIsEditorMaximized);
    setIsPreviewMaximized(false);
  }

  const handlePreviewIconClick = () => {
    setIsPreviewMaximized((prevIsPreviewMaximized) => !prevIsPreviewMaximized);
    setIsEditorMaximized(false);
  }

  return (
  <>
    <div>
      <h1 style={{textAlign:'center', color:'black'}}>Markdown Previewer</h1>
      <div className='boxes-container'>
        <div className={`${isEditorMaximized ? 'editor' : 'editor-wrap maximized'}`}>
          <div className='toolbar'>
            <div>
            <FontAwesomeIcon icon={faFreeCodeCamp} id='fcc-icon'/>
            </div>
            <span>Editor</span>
            <div onClick={handleEditorIconClick} id='editor-max-min-icon'>
            {isEditorMaximized ? <FontAwesomeIcon icon={faMinimize} /> : <FontAwesomeIcon icon={faMaximize} />}
            </div>
          </div>
          <textarea 
          name='editor' 
          id='editor'
          value={markdownText} 
          onChange={(e) => setMarkdownText(e.target.value)}>
          </textarea>
        </div>
        <div className={`preview-wrap ${isPreviewMaximized ? 'maximized' : ''}`}>
          <div className='toolbar' style={{marginTop: '20px'}}>
            <div>
              <FontAwesomeIcon icon={faFreeCodeCamp} id='fcc-icon'/>
            </div>
            <span>Previewer</span>
            <div onClick={handlePreviewIconClick} id='preview-max-min-icon'>
            {isPreviewMaximized ? <FontAwesomeIcon icon={faMinimize} /> : <FontAwesomeIcon icon={faMaximize} />}
            </div>
          </div>
          <div id='preview'>
            <ReactMarkdown>{markdownText}</ReactMarkdown>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default App
