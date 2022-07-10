# 📌 React Simple Practice

[생활코딩](https://www.inflearn.com/course/react-%EC%83%9D%ED%99%9C%EC%BD%94%EB%94%A9/)

## 개발환경 Setup

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
