import React, { Component } from 'react';
import TOC from './components/TOC';
import Content from './components/Content';
import Subject from './components/Subject';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props); // state 값 초기화
    // 1. render 함수보다 먼저 실행이 된다.
    // 2. 컴포넌트를 초기화시켜주고 싶은 코드는 constructor 안에 코드를 작성한다.
    this.state = {
      subject: { title: 'WEB', sub: 'World Wide Web!' },
      contents: [
        { id: 1, title: 'HTML', desc: 'HTML is for information' },
        { id: 2, title: 'CSS', desc: 'CSS is for design' },
        { id: 3, title: 'JavaScript', desc: 'JavaScript is for interactive' },
      ],
    };
  }

  render() {
    return (
      <div className='App'>
        <Subject
          // 상위 컴포넌트인 App의 상태를 하위 컴포넌트로 전달하고 싶을 때는
          // 상위 컴포넌트의 state 값을 하위 컴포넌트의 props의 값으로 전달할 수 있다.
          title={this.state.subject.title}
          sub={this.state.subject.sub}
        ></Subject>
        <Subject title='React' sub='For UI'></Subject>
        <TOC data={this.state.contents}></TOC>
        <Content
          title='HTML'
          desc='HTML is HyperText Markup Language.'
        ></Content>
      </div>
    );
  }
}

export default App;
