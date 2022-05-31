import React from "react";
import { getFunName } from "../helpers";

class StorePicker extends React.Component {


  goToStore = (event) => {
    event.preventDefault();
    console.log("go to store");
  }
  render() {
    return (
      <>
        <p>fish!</p>
        <form action="" className="store-selector" onSubmit={this.goToStore}>
          <h2>Please Enter A Store</h2>
          <input
            type="text"
            ref={this.myInput}
            required
            placeholder="Store Name"
            defaultValue={getFunName()}
          />
          <button type="submit">Visit Store</button>
        </form>
      </>
    );
  }
}

export default StorePicker;
