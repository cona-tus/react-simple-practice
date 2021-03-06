# ๐ React Simple Practice

## [์ํ์ฝ๋ฉ](https://www.inflearn.com/course/react-%EC%83%9D%ED%99%9C%EC%BD%94%EB%94%A9/)

![์ํ์ฝ๋ฉ](https://cdn.inflearn.com/public/courses/324041/course_cover/c7ef7e48-adbc-4bc7-b71e-2cd19240019d/egoing_react.jpg)

<br/>

## ๐ฉโ๐ป ๋ชฉ์ฐจ

1. [๊ฐ๋ฐํ๊ฒฝ Setup](#1-๊ฐ๋ฐํ๊ฒฝ-Setup)
2. [์ปดํฌ๋ํธ ์ ์](#2-์ปดํฌ๋ํธ-์ ์)
3. [State](#3-state--key)
4. [Event](#4-event)
5. [Deployment](#5-deployment)

<br/>

## โจ ๊ฒฐ๊ณผ๋ฌผ

<details>
  <summary>๋ฏธ๋ฆฌ๋ณด๊ธฐ</summary>
    <img src="https://cdn.inflearn.com/public/files/courses/324041/96463c54-65ca-49eb-92e2-cb6cafcec06b/react.gif" alt="์ํ์ฝ๋ฉ ์ ํ๋ฆฌ์ผ์ด์" />
</details>

<details>
<summary>๋ฐ๋ก๊ฐ๊ธฐ</summary>
<a href="https://react-simple-practice.netlify.app" target="_blank">
React Simple App</a>
</details>

<br/>

## 1. ๊ฐ๋ฐํ๊ฒฝ Setup

### 1.1. npm

```bash
npm install -g create-react-app
sudo npm install create-react-app # ๊ถํ ๋ฌธ์ ๋ก ์ค๋ฅ๊ฐ ๋  ์
create-react-app -V # ๋ฒ์  ํ์ธ
mkdir react-app
cd react-app
create-react-app .
```

### 1.2. start

```bash
npm run start
```

### 1.3. build

> ์ค์๋ฒ ํ๊ฒฝ: ์ค์ ๋ก ์๋น์คํ  ๋๋ build ๋๋ ํ ๋ฆฌ ์ฌ์ฉํ๊ธฐ

```bash
npm run build
```

### 1.4. serve

```bash
npm install -g serve # ์น์๋ฒ ์ค์น
npx serve -s build # build directory๋ฅผ document root๋ก ์ค์ 
```

<br/>

## 2. ์ปดํฌ๋ํธ ์ ์

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
      // ํ๋์ ์ต์์ ํ๊ทธ๋ง ์ฌ์ฉํด์ผ ํ๋ค.
      // JS ์ฝ๋๊ฐ ์๋๊ณ , JSX!
      // JSX๋ก ์์ฑํ๋ฉด creat-react-app์ด ์๋์ผ๋ก JS ์ฝ๋๋ก ์ปจ๋ฒํํด์ค๋ค.
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
    // ์ฌ์ฉ์ ์ ์ ํ๊ทธ๋ฅผ ๋ง๋ค ์ ์๋ค.
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

๐ App.js

```js
class App extends Component {
  constructor(props) {
    super(props); // state ๊ฐ ์ด๊ธฐํ
    // 1. render ํจ์๋ณด๋ค ๋จผ์  ์คํ์ด ๋๋ค.
    // 2. ์ปดํฌ๋ํธ๋ฅผ ์ด๊ธฐํ์์ผ์ฃผ๊ณ  ์ถ์ ์ฝ๋๋ constructor ์์ ์ฝ๋๋ฅผ ์์ฑํ๋ค.
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
          // ์์ ์ปดํฌ๋ํธ์ธ App์ ์ํ๋ฅผ ํ์ ์ปดํฌ๋ํธ๋ก ์ ๋ฌํ๊ณ  ์ถ์ ๋๋
          // ์์ ์ปดํฌ๋ํธ์ state ๊ฐ์ ํ์ ์ปดํฌ๋ํธ์ props์ ๊ฐ์ผ๋ก ์ ๋ฌํ  ์ ์๋ค.
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

๐ TOC.js

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

๋ฆฌ์กํธ์์๋ props์ ๊ฐ์ด๋ state ๊ฐ์ด ๋ฐ๋๋ฉด ํด๋น๋๋ ์ปดํฌ๋ํธ์ render ํจ์๊ฐ ํธ์ถ๋๋๋ก ์ฝ์๋์ด์๋ค. ๊ณ ๋ก, ํ๋ฉด์ด ๋ค์ ๊ทธ๋ ค์ง๋ค.

```js
<a
  href='/'
  onClick={function (e) {
    e.preventDefault(); // ํ๋ฉด์ด ๋ค์ ๊ทธ๋ ค์ง ๋, ํ์ด์ง๊ฐ ์๋ก๊ณ ์นจ๋์ง ์๋๋ก ๋ง๋ ๋ค.
    this.setState({
      mode: 'welcome',
    });
  }.bind(this)}
>
  {this.state.subject.title}
</a>
```

this.state.mode = 'welcome'๋ ์ฌ์ฉํ  ์ ์๋ค.

1. ์ด๋ฒคํธ๊ฐ ํธ์ถ๋์ ๋ ์คํ๋๋ ํจ์ ์์์๋ this์ ๊ฐ์ด ์ปดํฌ๋ํธ ์๊ธฐ ์์ ์ ๊ฐ๋ฆฌํค์ง ์๊ณ  ์๋ฌด ๊ฐ๋ ์ธํ๋์ด์์ง ์๋ค.
2. `bind(this)`๋ฅผ ์ฌ์ฉํ๋ฉด, App์ด๋ผ๋ ์ปดํฌ๋ํธ ์์ฒด๋ฅผ ๊ฐ๋ฆฌํค๋ ๊ฐ์ฒด๋ฅผ onClick ํจ์ ์์ผ๋ก ์ฃผ์ํด์ ํจ์ ์์์ this๋ ๊ทธ ๊ฐ์ฒด๊ฐ ๋๊ฒ ๋ง๋ ๋ค.
3. `this.setState`๋ฅผ ์ฌ์ฉํด์ ๋ฆฌ์กํธ์๊ฒ state๊ฐ ๋ฐ๋ ๊ฒ์ ์๋ ค์ฃผ์.

<br/>

### props VS state

| props                     | state                                     |
| ------------------------- | ----------------------------------------- |
| props                     | state                                     |
| props are read-only       | state changes can be asynchronous         |
| props can not be modified | state can be modified using this.setState |

- props๋ ๋ถ๋ชจ(์์) ์ปดํฌ๋ํธ๊ฐ ์์(ํ์) ์ปดํฌ๋ํธ์๊ฒ ์ฃผ๋ ๊ฐ์ด๋ค. ์์์์ ์ง์  ์์ ํ  ์ ์๋ค. ๋ด๋ถ์ ์ผ๋ก ํ์ํ ๋ฐ์ดํฐ๋ ์ํ๋ ์ปดํฌ๋ํธ ์๊ธฐ ์์ ์ด ๊ฐ์ง๊ณ  ์๋ ๊ฐ์ธ state๋ฅผ ํตํด ๊ด๋ฆฌํ๋ค.
- props์ state ๋ชจ๋ render ํจ์ ํธ์ถ์ ์ ๋ฐํ๊ธฐ ๋๋ฌธ์, props์ state๋ฅผ ์ฌ์ฉํ์ฌ UI๋ฅผ ๋ฐ๊ฟ ์ ์๋ค.
- ์์ ์ปดํฌ๋ํธ๊ฐ ํ์ ์ปดํฌ๋ํธ๋ก ๊ฐ์ ์ ๋ฌํ  ๋๋ props๋ฅผ ์ฌ์ฉํ๋ค. ํ์ ์ปดํฌ๋ํธ๊ฐ ์์ ์ปดํฌ๋ํธ์ ๊ฐ์ ๋ฐ๊พธ๊ณ  ์ถ์ ๋๋, event๋ฅผ ํตํด์ ํ๋ค.

<br/>

## 5. Deployment

```bash
npm install netlify-cli -g
netlify deploy
netlify deploy --prod
```
