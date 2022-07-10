import React, { Component } from 'react';
import './App.css';

class Subject extends Component {
  render() {
    return (
      // 하나의 최상위 태그만 사용해야 한다.
      // JS 코드가 아니고, JSX!
      // JSX로 작성하면 creat-react-app이 자동으로 JS 코드로 컨버팅해준다.
      <header>
        <h1>{this.props.title}</h1>
        {this.props.sub}
      </header>
    );
  }
}

class TOC extends Component {
  render() {
    return (
      <nav>
        <ul>
          <li>
            <a href='1.html'>HTML</a>
          </li>
          <li>
            <a href='2.html'>CSS</a>
          </li>
          <li>
            <a href='3.html'>JavaScript</a>
          </li>
        </ul>
      </nav>
    );
  }
}

class Content extends Component {
  render() {
    return (
      <article>
        <h2>{this.props.title}</h2>
        {this.props.desc}
      </article>
    );
  }
}

class App extends Component {
  render() {
    // 사용자 정의 태그를 만들 수 있다.
    return (
      <div className='App'>
        <Subject title='WEB' sub='World Wide Web!'></Subject>
        <Subject title='React' sub='For UI'></Subject>
        <TOC></TOC>
        <Content
          title='HTML'
          desc='HTML is HyperText Markup Language.'
        ></Content>
      </div>
    );
  }
}

export default App;
