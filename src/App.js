import React from 'react';

class App extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      zbir: [],
      sabirnikPrvi: '',
      sabirnikDrugi: '',
      artimetika: ''
    }

    this.clearer = this.clearer.bind(this);
    this.one = this.one.bind(this);
    this.add = this.add.bind(this);
    this.equals = this.equals.bind(this);
  }
  
  clearer(a, e=0){
    this.setState( { zbir: e } )
  }

  one(){
    let accumulator = this.state.zbir;
    let arrayS = Array.from(accumulator);
    arrayS.push(1);
    this.setState( { zbir: arrayS } );  
  }

  add(){
    let check = Array.from(this.state.zbir);
    let tester = check.filter(element => element === "+");
    console.log(tester);
    if(tester.length < 1){
      check.push("+");
      this.setState( { zbir: check } )
    }
  }

  equals(){
    let result = this.state.zbir;
    let corona = result.toString().split('+');
    console.log(corona);
    
  }

  componentDidMount() {
    document.getElementById("clear").addEventListener('click', this.clearer );
    document.getElementById("one").addEventListener('click', this.one);
    document.getElementById("add").addEventListener('click', this.add);
    document.getElementById("equals").addEventListener('click', this.equals);
  };
  
  

    render(){
      return(
        <div id="calculator">
          <div id="clear" className="buttons">AC</div>
          <div id="display">{this.state.zbir}</div>
          <div id="one" className="buttons">1</div>
          <div id="two" className="buttons">2</div>
          <div id="three" className="buttons">3</div>
          <div id="add" className="buttons">+</div>
          <div id="four" className="buttons">4</div>
          <div id="five" className="buttons">5</div>
          <div id="six" className="buttons">6</div>
          <div id="subtract" className="buttons">-</div>
          <div id="seven" className="buttons">7</div>
          <div id="eight" className="buttons">8</div>
          <div id="nine" className="buttons">9</div>
          <div id="divide" className="buttons">/</div>
          <div id="zero" className="buttons">0</div>
          <div id="multiply" className="buttons">*</div>
          <div id="decimal" className="buttons">.</div>
          <div id="equals" className="buttons">=</div>
        </div>
      )
    }
}

export default App;
