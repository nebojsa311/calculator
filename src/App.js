import React from 'react';

class App extends React.Component {
  constructor(props){
    super(props);
  }

    render(){
      return(
        <div id="calculator">
          <div id="clear" class="buttons">AC</div>
          <div id="display">0</div>
          <div id="one" class="buttons">1</div>
          <div id="two" class="buttons">2</div>
          <div id="three" class="buttons">3</div>
          <div id="add" class="buttons">+</div>
          <div id="four" class="buttons">4</div>
          <div id="five" class="buttons">5</div>
          <div id="six" class="buttons">6</div>
          <div id="subtract" class="buttons">-</div>
          <div id="seven" class="buttons">7</div>
          <div id="eight" class="buttons">8</div>
          <div id="nine" class="buttons">9</div>
          <div id="divide" class="buttons">/</div>
          <div id="zero" class="buttons">0</div>
          <div id="multiply" class="buttons">*</div>
          <div id="decimal" class="buttons">.</div>
          <div id="equals" class="buttons">=</div>
        </div>
      )
    }
}

export default App;
