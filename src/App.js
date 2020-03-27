import React from 'react';

class App extends React.Component {
  constructor(props){
    super(props);
// states
    this.state = {
      total: 0,
      firstElement: [],
      secondElement: [],
      artimeticSign: undefined,
    };
// Function binding
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
    this.decimal = this.decimal.bind(this);
  };

// Reset
  clearer(a, e=0){
    this.setState( { total: 0, firstElement: [], secondElement: [], artimeticSign: undefined } )
  };

// Numbers 0-9

  one(){
    //If there is no arthimetic sign displayed numbers entered are assigned to first element
    if(this.state.artimeticSign === undefined){
      let holderForFirst = this.state.firstElement;
      holderForFirst.push(1);
      this.setState( { total: holderForFirst.join(""), firstElement: holderForFirst } );
    //If there is arthimetic sign displayed numbers entered are ssigned to second element
    } else if(this.state.artimeticSign !== undefined && this.state.secondElement.length < 1){
      let holderForSecond = this.state.secondElement;
      holderForSecond.push(1);
      //checking is it first element decimal or round
      if(this.state.firstElement.indexOf("," > 0)){
        let decimala = Number(this.state.firstElement.join(""));
        alert(typeof decimala)
      }
      this.setState( { total: this.state.artimeticSign + Number(holderForSecond.join("")), secondElement: holderForSecond } )
    }
  };

  two(){
    //If there is no arthimetic sign displayed numbers entered are assigned to first element
    if(this.state.artimeticSign === undefined){
      let holderForFirst = this.state.firstElement;
      holderForFirst.push(2);
      this.setState( { total: holderForFirst.join(""), firstElement: holderForFirst } );
    //If there is arthimetic sign displayed numbers entered are ssigned to second element
    } else if(this.state.artimeticSign !== undefined){
      let holderForSecond = this.state.secondElement;
      holderForSecond.push(2);
      let toAppend = Number(holderForSecond.join(""));
      let firstElementConverted = Number(this.state.firstElement.join(""));
      this.setState( { total: firstElementConverted + this.state.artimeticSign + toAppend, secondElement: holderForSecond } );
    }
  };

  three(){
    //If there is no arthimetic sign displayed numbers entered are assigned to first element
    if(this.state.artimeticSign === undefined){
      let holderForFirst = this.state.firstElement;
      holderForFirst.push(3);
      this.setState( { total: holderForFirst.join(""), firstElement: holderForFirst } );
    //If there is arthimetic sign displayed numbers entered are ssigned to second element
    } else if(this.state.artimeticSign !== undefined){
      let holderForSecond = this.state.secondElement;
      holderForSecond.push(3);
      let toAppend = Number(holderForSecond.join(""));
      let firstElementConverted = Number(this.state.firstElement.join(""));
      this.setState( { total: firstElementConverted + this.state.artimeticSign + toAppend, secondElement: holderForSecond } );
    }
  };

  four(){
    //If there is no arthimetic sign displayed numbers entered are assigned to first element
    if(this.state.artimeticSign === undefined){
      let holderForFirst = this.state.firstElement;
      holderForFirst.push(4);
      this.setState( { total: holderForFirst.join(""), firstElement: holderForFirst } );
    //If there is arthimetic sign displayed numbers entered are ssigned to second element
    } else if(this.state.artimeticSign !== undefined){
      let holderForSecond = this.state.secondElement;
      holderForSecond.push(4);
      let toAppend = Number(holderForSecond.join(""));
      let firstElementConverted = Number(this.state.firstElement.join(""));
      this.setState( { total: firstElementConverted + this.state.artimeticSign + toAppend, secondElement: holderForSecond } );
    }
  };

  five(){
    //If there is no arthimetic sign displayed numbers entered are assigned to first element
    if(this.state.artimeticSign === undefined){
      let holderForFirst = this.state.firstElement;
      holderForFirst.push(5);
      this.setState( { total: holderForFirst.join(""), firstElement: holderForFirst } );
    //If there is arthimetic sign displayed numbers entered are ssigned to second element
    } else if(this.state.artimeticSign !== undefined){
      let holderForSecond = this.state.secondElement;
      holderForSecond.push(5);
      let toAppend = Number(holderForSecond.join(""));
      let firstElementConverted = Number(this.state.firstElement.join(""));
      this.setState( { total: firstElementConverted + this.state.artimeticSign + toAppend, secondElement: holderForSecond } );
    }
  };

  six(){
    //If there is no arthimetic sign displayed numbers entered are assigned to first element
    if(this.state.artimeticSign === undefined){
      let holderForFirst = this.state.firstElement;
      holderForFirst.push(6);
      this.setState( { total: holderForFirst.join(""), firstElement: holderForFirst } );
    //If there is arthimetic sign displayed numbers entered are ssigned to second element
    } else if(this.state.artimeticSign !== undefined){
      let holderForSecond = this.state.secondElement;
      holderForSecond.push(6);
      let toAppend = Number(holderForSecond.join(""));
      let firstElementConverted = Number(this.state.firstElement.join(""));
      this.setState( { total: firstElementConverted + this.state.artimeticSign + toAppend, secondElement: holderForSecond } );
    }
  };

