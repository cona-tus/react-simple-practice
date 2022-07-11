import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// <App />: 외부에서 알 필요 없는 정보를 은닉하는 것이 좋은 사용성을 만드는 핵심이다.
// App이 내부적으로 사용할 상태는 state라는 형태를 통해서 사용한다.

reportWebVitals();
