import React, { useEffect, useState } from "react";
import './DisplayInfor.scss';
import logo from './../logo.svg';

//stateless vs stateful
//stateless: k có state, mà chỉ nhận dữ liệu từ props của cha

// class DisplayInfor extends React.Component {

//     //component = template (html) + logic js
//     render() {
//         console.log('this is render:');
//         //destructuring array/object
//         const { listUsers } = this.props;
//         //props => properties
//         return (

//             <div className="display-infor-container">

//                 {true &&
//                     <>
//                         {listUsers.map((user) => {

//                             return (
//                                 <div key={user.id} className={+user.age > 20 ? "red" : "green"}>
//                                     <div>
//                                         <div>My name's {user.name} </div>
//                                         <div>My age's {user.age}</div>
//                                     </div>
//                                     <div>
//                                         <button onClick={() => this.props.handleDeleteUser(user.id)}>Delete</button>
//                                     </div>
//                                     <hr />
//                                 </div>
//                             )
//                         })}
//                     </>
//                 }
//             </div>
//         )
//     }
// }


//Function component, react hỗ trợ props, tự động lấy props từ cha truyền xuống, k có khái niệm 'this', k có hàm constructor, render() như class component
//Khi nào cần chuyển class sang function component => Khi nó k có state
//Sau v16, có hooks thì function component có thể dùng state

const DisplayInfor = (props) => {
    //destructuring array/object
    const { listUsers } = props;

    //HOOKS
    //phần tử 1 là biến state, phần tử 2 là hàm (tính năng tương tự setState)
    const [isShowHideListUser, setShowHideListUser] = useState(true);

    // this.state = {
    //     isShowHideListUser: true
    // }

    const handleShowHideListUser = () => {
        // this.setState({
        //     isShowHideListUser: false
        // })
        setShowHideListUser(!isShowHideListUser);
    }

    console.log('call me render');

    //mặc định k truyền [] thì tương tự componentDidMount
    //tham số [], nghĩa là hàm chỉ chạy 1 lần duy nhất, nếu k có thì chạy sau render
    //tham số [listUsers], nghĩa là theo dõi sự thay đổi biến listUsers để làm một điều gì đó (tương tự componentDidUpdate)
    //có thể có nhiều hàm useEffect để theo dõi các biến khác nhau...
    useEffect(() => {

        if (listUsers.length === 0) {
            alert('List null');
        }
        console.log('call me useEffect');

    }, [listUsers]);

    return (
        <div className="display-infor-container">

            <div>
                <button onClick={() => handleShowHideListUser()}>{isShowHideListUser === true ? "Hide List Users" : "Show List Users"}</button>
            </div>
            {isShowHideListUser &&
                <>
                    {listUsers.map((user) => {

                        return (
                            <div key={user.id} className={+user.age > 20 ? "red" : "green"}>
                                <div>
                                    <div>My name's {user.name} </div>
                                    <div>My age's {user.age}</div>
                                </div>
                                <div>
                                    <button onClick={() => props.handleDeleteUser(user.id)}>Delete</button>
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

export default DisplayInfor;