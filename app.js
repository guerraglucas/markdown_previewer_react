const initialText = `# Welcome to my React Markdown Previewer!

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
Or... wait for it... **_both!_**
And feel free to go crazy ~~crossing stuff out~~.

There's also [links](https://www.freecodecamp.com), and
> Block Quotes!

And if you want to get really crazy, even tables:

Wild Header | Crazy Header | Another Header?
------------ | ------------- | -------------
Your content can | be here, and it | can be here....
And here. | Okay. | I think we get it.

- And of course there are lists.
  - Some are bulleted.
     - With different indentation levels.
        - That look like this.


1. And there are numbererd lists too.
1. Use just 1s if you want!
1. And last but not least, let's not forget embedded images:

![Whoa!](https://media3.giphy.com/media/tlGD7PDy1w8fK/giphy.gif?cid=ecf05e4794909cc70ce1359f6e9f06c1193624a004d4f0b7&rid=giphy.gif)
`;

// creating EDITOR component
class MarkdownEditor extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: initialText,
    };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(e) {
    this.setState({
      input: e.target.value,
    });
  }

  render() {
    return (
      <div id="wrapper">
        <header>React Markdown Previewer</header>
        <a href="https://github.com/guerraglucas" target="_blank">
          by guerraglucas <i class="fab fa-github-square"></i>
        </a>
        <div id="container-titles">
          <p>
            <i class="fas fa-hashtag"></i> Editor
          </p>
          <p>
            <i class="fas fa-hashtag"></i> Preview
          </p>
        </div>
        <div id="container">
          <textarea
            rows="50"
            cols="75"
            onChange={this.handleChange}
            value={this.state.input}
            id="editor"
          ></textarea>
          <Display input={this.state.input} />
        </div>
      </div>
    );
  }
}

// creating DISPLAY Component
class Display extends React.Component {
  constructor(props) {
    super(props);
    this.translateToMarkdown = this.translateToMarkdown.bind(this);
  }

  translateToMarkdown() {
    marked.setOptions({
      breaks: true,
    });
    let translated = marked(this.props.input);
    return { __html: translated };
  }
  render() {
    return (
      <div
        id="preview"
        dangerouslySetInnerHTML={this.translateToMarkdown()}
      ></div>
    );
  }
}

ReactDOM.render(<MarkdownEditor />, document.getElementById("app"));
