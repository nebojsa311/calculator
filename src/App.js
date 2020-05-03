import React from "react";

class App extends React.Component {
  constructor(props) {
    super(props);
    // states
    this.state = {
      total: "0",
      firstElement: [],
      secondElement: [],
      artimeticSign: null,
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
    this.lose = this.lose.bind(this);
  }

  // Reset
  clearer(a, e = 0) {
    this.setState({
      total: "0",
      firstElement: [],
      secondElement: [],
      artimeticSign: null,
    });
  }

  // Numbers 0-9

  one() {
    //If there is no arthimetic sign displayed numbers entered are assigned to first element
    if (this.state.artimeticSign === null) {
      let holderForFirst = this.state.firstElement;
      holderForFirst.push(1);
      this.setState({
        total: holderForFirst.join(""),
        firstElement: holderForFirst,
      });
      //If there is arthimetic sign displayed numbers entered are ssigned to second element
    } else if (this.state.artimeticSign !== null) {
      let holderForSecond = this.state.secondElement;
      holderForSecond.push(1);
      let toAppend = Number(holderForSecond.join(""));
      let firstElementConverted = Number(this.state.firstElement.join(""));
      this.setState({
        total: firstElementConverted + this.state.artimeticSign + toAppend,
        secondElement: holderForSecond,
      });
    }
  }

  two() {
    //If there is no arthimetic sign displayed numbers entered are assigned to first element
    if (this.state.artimeticSign === null) {
      let holderForFirst = this.state.firstElement;
      holderForFirst.push(2);
      this.setState({
        total: holderForFirst.join(""),
        firstElement: holderForFirst,
      });
      //If there is arthimetic sign displayed numbers entered are ssigned to second element
    } else if (this.state.artimeticSign !== null) {
      let holderForSecond = this.state.secondElement;
      holderForSecond.push(2);
      let toAppend = Number(holderForSecond.join(""));
      let firstElementConverted = Number(this.state.firstElement.join(""));
      this.setState({
        total: firstElementConverted + this.state.artimeticSign + toAppend,
        secondElement: holderForSecond,
      });
    }
  }

  three() {
    //If there is no arthimetic sign displayed numbers entered are assigned to first element
    if (this.state.artimeticSign === null) {
      let holderForFirst = this.state.firstElement;
      holderForFirst.push(3);
      this.setState({
        total: holderForFirst.join(""),
        firstElement: holderForFirst,
      });
      //If there is arthimetic sign displayed numbers entered are ssigned to second element
    } else if (this.state.artimeticSign !== null) {
      let holderForSecond = this.state.secondElement;
      holderForSecond.push(3);
      let toAppend = Number(holderForSecond.join(""));
      let firstElementConverted = Number(this.state.firstElement.join(""));
      this.setState({
        total: firstElementConverted + this.state.artimeticSign + toAppend,
        secondElement: holderForSecond,
      });
    }
  }

  four() {
    //If there is no arthimetic sign displayed numbers entered are assigned to first element
    if (this.state.artimeticSign === null) {
      let holderForFirst = this.state.firstElement;
      holderForFirst.push(4);
      this.setState({
        total: holderForFirst.join(""),
        firstElement: holderForFirst,
      });
      //If there is arthimetic sign displayed numbers entered are ssigned to second element
    } else if (this.state.artimeticSign !== null) {
      let holderForSecond = this.state.secondElement;
      holderForSecond.push(4);
      let toAppend = Number(holderForSecond.join(""));
      let firstElementConverted = Number(this.state.firstElement.join(""));
      this.setState({
        total: firstElementConverted + this.state.artimeticSign + toAppend,
        secondElement: holderForSecond,
      });
    }
  }

  five() {
    //If there is no arthimetic sign displayed numbers entered are assigned to first element
    if (this.state.artimeticSign === null) {
      let holderForFirst = this.state.firstElement;
      holderForFirst.push(5);
      this.setState({
        total: holderForFirst.join(""),
        firstElement: holderForFirst,
      });
      //If there is arthimetic sign displayed numbers entered are ssigned to second element
    } else if (this.state.artimeticSign !== null) {
      let holderForSecond = this.state.secondElement;
      holderForSecond.push(5);
      let toAppend = Number(holderForSecond.join(""));
      let firstElementConverted = Number(this.state.firstElement.join(""));
      this.setState({
        total: firstElementConverted + this.state.artimeticSign + toAppend,
        secondElement: holderForSecond,
      });
    }
  }

  six() {
    //If there is no arthimetic sign displayed numbers entered are assigned to first element
    if (this.state.artimeticSign === null) {
      let holderForFirst = this.state.firstElement;
      holderForFirst.push(6);
      this.setState({
        total: holderForFirst.join(""),
        firstElement: holderForFirst,
      });
      //If there is arthimetic sign displayed numbers entered are ssigned to second element
    } else if (this.state.artimeticSign !== null) {
      let holderForSecond = this.state.secondElement;
      holderForSecond.push(6);
      let toAppend = Number(holderForSecond.join(""));
      let firstElementConverted = Number(this.state.firstElement.join(""));
      this.setState({
        total: firstElementConverted + this.state.artimeticSign + toAppend,
        secondElement: holderForSecond,
      });
    }
  }

  seven() {
    //If there is no arthimetic sign displayed numbers entered are assigned to first element
    if (this.state.artimeticSign === null) {
      let holderForFirst = this.state.firstElement;
      holderForFirst.push(7);
      this.setState({
        total: holderForFirst.join(""),
        firstElement: holderForFirst,
      });
      //If there is arthimetic sign displayed numbers entered are ssigned to second element
    } else if (this.state.artimeticSign !== null) {
      let holderForSecond = this.state.secondElement;
      holderForSecond.push(7);
      let toAppend = Number(holderForSecond.join(""));
      let firstElementConverted = Number(this.state.firstElement.join(""));
      this.setState({
        total: firstElementConverted + this.state.artimeticSign + toAppend,
        secondElement: holderForSecond,
      });
    }
  }

  eight() {
    //If there is no arthimetic sign displayed numbers entered are assigned to first element
    if (this.state.artimeticSign === null) {
      let holderForFirst = this.state.firstElement;
      holderForFirst.push(8);
      this.setState({
        total: holderForFirst.join(""),
        firstElement: holderForFirst,
      });
      //If there is arthimetic sign displayed numbers entered are ssigned to second element
    } else if (this.state.artimeticSign !== null) {
      let holderForSecond = this.state.secondElement;
      holderForSecond.push(8);
      let toAppend = Number(holderForSecond.join(""));
      let firstElementConverted = Number(this.state.firstElement.join(""));
      this.setState({
        total: firstElementConverted + this.state.artimeticSign + toAppend,
        secondElement: holderForSecond,
      });
    }
  }

  nine() {
    //If there is no arthimetic sign displayed numbers entered are assigned to first element
    if (this.state.artimeticSign === null) {
      let holderForFirst = this.state.firstElement;
      holderForFirst.push(9);
      this.setState({
        total: holderForFirst.join(""),
        firstElement: holderForFirst,
      });
      //If there is arthimetic sign displayed numbers entered are ssigned to second element
    } else if (this.state.artimeticSign !== null) {
      let holderForSecond = this.state.secondElement;
      holderForSecond.push(9);
      let toAppend = Number(holderForSecond.join(""));
      let firstElementConverted = Number(this.state.firstElement.join(""));
      this.setState({
        total: firstElementConverted + this.state.artimeticSign + toAppend,
        secondElement: holderForSecond,
      });
    }
  }

  // adding decimal
  decimal() {
    let indexoff = this.state.firstElement;
    let indexofs = this.state.secondElement;
    // check where to append decimal point and dont allow two decimal points in a row
    if (this.state.firstElement.length === 0) {
      let zeroDec = "0,";
      this.setState({ total: zeroDec, firstElement: [0, "."] });
      // check for decimals, and there is no any, add decimal point to first element
    } else if (
      this.state.firstElement.length > 0 &&
      indexoff.indexOf(".") === -1 &&
      this.state.artimeticSign === null
    ) {
      let holderForFirst = this.state.firstElement;
      holderForFirst.push(".");
      this.setState({
        total: holderForFirst.join(""),
        firstElement: holderForFirst,
      });
    } else if (
      this.state.secondElement.length > 0 &&
      indexofs.indexOf(".") === -1 &&
      this.state.artimeticSign !== null
    ) {
      let holderForSecond = this.state.secondElement;
      holderForSecond.push(".");
      this.setState({
        total: holderForSecond.join(""),
        secondElement: holderForSecond,
      });
    }
  }

  // Zero
  zero() {
    //If there is no arthimetic sign displayed numbers entered are assigned to first element
    if (
      this.state.artimeticSign === null &&
      this.state.firstElement.length === 0
    ) {
      let holderForFirst = this.state.firstElement;
      holderForFirst.push(0);
      this.setState({
        total: holderForFirst.join(""),
        firstElement: holderForFirst,
      });
      // Add zero after decimal point
    } else if (
      this.state.artimeticSign === null &&
      this.state.firstElement[0] !== 0 &&
      this.state.firstElement[0] !== "-"
    ) {
      let holderForFirst = this.state.firstElement;
      holderForFirst.push(0);
      this.setState({
        total: holderForFirst.join(""),
        firstElement: holderForFirst,
      });
      //If there is arthimetic sign displayed numbers entered are ssigned to second element
    } else if (this.state.artimeticSign !== null) {
      let holderForSecond = this.state.secondElement;
      holderForSecond.push(0);
      let toAppend = Number(holderForSecond.join(""));
      let firstElementConverted = Number(this.state.firstElement.join(""));
      this.setState({
        total: firstElementConverted + this.state.artimeticSign + toAppend,
        secondElement: holderForSecond,
      });
    }
  }

  // Add functions
  add() {
    // Prevents from ilegal actions
    if (
      this.state.firstElement[0] === "-" &&
      this.state.firstElement.length === 1
    ) {
      return;
      //Check is there a + sign, if not, concate plus sign on top of the displayed number
    } else if (
      this.state.artimeticSign === null &&
      this.state.firstElement.length > 0
    ) {
      this.setState({ total: this.state.total + "+", artimeticSign: "+" });
      //Check if there is arthimetic sign but it is not a + sign
    } else if (
      this.state.artimeticSign !== null &&
      this.state.artimeticSign !== "+" &&
      this.state.secondElement.length === 0
    ) {
      let first = this.state.firstElement;
      first = first.join("");
      first = Number(first);
      this.setState({ total: `${first}+`, artimeticSign: "+" });
      //Check if there is artimetic sign, first element and no second element
    } else if (
      this.state.artimeticSign === "+" &&
      this.state.firstElement.length > 0 &&
      this.state.secondElement.length === 0
    ) {
      return;
      //If there is artimetic sign that is not a plus but there is a second operand, calculate result and append + to displayed result
    } else if (
      this.state.artimeticSign !== "+" &&
      this.state.secondElement.length > 0 &&
      this.state.secondElement[0] !== "-"
    ) {
      let first = this.state.firstElement;
      let second = this.state.secondElement;
      let totalCalc = null;
      first = first.join("");
      first = Number(first);
      second = second.join("");
      second = Number(second);

      if (this.state.artimeticSign === "-") {
        totalCalc = first - second;
      } else if (this.state.artimeticSign === "*") {
        totalCalc = first * second;
      } else if (this.state.artimeticSign === "/") {
        totalCalc = first / second;
      }
      this.setState({
        total: `${totalCalc}+`,
        firstElement: [totalCalc],
        secondElement: [],
        artimeticSign: "+",
      });
      //if there is first and second and artimetic sign, but second element is sign not a number
    } else if (
      this.state.secondElement.length > 0 &&
      this.state.secondElement[0] === "-"
    ) {
      let slicedTotal = this.state.total;
      slicedTotal = slicedTotal.substring(0, slicedTotal.length - 2);
      this.setState({
        total: `${slicedTotal}+`,
        artimeticSign: "+",
        secondElement: [],
      });
      //If there is plus sign and second operand, calculate result and append + to displayed result
    } else if (
      this.state.artimeticSign === "+" &&
      this.state.secondElement.length > 0
    ) {
      let totalCalc = this.state.total.split(this.state.artimeticSign);
      let first = Number(totalCalc[0]);
      let second = Number(totalCalc[1]);
      totalCalc = first + second;
      this.setState({
        total: `${totalCalc}+`,
        firstElement: [totalCalc],
        secondElement: [],
        artimeticSign: "+",
      });
    }
  }

  // Subtract function
  subtract() {
    // Check is there no artimetic sign and there 0 on display, so it set unary operator -
    if (this.state.artimeticSign === null && this.state.total === 0) {
      this.setState({ firstElement: ["-"], total: "-" });
      // prevents from adding multiple - signs
    } else if (
      this.state.firstElement[0] === "-" &&
      this.state.firstElement.length === 1
    ) {
      return;
      //Check is there a - sign, if not, concate plus sign on top of the displayed number
    } else if (
      this.state.artimeticSign === null &&
      this.state.firstElement.length > 0
    ) {
      this.setState({ total: this.state.total + "-", artimeticSign: "-" });
      //Function that enables second element to be negative
    } else if (
      this.state.artimeticSign !== null &&
      this.state.artimeticSign !== "-" &&
      this.state.firstElement.length > 0 &&
      this.state.secondElement.length === 0
    ) {
      this.setState({
        total: `${this.state.total}-`,
        secondElement: ["-"],
        firstElement: this.state.firstElement,
      });
      // check for artimetic sign and second operand, calculate values and add - to result
    } else if (
      this.state.artimeticSign !== "-" &&
      this.state.secondElement.length > 0
    ) {
      let first = this.state.firstElement;
      let second = this.state.secondElement;
      let totalCalc = null;
      first = first.join("");
      first = Number(first);
      second = second.join("");
      second = Number(second);

      if (this.state.artimeticSign === "+") {
        totalCalc = first + second;
      } else if (this.state.artimeticSign === "*") {
        totalCalc = first * second;
      } else if (this.state.artimeticSign === "/") {
        totalCalc = first / second;
      }
      this.setState({
        total: `${totalCalc}-`,
        firstElement: [totalCalc],
        secondElement: [],
        artimeticSign: "-",
      });
      //Check if there is arthimetic sign but it is not a - sign
    } else if (
      this.state.artimeticSign !== null &&
      this.state.artimeticSign !== "-"
    ) {
      let first = this.state.firstElement;
      first = first.join("");
      first = Number(first);
      this.setState({ total: `${first}-`, artimeticSign: "-" });
      //Check if there is - artimetic sign, first element and no second element
    } else if (
      this.state.artimeticSign === "+" &&
      this.state.firstElement.length > 0 &&
      this.state.secondElement.length === 0
    ) {
      return;
      //If there is - sign and second operand, calculate result and append - to displayed result
    } else if (
      this.state.artimeticSign === "-" &&
      this.state.secondElement.length > 0
    ) {
      let firstEle = this.state.firstElement;
      let secondEle = this.state.secondElement;
      firstEle = firstEle.join("");
      secondEle = secondEle.join("");
      firstEle = Number(firstEle);
      secondEle = Number(secondEle);

      let totale = firstEle - secondEle;
      this.setState({
        total: `${totale}-`,
        firstElement: [totale],
        secondElement: [],
      });
    }
  }

  // Multiply function
  multiply() {
    // Prevents from ilegal actions
    if (
      this.state.firstElement[0] === "-" &&
      this.state.firstElement.length === 1
    ) {
      return;
      // check for first element with no artimetic signs and also no second element
    } else if (
      this.state.artimeticSign === null &&
      this.state.firstElement.length > 0
    ) {
      this.setState({ total: `${this.state.total}*`, artimeticSign: "*" });
      //if there is first and second and artimetic sign, but second element is sign not a number
    } else if (
      this.state.secondElement.length > 0 &&
      this.state.secondElement[0] === "-"
    ) {
      let slicedTotal = this.state.total;
      slicedTotal = slicedTotal.substring(0, slicedTotal.length - 2);
      this.setState({
        total: `${slicedTotal}*`,
        artimeticSign: "*",
        secondElement: [],
      });
      // Check for both elements and sign that is not a *, calculate vaule and append * to result
    } else if (
      this.state.artimeticSign !== "*" &&
      this.state.secondElement.length > 0
    ) {
      let first = this.state.firstElement;
      let second = this.state.secondElement;
      let totalCalc = null;
      first = first.join("");
      first = Number(first);
      second = second.join("");
      second = Number(second);

      if (this.state.artimeticSign === "+") {
        totalCalc = first + second;
      } else if (this.state.artimeticSign === "-") {
        totalCalc = first - second;
      } else if (this.state.artimeticSign === "/") {
        totalCalc = first / second;
      }
      this.setState({
        total: `${totalCalc}*`,
        firstElement: [totalCalc],
        secondElement: [],
        artimeticSign: "*",
      });
      // if there is operand but it is not a multiply, change it to * sign
    } else if (
      this.state.artimeticSign !== "*" &&
      this.state.firstElement.length > 0
    ) {
      let first = this.state.firstElement;
      first = first.join("");
      first = Number(first);
      this.setState({ total: `${first}*`, artimeticSign: "*" });
      // Both elements are there and there is a * sign
    } else if (
      this.state.artimeticSign === "*" &&
      this.state.secondElement.length > 0
    ) {
      let first = this.state.firstElement;
      let second = this.state.secondElement;
      let totalCalc = null;
      first = first.join("");
      first = Number(first);
      second = second.join("");
      second = Number(second);
      totalCalc = first * second;
      this.setState({
        total: `${totalCalc}*`,
        firstElement: [totalCalc],
        secondElement: [],
        artimeticSign: "*",
      });
    }
  }

  // Divide function
  divide() {
    // Prevents from ilegal actions
    if (
      this.state.firstElement[0] === "-" &&
      this.state.firstElement.length === 1
    ) {
      return;
      // check for first element with no artimetic signs and also no second element
    } else if (
      this.state.artimeticSign === null &&
      this.state.firstElement.length > 0
    ) {
      this.setState({ total: `${this.state.total}/`, artimeticSign: "/" });
      //if there is first and second and artimetic sign, but second element is sign not a number
    } else if (
      this.state.secondElement.length > 0 &&
      this.state.secondElement[0] === "-"
    ) {
      let slicedTotal = this.state.total;
      slicedTotal = slicedTotal.substring(0, slicedTotal.length - 2);
      this.setState({
        total: `${slicedTotal}/`,
        artimeticSign: "/",
        secondElement: [],
      });
      // Check for both elements and sign that is not a /, calculate vaule and append / to result
    } else if (
      this.state.artimeticSign !== "/" &&
      this.state.secondElement.length > 0
    ) {
      let first = this.state.firstElement;
      let second = this.state.secondElement;
      let totalCalc = null;
      first = first.join("");
      first = Number(first);
      second = second.join("");
      second = Number(second);

      if (this.state.artimeticSign === "+") {
        totalCalc = first + second;
      } else if (this.state.artimeticSign === "-") {
        totalCalc = first - second;
      } else if (this.state.artimeticSign === "*") {
        totalCalc = first * second;
      }
      this.setState({
        total: `${totalCalc}/`,
        firstElement: [totalCalc],
        secondElement: [],
        artimeticSign: "/",
      });
      // if there is operand but it is not a divide, change it to / sign
    } else if (
      this.state.artimeticSign !== "/" &&
      this.state.firstElement.length > 0
    ) {
      let first = this.state.firstElement;
      first = first.join("");
      first = Number(first);
      this.setState({ total: `${first}/`, artimeticSign: "/" });
      // Both elements are there and there is a / sign
    } else if (
      this.state.artimeticSign === "/" &&
      this.state.secondElement.length > 0
    ) {
      let first = this.state.firstElement;
      let second = this.state.secondElement;
      let totalCalc = null;
      first = first.join("");
      first = Number(first);
      second = second.join("");
      second = Number(second);
      totalCalc = first / second;
      this.setState({
        total: `${totalCalc}/`,
        firstElement: [totalCalc],
        secondElement: [],
        artimeticSign: "/",
      });
    }
  }

  // Equal sign
  equals() {
    let first = this.state.firstElement;
    let second = this.state.secondElement;
    let totalCalc = null;
    first = first.join("");
    first = Number(first);
    second = second.join("");
    second = Number(second);

    if (this.state.artimeticSign === null) {
      return;
    } else if (this.state.artimeticSign === "+") {
      totalCalc = first + second;
    } else if (this.state.artimeticSign === "-") {
      totalCalc = first - second;
    } else if (this.state.artimeticSign === "*") {
      totalCalc = first * second;
    } else if (this.state.artimeticSign === "/") {
      totalCalc = first / second;
    }

    this.setState({
      total: `${totalCalc}`,
      firstElement: [totalCalc],
      secondElement: [],
      artimeticSign: null,
    });
  }

  // Function for  cutting number to four decimals
  lose() {
    let totalTo = this.state.total;

    if (totalTo.indexOf(".") > 0 && this.state.firstElement.length > 0) {
      let startingPoint = totalTo.indexOf(".") + 5;
      totalTo = totalTo.slice(0, startingPoint);
      let forFirst = totalTo.slice(0, totalTo.length - 1);
      forFirst = Number(forFirst);
      this.setState({ total: totalTo, firstElement: [forFirst] });
    }
  }

  // Adding event listeners to elements
  componentDidMount() {
    document.getElementById("clear").addEventListener("click", this.clearer);
    document.getElementById("one").addEventListener("click", this.one);
    document.getElementById("two").addEventListener("click", this.two);
    document.getElementById("three").addEventListener("click", this.three);
    document.getElementById("four").addEventListener("click", this.four);
    document.getElementById("five").addEventListener("click", this.five);
    document.getElementById("six").addEventListener("click", this.six);
    document.getElementById("seven").addEventListener("click", this.seven);
    document.getElementById("eight").addEventListener("click", this.eight);
    document.getElementById("nine").addEventListener("click", this.nine);
    document.getElementById("zero").addEventListener("click", this.zero);
    document.getElementById("add").addEventListener("click", this.add);
    document.getElementById("add").addEventListener("click", this.lose);
    document.getElementById("equals").addEventListener("click", this.equals);
    document.getElementById("equals").addEventListener("click", this.lose);
    document
      .getElementById("subtract")
      .addEventListener("click", this.subtract);
    document.getElementById("subtract").addEventListener("click", this.lose);
    document
      .getElementById("multiply")
      .addEventListener("click", this.multiply);
    document.getElementById("multiply").addEventListener("click", this.lose);
    document.getElementById("divide").addEventListener("click", this.divide);
    document.getElementById("divide").addEventListener("click", this.lose);
    document.getElementById("decimal").addEventListener("click", this.decimal);
    // Keybord events
    document.addEventListener("keyup", (e) => {
      if (e.key === "1") {
        this.one();
      } else if (e.key === "2") {
        this.two();
      } else if (e.key === "3") {
        this.three();
      } else if (e.key === "4") {
        this.four();
      } else if (e.key === "5") {
        this.five();
      } else if (e.key === "6") {
        this.six();
      } else if (e.key === "7") {
        this.seven();
      } else if (e.key === "8") {
        this.eight();
      } else if (e.key === "9") {
        this.nine();
      } else if (e.key === "0") {
        this.zero();
      } else if (e.key === "+") {
        this.add();
        setTimeout(this.lose(), 1000);
      } else if (e.key === "-") {
        this.subtract();
        setTimeout(this.lose(), 1000);
      } else if (e.key === "*") {
        this.multiply();
        setTimeout(this.lose(), 1000);
      } else if (e.key === "/") {
        this.divide();
        setTimeout(this.lose(), 1000);
      } else if (e.key === "Enter") {
        this.equals();
        setTimeout(this.lose(), 1000);
      } else if (e.key === ",") {
        this.decimal();
      } else if (e.key === "Escape") {
        this.clearer();
      }
    });
  }

  // Rendering elements to page
  render() {
    return (
      <div id="calculator">
        <div id="clear" className="buttons">
          AC
        </div>
        <div id="display">{this.state.total}</div>
        <div id="one" className="buttons">
          1
        </div>
        <div id="two" className="buttons">
          2
        </div>
        <div id="three" className="buttons">
          3
        </div>
        <div id="add" className="buttons">
          +
        </div>
        <div id="four" className="buttons">
          4
        </div>
        <div id="five" className="buttons">
          5
        </div>
        <div id="six" className="buttons">
          6
        </div>
        <div id="subtract" className="buttons">
          -
        </div>
        <div id="seven" className="buttons">
          7
        </div>
        <div id="eight" className="buttons">
          8
        </div>
        <div id="nine" className="buttons">
          9
        </div>
        <div id="divide" className="buttons">
          /
        </div>
        <div id="zero" className="buttons">
          0
        </div>
        <div id="multiply" className="buttons">
          *
        </div>
        <div id="decimal" className="buttons">
          .
        </div>
        <div id="equals" className="buttons">
          =
        </div>
      </div>
    );
  }
}

export default App;
