# 📌 React Simple Practice

## [생활코딩](https://www.inflearn.com/course/react-%EC%83%9D%ED%99%9C%EC%BD%94%EB%94%A9/)

![생활코딩](https://cdn.inflearn.com/public/courses/324041/course_cover/c7ef7e48-adbc-4bc7-b71e-2cd19240019d/egoing_react.jpg)

<br/>

## 👩‍💻 목차

1. [개발환경 Setup](#1-개발환경-Setup)
2. [컴포넌트 제작](#2-컴포넌트-제작)
3. [State](#3-state--key)

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
