import React from "react";

class AddUserInfor extends React.Component {

    //state là 1 biến object, dữ liệu state thay đổi thì trên trình duyệt thay đổi theo
    state = {
        name: '',
        address: 'Ha Noi',
        age: ''

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
        this.props.handleAddNewUser({
            id: (Math.floor(Math.random() * 100) + 1) + '-random',
            name: this.state.name,
            age: this.state.age
        });
        //Thực thi props là 1 function thì phải có ()
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

export default AddUserInfor;