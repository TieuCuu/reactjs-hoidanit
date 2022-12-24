import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import store from './redux/store';
import 'bootstrap/dist/css/bootstrap.min.css';
import { createBrowserRouter, RouterProvider, } from "react-router-dom";
import User from './components/User/User';
import Admin from './components/Admin/Admin';
import HomePage from "./components/Home/HomePage";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [

            {   //mặc định trang home (cha) sẽ render sẵn nếu index = true
                index: true,
                element: <HomePage />
            },

            {   //đây là trang con, vẫn giữ nguyên header
                path: "/users", //đường link dẫn tới element, phải trùng với Link to bên App.js
                element: <User />,
            },

            {   //đây là trang con
                path: "/admin",
                element: <Admin />,
            },
        ],
    },

]);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
        {/* <React.StrictMode> */}


        <RouterProvider router={router} />



        {/* </React.StrictMode> */}
    </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
