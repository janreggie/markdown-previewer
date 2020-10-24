import React from 'react'
import Interweave from 'interweave'
/**
 * defaultContent is the default content used to let the viewer know how to use the aplication.
 */
export const defaultContent = `# Header1

## Header2

Emphasis with *asterisks* or _underscores_.  
Strong emphasis with **asterisks** or __underscores__.  
Combined emphasis with **asterisks and _underscores_**.  
Strikethrough uses ~~one~~ *two* tildes!  
You can insert code \`in text\` or using a code block:

\`\`\`go
package main

import (
	"fmt"
)

func main() {
	fmt.Println("Hello, playground")
}
\`\`\`

> This is a very famous quote.
>
> - Gandhi

1. First ordered list item
2. Another item
  * Unordered sub-list. 
1. Actual numbers don't matter, just that it's a number
  1. Ordered sub-list
4. And another item.
  You can have properly indented paragraphs within list items.
  Notice the blank line above, and the leading spaces (at least one, but we'll use three here to also align the raw Markdown).

* Unordered list can use asterisks
- Or minuses
+ Or pluses

[I'm an inline-style link](https://www.google.com).
[I'm an inline-style link with title](https://www.google.com "Google's Homepage").

URLs and URLs in angle brackets will automatically get turned into links. 
http://www.example.com or <http://www.example.com> and sometimes 
example.com (but not on Github, for example).

You can also insert images on Markdown. This is me!   
![github: janreggie](https://github.com/janreggie.png)
`

/**
 * Markdown represents the entire functional part of the application.
 * It contains an Editor and a Preview element.
 * It also stores the state which is a string representing user input.
 */
class Markdown extends React.Component<{}, { markdown: string }> {
  state = { markdown: String(defaultContent) }

  render(): JSX.Element {
    let editorProps = {
      markdown: this.state.markdown,
      changer: (event: React.ChangeEvent<HTMLTextAreaElement>) => { this.setState({ markdown: event.target.value }) }
    }

    return (
      <div className="container" id="container">
        <div className="row">
          <Editor {...editorProps} />
          <Preview {...this.state} />
        </div>
      </div>
    )
  }
}

/**
 * Editor is the input. Takes in props markdown (from parent) and changer, which changes parent's state.
 */
class Editor extends React.Component<{ markdown: string, changer: (event: React.ChangeEvent<HTMLTextAreaElement>) => void }> {
  render(): JSX.Element {
    return (
      <textarea
        className="form-control col-lg"
        id="editor"
        value={this.props.markdown}
        onChange={this.props.changer} />
    )
  }
}

/**
 * Preview is the output.
 */
class Preview extends React.Component<{ markdown: string }> {
  marked: any

  constructor(props: { markdown: string }) {
    super(props)
    this.marked = require('marked')
    this.marked.setOptions({
      breaks: true,
      smartypants: true,
    })
  }

  render(): JSX.Element {
    return (
      <div id="preview" className="col-lg">
        <Interweave content={this.marked(this.props.markdown)} noWrap />
      </div>
    )
  }
}

export default Markdown
