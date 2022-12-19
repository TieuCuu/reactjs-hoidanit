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

        //cập nhật giá trị trong state, sau đó hàm render tự động được gọi lại
        this.setState({
            name: 'XiaoJiu',
            age: Math.floor((Math.random() * 100) + 1)
        })
    }

    handleOnMouseOver(event) {
        // console.log(event.pageX);
    }

    //JSX
    render() {
        return (
            <div>

                My name is {this.state.name} and I'm {this.state.age}
                <button onMouseOver={this.handleOnMouseOver}>Hover me</button>
                <button onClick={(event) => { this.handleClick(event) }}>Click me</button>
            </div>
        )
    }
}

export default MyComponent