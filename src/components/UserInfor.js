import React from "react";

class UserInfor extends React.Component {

    //state là 1 biến object, dữ liệu state thay đổi thì trên trình duyệt thay đổi theo
    state = {
        name: 'Phat',
        address: 'Ha Noi',
        age: 18

    }

    handleOnChangeInput = (event) => {
        this.setState({
            name: event.target.value
        })
    }

    handleOnChangeAge = (event) => {
        this.setState({
            age: event.target.value
        })
    }

    handleOnSubmit = (event) => {
        event.preventDefault();
        console.log(this.state);
    }

    render() {
        return (
            <div>
                My name is {this.state.name} and I'm {this.state.age}
                <form action="" onSubmit={(event) => this.handleOnSubmit(event)}>
                    <label htmlFor="">Your name:</label>
                    <input type="text" value={this.state.name} onChange={(event) => this.handleOnChangeInput(event)} />

                    <label htmlFor="">Your age:</label>
                    <input type="text" value={this.state.age} onChange={(event) => this.handleOnChangeAge(event)} />

                    <button>Submit</button>
                </form>
            </div>
        )
    }
}

export default UserInfor;