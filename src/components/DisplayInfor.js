import React from "react";
import './DisplayInfor.scss';
import logo from './../logo.svg';

class DisplayInfor extends React.Component {

    constructor(props) {
        console.log('this is constructor: 1');
        super(props);
        this.state = {
            isShowListUser: true
        }
    }

    componentDidMount() {
        //chạy sau hàm render
        //thường thao tác với API ở đây, vì phải đợi các phần tử html tạo ra rồi mới thao tác được
        console.log('this is component did mount:');
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        //Dùng khi đạt tới một giá trị gì thì thực hiện hành động gì đó
        //ví dụ check số lượng user tạo ra có trong giới hạn cho phép k?

        console.log('this is component did update:', this.props, prevProps);
        if (this.props.listUsers !== prevProps.listUsers) {
            if (this.props.listUsers.length === 5) {
                alert('You got 5 users');
            }
        }
    }


    handleShowHide = () => {
        this.setState({
            isShowListUser: !this.state.isShowListUser
        })
    }


    //component = template (html) + logic js
    render() {
        console.log('this is render:');
        //destructuring array/object
        const { listUsers } = this.props;
        //props => properties
        return (

            <div className="display-infor-container">
                {/* <img src={logo} alt="" /> */}
                <div>
                    <button onClick={() => { this.handleShowHide() }}>
                        {this.state.isShowListUser === true ? "Hide list" : "Show list"}
                    </button>
                </div>

                {this.state.isShowListUser &&
                    <>
                        {listUsers.map((user) => {

                            return (
                                <div key={user.id} className={+user.age > 20 ? "red" : "green"}>
                                    <div>
                                        <div>My name's {user.name} </div>
                                        <div>My age's {user.age}</div>
                                    </div>
                                    <div>
                                        <button onClick={() => this.props.handleDeleteUser(user.id)}>Delete</button>
                                    </div>
                                    <hr />
                                </div>
                            )
                        })}
                    </>
                }
            </div>
        )
    }
}

export default DisplayInfor;