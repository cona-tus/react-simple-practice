import React, { Component } from 'react';
import TOC from './components/TOC';
import Content from './components/Content';
import Subject from './components/Subject';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    // 리액트에서는 props의 값이나 state 값이 바뀌면
    // 해당되는 컴포넌트의 render 함수가 호출되도록 약속되어있다.
    // 고로, 화면이 다시 그려진다.
    this.state = {
      mode: 'read',
      subject: { title: 'WEB', sub: 'World Wide Web!' },
      welcome: { title: 'Welcome', desc: '👋 Hello, React!' },
      contents: [
        { id: 1, title: 'HTML', desc: 'HTML is for information' },
        { id: 2, title: 'CSS', desc: 'CSS is for design' },
        { id: 3, title: 'JavaScript', desc: 'JavaScript is for interactive' },
      ],
    };
  }

  render() {
    console.log('App render');
    var _title,
      _desc = null;

    if (this.state.mode === 'welcome') {
      _title = this.state.welcome.title;
      _desc = this.state.welcome.desc;
    } else if (this.state.mode === 'read') {
      _title = this.state.contents[0].title;
      _desc = this.state.contents[0].desc;
    }
    // console.log('render', this); // render 함수 안에서 this는 컴포넌트 자신을 가리킨다.
    return (
      <div className='App'>
        {/* <Subject
          title={this.state.subject.title}
          sub={this.state.subject.sub}
        ></Subject> */}
        <header>
          <h1>
            <a
              href='/'
              onClick={function (e) {
                // console.log('event in', this); // undefined

                return;
                console.log(e);
                e.preventDefault(); // 페이지가 전환되지 않는다. 새로고침❌
                // this.state.mode = 'welcome'; // ⚠️ Error
                // 1. 이벤트가 호출됐을 때 실행되는 함수 안에서는 this의 값이 컴포넌트 자기 자신을 가리키지 않고 아무 값도 세팅되어있지 않다.
                // => 이럴 때는 bind(this)를 사용하기
                // 2. 리액트는 state가 바뀐 걸 모르기 때문에 아무 일도 일어나지 않는다.
                // => this.setState 사용하기
                this.setState({
                  mode: 'welcome',
                });
              }} // bind(this)는 App이라는 컴포넌트 자체를 가리키는 객체를 onClick 함수 안으로 주입해서 함수 안에서 this는 그 객체가 되게 만든다.
            >
              {this.state.subject.title}
            </a>
          </h1>
          {this.state.subject.sub}
        </header>
        <TOC data={this.state.contents}></TOC>
        <Content title={_title} desc={_desc}></Content>
      </div>
    );
  }
}

export default App;
