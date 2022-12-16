//class components
//function components

import React from "react";

class MyComponent extends React.Component {

    //state là 1 biến object, dữ liệu state thay đổi thì trên trình duyệt thay đổi theo
    state = {
        name: 'Phat',
        address: 'Ha Noi',
        age: 18

    }


    handleClick(event) {
        console.log('Click me', event.target);
        console.log("My name is", this.state.name);
    }

    handleOnMouseOver(event) {
        console.log(event.pageX);
    }

    //JSX
    render() {
        return (
            <div>

                My name is {this.state.name} and I'm from {this.state.address}
                <button onMouseOver={this.handleOnMouseOver}>Hover me</button>
                <button onClick={this.handleClick}>Click me</button>
            </div>
        )
    }
}

export default MyComponent