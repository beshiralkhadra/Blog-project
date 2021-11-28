this.state = {
  counter: [
    {
      id: 1,
      item: "first",
      counterOne: 0,
    },
    {
      id: 2,
      item: "second",
      counterOne: 0,
    },
    {
      id: 3,
      item: "third",
      counterOne: 0,
    },
  ],
  total: 0,
};

handleFirstClick = (firstCounter) => {
  // console.log(firstCounter);
  const newState = [...this.state.counter];
  const newMe = newState[firstCounter - 1];
  newMe.counterOne++;
  this.setState({ newState });
  let newTotal = this.state.total;
  newTotal += 1;
  this.setState({ total: newTotal });
};
handleSecondClick = (secondCounter) => {
  const newState = [...this.state.counter];
  const newMe = newState[secondCounter - 1];
  if (newMe.counterOne > 0) {
    newMe.counterOne--;
    this.setState({ newState });
    let newTotal = this.state.total;
    newTotal -= 1;
    this.setState({ total: newTotal });
  }
};
