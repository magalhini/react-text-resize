import React from 'react';
import ReactDOM from 'react-dom';
import TextFit from '../src/';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      sentence: 'Smaller texts gets the biggest size. The more words you add... the more it will reduce the size of the text based on the maximum cap you set. But you can set a minimum size for a maximum amount of characters, so the text will stop resizing itself once it caps to your needs.',
      typed: '',
      input: 'Works on contenteditable. Type here!'
    };

    this.type = this.type.bind(this);
  }

  type(string, n) {
    if (n <= string.length) {
      setTimeout(() => {
        this.setState({
          typed: string.substr(0, n)
        });
        this.type(string, n+1);
      }, Math.floor(Math.random() * 100) - 50);
    }
  }

  componentDidMount() {
    this.type(this.state.sentence, 0);
    this.input.focus();
  }

  restart() {
    this.setState({
      typed: '',
    }, this.type.bind(null, this.state.sentence, 0))
  }

  render() {
    return (
      <div>
        <span className="description">
          Control the size of your paragraphs based on its length. Shorter lines appear larger, longer lines get smaller and smaller until your desired minimum size.
        </span>
        <h2>Examples:</h2>
        <p className="example-desc"><code>Adjust size as you type, set at: max="40" min="16" capAt="80" characters </code></p>
        <TextFit className="style textTextFit--editable" min="16" max="40" capAt="80">
          <div ref={(input) => this.input = input} onKeyDown={(e) => this.setState({ input: this.input.value })} contentEditable="true">{this.state.input}</div>
        </TextFit>
        <p className="example-desc"><code>A dynamic example, set at: max="40" min="26" capAt="180"</code></p>
        <TextFit className="style" min="26" max="40" capAt="180">
          <p>{this.state.typed}</p>
          <button onClick={this.restart.bind(this)}>Restart</button>
        </TextFit>
        <p className="example-desc"><code>Example set at : max="46" min="16" capAt="150"</code></p>
        <TextFit className="style quote" min="16" max="46" capAt="150">
          <p>“Wise quotes are shorter”</p>
        </TextFit>
        <p className="example-desc"><code>Example set at : max="46" min="16" capAt="150"</code></p>
        <TextFit className="style quote" min="16" max="46" capAt="150">
          <p>But they can also be longer... this component allows for automatic fine control. You set where it should cap at.</p>
        </TextFit>
      </div>
    );
  }
}