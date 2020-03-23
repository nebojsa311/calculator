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
    this.two = this.two.bind(this);
    this.three = this.three.bind(this);
    this.four = this.four.bind(this);
    this.five = this.five.bind(this);
    this.six = this.six.bind(this);
    this.seven = this.seven.bind(this);
    this.eight = this.eight.bind(this);
    this.nine = this.nine.bind(this);
    this.zero = this.zero.bind(this);
    this.add = this.add.bind(this);
    this.subtract = this.subtract.bind(this);
    this.equals = this.equals.bind(this);
    this.multiply = this.multiply.bind(this);
    this.divide = this.divide.bind(this);
  }

// Reset
  clearer(a, e=0){
    this.setState( { zbir: e } )
  }

// Brojevi 0-9

  one(){
    let accumulator = this.state.zbir;
    let onScreen = Array.from(accumulator);
    onScreen.push(1);
    this.setState( { zbir: onScreen } );
     
  }

  two(){
    let accumulator = this.state.zbir;
    let onScreen = Array.from(accumulator);
    onScreen.push(2);
    this.setState( { zbir: onScreen } );
     
  }

  three(){
    let accumulator = this.state.zbir;
    let onScreen = Array.from(accumulator);
    onScreen.push(3);
    this.setState( { zbir: onScreen } );
     
  }

  four(){
    let accumulator = this.state.zbir;
    let onScreen = Array.from(accumulator);
    onScreen.push(4);
    this.setState( { zbir: onScreen } );
     
  }

  five(){
    let accumulator = this.state.zbir;
    let onScreen = Array.from(accumulator);
    onScreen.push(5);
    this.setState( { zbir: onScreen } );
     
  }

  six(){
    let accumulator = this.state.zbir;
    let onScreen = Array.from(accumulator);
    onScreen.push(6);
    this.setState( { zbir: onScreen } );
     
  }

  seven(){
    let accumulator = this.state.zbir;
    let onScreen = Array.from(accumulator);
    onScreen.push(7);
    this.setState( { zbir: onScreen } );
     
  }

  eight(){
    let accumulator = this.state.zbir;
    let onScreen = Array.from(accumulator);
    onScreen.push(8);
    this.setState( { zbir: onScreen } );
     
  }

  nine(){
    let accumulator = this.state.zbir;
    let onScreen = Array.from(accumulator);
    onScreen.push(9);
    this.setState( { zbir: onScreen } );
     
  }

  zero(){
    let accumulator = this.state.zbir;
    let onScreen = Array.from(accumulator);
    if(onScreen[0] === 0){
      return false;
    }else {
    onScreen.push(0);
    this.setState( { zbir: onScreen } );
    }
  }

  // Znak jednako
  equals(){   
    let cinioci = this.state.zbir.toString().split(this.state.artimetika);
    let prvicinilac = cinioci[0].replace(/,/g, "");
    this.setState( { sabirnikPrvi: Number(prvicinilac) } )
    let drugicinilac = cinioci[1] === undefined  ? false : cinioci[1].replace(/,/g, "");;
    this.setState( { sabirnikDrugi: Number(drugicinilac) } );
    let rezultati = eval(this.state.sabirnikPrvi + this.state.artimetika + this.state.sabirnikDrugi);
    this.setState( { zbir: rezultati, sabirnikPrvi: rezultati } );
   console.log(this.state.sabirnikPrvi);
    
  }
// Sabiranje, oduzimanje, množenje i djeljenje
  add(){
    let onScreen = Array.from(this.state.zbir);
    console.log(onScreen);
    if(onScreen.every(element => typeof element === "number") && onScreen.length > 0){
      onScreen.push("+");
      this.setState( { zbir: onScreen, artimetika: "+" } )
    };
  }

  subtract(){
    let onScreen = Array.from(this.state.zbir);
    if(onScreen.every(element => typeof element === "number") && onScreen.length > 0){
      onScreen.push("-");
      this.setState( { zbir: onScreen, artimetika: "-" } )
    };
  }

  multiply(){
    let onScreen = Array.from(this.state.zbir);
    if(onScreen.every(element => typeof element === "number") && onScreen.length > 0){
      onScreen.push("*");
      this.setState( { zbir: onScreen, artimetika: "*" } )
    };
  }

  divide(){
    let onScreen = Array.from(this.state.zbir);
    if(onScreen.every(element => typeof element === "number") && onScreen.length > 0){
      onScreen.push("/");
      this.setState( { zbir: onScreen, artimetika: "/" } )
    };
  }

  componentDidMount() {
    document.getElementById("clear").addEventListener('click', this.clearer );
    document.getElementById("one").addEventListener('click', this.one);
    document.getElementById("two").addEventListener('click', this.two);
    document.getElementById("three").addEventListener('click', this.three);
    document.getElementById("four").addEventListener('click', this.four);
    document.getElementById("five").addEventListener('click', this.five);
    document.getElementById("six").addEventListener('click', this.six);
    document.getElementById("seven").addEventListener('click', this.seven);
    document.getElementById("eight").addEventListener('click', this.eight);
    document.getElementById("nine").addEventListener('click', this.nine);
    document.getElementById("zero").addEventListener('click', this.zero);
    document.getElementById("add").addEventListener('click', this.add);
    document.getElementById("equals").addEventListener('click', this.equals);
    document.getElementById("subtract").addEventListener('click', this.subtract);
    document.getElementById("multiply").addEventListener('click', this.multiply);
    document.getElementById("divide").addEventListener('click', this.divide);
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
