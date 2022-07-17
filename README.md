# 📌 React Simple Practice

## [생활코딩](https://www.inflearn.com/course/react-%EC%83%9D%ED%99%9C%EC%BD%94%EB%94%A9/)

![생활코딩](https://cdn.inflearn.com/public/courses/324041/course_cover/c7ef7e48-adbc-4bc7-b71e-2cd19240019d/egoing_react.jpg)

<br/>

## 👩‍💻 목차

1. [개발환경 Setup](#1-개발환경-Setup)
2. [컴포넌트 제작](#2-컴포넌트-제작)
3. [State](#3-state--key)
4. [Event](#4-event)
5. [Deployment](#5-deployment)

<br/>

## ✨ 결과물

<details>
  <summary>미리보기</summary>
    <img src="https://cdn.inflearn.com/public/files/courses/324041/96463c54-65ca-49eb-92e2-cb6cafcec06b/react.gif" alt="생활코딩 애플리케이션" />
</details>

<details>
<summary>바로가기</summary>
<a href="https://react-simple-practice.netlify.app" target="_blank">
React Simple App</a>
</details>

<br/>

## 1. 개발환경 Setup

### 1.1. npm

```bash
npm install -g create-react-app
sudo npm install create-react-app # 권한 문제로 오류가 날 시
create-react-app -V # 버전 확인
mkdir react-app
cd react-app
create-react-app .
```

### 1.2. start

```bash
npm run start
```

### 1.3. build

> 실서버 환경: 실제로 서비스할 때는 build 디렉토리 사용하기

```bash
npm run build
```

### 1.4. serve

```bash
npm install -g serve # 웹서버 설치
npx serve -s build # build directory를 document root로 설정
```

<br/>

## 2. 컴포넌트 제작

### 2.1.1. HTML

```html
<html>
  <body>
    <header>
      <h1>WEB</h1>
      World Wide Web!
    </header>

    <nav>
      <ul>
        <li><a href="1.html">HTML</a></li>
        <li><a href="2.html">CSS</a></li>
        <li><a href="3.html">JavaScript</a></li>
      </ul>
    </nav>

    <article>
      <h2>HTML</h2>
      HTML is HyperText Markup Language.
    </article>
  </body>
</html>
```

### 2.1.2 React

```js
class Subject extends Component {
  render() {
    return (
      // 하나의 최상위 태그만 사용해야 한다.
      // JS 코드가 아니고, JSX!
      // JSX로 작성하면 creat-react-app이 자동으로 JS 코드로 컨버팅해준다.
      <header>
        <h1>WEB</h1>
        World Wide Web!
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
        <h2>HTML</h2>
        HTML is HyperText Markup Language.
      </article>
    );
  }
}

class App extends Component {
  render() {
    return (
      <div className='App'>
        <Subject></Subject>
        <TOC></TOC>
        <Content></Content>
      </div>
    );
  }
}

export default App;
```

<br/>

### 2.2. props

```js
class Subject extends Component {
  render() {
    return (
      <header>
        <h1>{this.props.title}</h1>
        {this.props.sub}
      </header>
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
        <Content></Content>
      </div>
    );
  }
}
```

<br/>

## 3. State & Key

📁 App.js

```js
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
```

<br/>

📁 TOC.js

```js
class TOC extends Component {
  render() {
    var lists = [];
    var data = this.props.data;
    var i = 0;
    while (i < data.length) {
      lists.push(
        <li key={data[i].id}>
          <a href={'/content/' + data[i].id}>{data[i].title}</a>
        </li>
      );
      i = i + 1;
    }

    return (
      <nav>
        <ul>{lists}</ul>
      </nav>
    );
  }
}

export default TOC;
```

<br/>

## 4. Event

리액트에서는 props의 값이나 state 값이 바뀌면 해당되는 컴포넌트의 render 함수가 호출되도록 약속되어있다. 고로, 화면이 다시 그려진다.

```js
<a
  href='/'
  onClick={function (e) {
    e.preventDefault(); // 화면이 다시 그려질 때, 페이지가 새로고침되지 않도록 만든다.
    this.setState({
      mode: 'welcome',
    });
  }.bind(this)}
>
  {this.state.subject.title}
</a>
```

this.state.mode = 'welcome'는 사용할 수 없다.

1. 이벤트가 호출됐을 때 실행되는 함수 안에서는 this의 값이 컴포넌트 자기 자신을 가리키지 않고 아무 값도 세팅되어있지 않다.
2. `bind(this)`를 사용하면, App이라는 컴포넌트 자체를 가리키는 객체를 onClick 함수 안으로 주입해서 함수 안에서 this는 그 객체가 되게 만든다.
3. `this.setState`를 사용해서 리액트에게 state가 바뀐 것을 알려주자.

<br/>

### props VS state

| props                     | state                                     |
| ------------------------- | ----------------------------------------- |
| props                     | state                                     |
| props are read-only       | state changes can be asynchronous         |
| props can not be modified | state can be modified using this.setState |

- props는 부모(상위) 컴포넌트가 자식(하위) 컴포넌트에게 주는 값이다. 자식에서 직접 수정할 수 없다. 내부적으로 필요한 데이터나 상태는 컴포넌트 자기 자신이 가지고 있는 값인 state를 통해 관리한다.
- props와 state 모두 render 함수 호출을 유발하기 때문에, props와 state를 사용하여 UI를 바꿀 수 있다.
- 상위 컴포넌트가 하위 컴포넌트로 값을 전달할 때는 props를 사용한다. 하위 컴포넌트가 상위 컴포넌트의 값을 바꾸고 싶을 때는, event를 통해서 한다.

<br/>

## 5. Deployment

```bash
npm install netlify-cli -g
netlify deploy
netlify deploy --prod
```
