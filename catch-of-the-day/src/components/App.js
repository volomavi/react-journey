import React from "react";
import Header from "./Header";
import Order from "./Order";
import Inventory from "./Inventory";

class App extends React.Component {
  state = {
    fishes: {},
    order: {},
  };
  addFish = (fish) => {
    //take a copy of the existing state to prevent mutation
    const fishes = { ...this.state.fishes };
    //add our new fish to that fishes var
    fishes[`fish${Date.now()}`] = fish;
    //set new fishes object to state
    this.setState({
      fishes: fishes,
    });
  };
  render() {
    return (
      <div className="catch-of-the-day">
        <div className="menu">
          <Header tagline="Fresh Seafood Market" />
        </div>
        <Order />

        <Inventory addFish={this.addFish} />
      </div>
    );
  }
}

export default App;
