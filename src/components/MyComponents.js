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

    //JSX
    render() {
        return (
            <div>

                My name is {this.state.name} and I'm from {this.state.address}
            </div>
        )
    }
}

export default MyComponent