import React from 'react';
import './App.css';
import HTMLReactParser from 'html-react-parser';
import marked from 'marked';

class App extends React.Component {
	constructor(props) {
		super(props);
    this.state={
      input:'',
      output:'',
    };
    this.handleInput = this.handleInput.bind(this);
	}
  handleInput(e) {
    this.setState({
      input: e.target.value,
      output: marked((e.target.value)),
    });
  }
  render() {

    return (
      <div>
        <Input input={this.state.input} handleChange={this.handleInput} />
        <Output output={this.state.output} />
      </div>
    );
  }
};
class Input extends React.Component {

  render() {
	  return (
      <div id="input">
        <textarea value={this.props.input} onChange={this.props.handleChange} />
      </div>
    );
  }
};
class Output extends React.Component {

  render() {

    return (

        <div id='output'>
        { HTMLReactParser(this.props.output) }
      </div>

    );
  }
};


export default App;
