# 📌 React Simple Practice

[생활코딩](https://www.inflearn.com/course/react-%EC%83%9D%ED%99%9C%EC%BD%94%EB%94%A9/)

## 📁 개발환경 Setup

### npm

```bash
npm install -g create-react-app
sudo npm install create-react-app # 권한 문제로 오류가 날 시
create-react-app -V # 버전 확인
mkdir react-app
cd react-app
create-react-app .
```

### start

```bash
npm run start
```

### build

> 실서버 환경: 실제로 서비스할 때는 build 디렉토리 사용하기

```bash
npm run build
```

### serve

```bash
npm install -g serve # 웹서버 설치
npx serve -s build # build directory를 document root로 설정
```

<br/>

## 📁 컴포넌트 제작

### HTML

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

### React

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
