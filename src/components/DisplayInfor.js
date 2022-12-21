import React from "react";
import './DisplayInfor.scss';
import logo from './../logo.svg';

class DisplayInfor extends React.Component {

    state = {
        isShowListUser: true
    }

    handleShowHide = () => {
        this.setState({
            isShowListUser: !this.state.isShowListUser
        })
    }



    render() {
        //destructuring array/object
        const { listUsers } = this.props;
        //props => properties
        return (

            <div className="display-infor-container">
                <img src={logo} alt="" />
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
                                    <div>My name's {user.name} </div>
                                    <div>My age's {user.age}</div>
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