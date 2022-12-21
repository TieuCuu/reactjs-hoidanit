//class components
//function components
//DRY: don't repeat yourself: nghĩa là những việc lặp lại thì chắc chắn có cách tối ưu


import React from "react";
import DisplayInfor from "./DisplayInfor";
import AddUserInfor from "./AddUserInfor";

class MyComponent extends React.Component {


    state = {
        listUsers: [
            { id: 1, name: "Xiao Jiu", age: '18' },
            { id: 2, name: "Tiểu Cửu", age: '20' },
            { id: 3, name: "Bảo Nghi", age: '24' }
        ]
    }

    handleAddNewUser = (userObj) => {
        this.setState({
            listUsers: [userObj, ...this.state.listUsers]
        })
    }

    //JSX
    render() {
        const myInfor = ['ab', 'c', 'd'];
        return (
            <>
                <div className="a">
                    <AddUserInfor handleAddNewUser={this.handleAddNewUser} />
                    {/* handleAddNewUser k có dấu () nghĩa là tham chiếu đến function, có () là thực thi function */}
                    {/* Truyền tham chiếu cho props là function thì k cần () */}
                    <br /> <br />

                    <DisplayInfor listUsers={this.state.listUsers} />
                </div>

                <div className="b"></div>
            </>
        )
    }
}

export default MyComponent