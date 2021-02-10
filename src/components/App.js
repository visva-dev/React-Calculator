import React from 'react';
import '../app.css';
import Display from './Display';
import ButtonPanel from './ButtonPanel';
import Calculate from '../logic/Calculate';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      total: null,
      next: null,
      operation: null,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(buttonName) {
    const { total, next, operation } = this.state;
    const data = { total, next, operation };

    const result = Calculate(data, buttonName);

    this.setState({
      total: result.total,
      next: result.next,
      operation: result.operation,
    });
  }

  render() {
    const { total, next, operation } = this.state;
    let result;
    if (operation === null) {
      result = total;
    } else if (operation === '+/-') {
      if (next === null || next === '0') {
        result = total;
      } else {
        result = next;
      }
    } else {
      result = next === null ? operation : next;
    }

    return (
      <div className="app">
        <Display result={result} />
        <ButtonPanel clickHandler={this.handleClick} />
      </div>
    );
  }
}

export default App;
