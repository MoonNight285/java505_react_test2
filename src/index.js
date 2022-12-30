import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import App2 from "./App2";
import NotificationList from "./mounts/NotificationList";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        {/* jsx 문법에서 화면을 렌더링하기 위한 태그의 이름은 반드시 첫 글자가 대문자이어야한다. */}
        {/* 대문자를 사용하는 이유는 일반적으로 html 태그를 모두 소문자로 사용하기 때문에 일반 html 태그인지
            jsx 문법으로 생성된 태그인지를 구분하기 위해서이다.*/}
        
        <App2 />
        <NotificationList />
        <br /><hr />
        <App />
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
