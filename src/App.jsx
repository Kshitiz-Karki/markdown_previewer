import React from "react"
import { marked } from 'marked'

function App() {
  // a heading element (H1 size), 
  //a sub heading element (H2 size), a link, 
  //inline code, a code block, a list item, a blockquote, 
  //an image, and bolded text.

  const [text, setText] = React.useState(`
  # H1
  ## H2

  [React](https://reactjs.org/)

  \`\`\`
  // this is multi-line code:

  function anotherExample(firstLine, lastLine) {
    if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
      return multiLineCode;
    }
  }
  \`\`\`

  \`code\`

  1. First item
  2. Second item
  3. Third item

  > blockquote

  **bold text**

  ![freeCodeCamp Logo](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg)

  `)
    
    function handleChange(event) {
      setText(event.target.value)
    }
  
  marked.setOptions(
    {
      breaks : true
    }
  )
  return (
    <div>
      <h1 className="text-center m-5">
        Markdown Previewer
      </h1>
      <div className="row">
        <div className="col-6"> 
          <h6 className="text-center">
            Enter your markdown
          </h6>
          <textarea className="form-control" id="editor" value={text} onChange={handleChange}/>
        </div>
        <div className="col-6">
          <h6 className="text-center">
            Preview
          </h6>
          <div className="preview rounded" id="preview"
            dangerouslySetInnerHTML={{
              __html : marked(text)
            }}/>
        </div>
      </div>
    </div>    
  )
}

export default App