  seven(){
    //If there is no arthimetic sign displayed numbers entered are assigned to first element
    if(this.state.artimeticSign === undefined){
      let holderForFirst = this.state.firstElement;
      holderForFirst.push(7);
      this.setState( { total: holderForFirst.join(""), firstElement: holderForFirst } );
    //If there is arthimetic sign displayed numbers entered are ssigned to second element
    } else if(this.state.artimeticSign !== undefined){
      let holderForSecond = this.state.secondElement;
      holderForSecond.push(7);
      let toAppend = Number(holderForSecond.join(""));
      let firstElementConverted = Number(this.state.firstElement.join(""));
      this.setState( { total: firstElementConverted + this.state.artimeticSign + toAppend, secondElement: holderForSecond } );
    }
  };

  eight(){
    //If there is no arthimetic sign displayed numbers entered are assigned to first element
    if(this.state.artimeticSign === undefined){
      let holderForFirst = this.state.firstElement;
      holderForFirst.push(8);
      this.setState( { total: holderForFirst.join(""), firstElement: holderForFirst } );
    //If there is arthimetic sign displayed numbers entered are ssigned to second element
    } else if(this.state.artimeticSign !== undefined){
      let holderForSecond = this.state.secondElement;
      holderForSecond.push(8);
      let toAppend = Number(holderForSecond.join(""));
      let firstElementConverted = Number(this.state.firstElement.join(""));
      this.setState( { total: firstElementConverted + this.state.artimeticSign + toAppend, secondElement: holderForSecond } );
    }
  };

  nine(){
    //If there is no arthimetic sign displayed numbers entered are assigned to first element
    if(this.state.artimeticSign === undefined){
      let holderForFirst = this.state.firstElement;
      holderForFirst.push(9);
      this.setState( { total: holderForFirst.join(""), firstElement: holderForFirst } );
    //If there is arthimetic sign displayed numbers entered are ssigned to second element
    } else if(this.state.artimeticSign !== undefined){
      let holderForSecond = this.state.secondElement;
      holderForSecond.push(9);
      let toAppend = Number(holderForSecond.join(""));
      let firstElementConverted = Number(this.state.firstElement.join(""));
      this.setState( { total: firstElementConverted + this.state.artimeticSign + toAppend, secondElement: holderForSecond } );
    }
  };

  decimal(){
    // check where to append decimal point and dont allow two decimal points in a row
    if(this.state.firstElement.indexOf(",") > 0){
      return;
    } else if(this.state.firstElement.length > 0 && this.state.artimeticSign === undefined){
      let holderForFirst = this.state.firstElement;
      holderForFirst.push(",");
      this.setState( {total: holderForFirst, firstElement: holderForFirst } );
    }
  };
  
  
  zero(){
    //If there is no arthimetic sign displayed numbers entered are assigned to first element
    if(this.state.artimeticSign === undefined && this.state.firstElement.length === 0){
      let holderForFirst = this.state.firstElement;
      holderForFirst.push(0);
      this.setState( { total: holderForFirst.join(""), firstElement: holderForFirst } );
    //If there is arthimetic sign displayed numbers entered are ssigned to second element
    } else if(this.state.artimeticSign !== undefined){
      let holderForSecond = this.state.secondElement;
      holderForSecond.push(0);
      let toAppend = Number(holderForSecond.join(""));
      let firstElementConverted = Number(this.state.firstElement.join(""));
      this.setState( { total: firstElementConverted + this.state.artimeticSign + toAppend, secondElement: holderForSecond } );
    }
  };

  
// Add functions
  add(){
    //Check is there a + sign, if not, concate plus sign on top of the displayed number
    if(this.state.artimeticSign === undefined && this.state.firstElement.length > 0){
      this.setState( { total: this.state.total + "+", artimeticSign: "+" } );
    //Check if there is arthimetic sign but it is not a + sign
    } else if(this.state.artimeticSign !== undefined && this.state.artimeticSign !== "+"){
      this.setState( { total: `${this.state.firstElement}+` } );
    //Check if there is artimetic sign, first element and no second element
    } else if(this.state.artimeticSign === "+" && this.state.firstElement.length > 0 && this.state.secondElement.length === 0){
      return;
    //If there is plus sign and second operand, calculate result and append + to displayed result
    } else if(this.state.artimeticSign === "+" && this.state.secondElement.length > 0){
      let totalCalc = this.state.total.split(this.state.artimeticSign);
      let first = Number(totalCalc[0]);
      let second = Number(totalCalc[1]);
      totalCalc = first + second;
      this.setState( { total: `${totalCalc}+`, firstElement: [totalCalc], secondElement: [] } );
    }
  };

// Subtract function
  subtract(){
   
  };

// Multiply function
  multiply(){
   
  };

// Divide function
  divide(){

  };

// Equal sign
  equals(){   
    
  };

// Adding event listeners to elements
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
    document.getElementById("decimal").addEventListener('click', this.decimal);
  };

// Rendering elements to page
    render(){
      return(
        <div id="calculator">
          <div id="clear" className="buttons">AC</div>
          <div id="display">{this.state.total}</div>
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
};

export default App;
