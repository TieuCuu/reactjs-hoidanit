//class components
//function components
//DRY: don't repeat yourself: nghĩa là những việc lặp lại thì chắc chắn có cách tối ưu


import React from "react";
import DisplayInfor from "./DisplayInfor";
import UserInfor from "./UserInfor";

class MyComponent extends React.Component {


    state = {
        listUsers: [
            { id: 1, name: "Xiao Jiu", age: '18' },
            { id: 2, name: "Tiểu Cửu", age: '20' },
            { id: 3, name: "Bảo Nghi", age: '24' }
        ]
    }

    //JSX
    render() {
        const myInfor = ['ab', 'c', 'd'];
        return (
            <div>
                <UserInfor />
                <br /> <br />


                <DisplayInfor listUsers={this.state.listUsers} />


            </div>
        )
    }
}

export default MyComponent