Firebase 사용해서 트위터를 만들 예정
Firebase는 구글이 인수한 백엔드 시스템

이번에 사용할 내용은 
Authentication
Cloud Storage
Cloud Firestore
Hosting


이에 반해 AWS의 amplify가 있는데
REST api나 GraphQL같은 보다 나은 API가 있지만
firebase가 더 오래되어 자료가 많기 때문에 우선 사용




03. 
Firebvase를 언제 사용하고 언제 사용하지 않는가?
실제 프로젝트에는 사용하기 적합하지 않다.
구글이나 아마존에 굉장히 의존하게 되기 때문으로 보임

아이디어를 테스트하거나 처음 만들어볼 때는
Firebase나 amplify가 괜찮은 방법일 수 있다
서버를 만드는 데 시간과 돈이 적게 들기 때문



04. 
Firebase 가격
결론은 비싸지는 않음
대부분의 프로토타입이 무료영역을 벗어나지 않을 것으로 보임




1.0 firebase 연동
import { initializeApp } from "firebase/app";
const firebaseConfig = {
	...
};
export default initializeApp(firebaseConfig);



1.1 Securing the Keys
Firebase키를 github에서 숨기는 과정
급한게 아니라서 하지 않았음
보면 뭐 어때


1.2 Router setup
폴더 구조 정립
route할 페이지 설계
	Authentication
	Home
		트윗 작성
		트윗 리드
	프로파일 변경

라우터를 사용하여 어떻게 웹페이지를 보여줄 지 정하였음

처음 보는 것들
	Fragments
	Router
	Switch
	Hook으로 사용했다는 useState



2.0 Using Fireabase Auth

Router에 있는 state를 지우고 시작
Router가 하나의 용도로만 쓰여야 한다고 생각. 오로지 route만 보여줘야 함
state를 app.js로 옮기는데 대체 왜 그러는지 아직 모르겠음

경로를 지정해주어 편하게 import 하는 방법
https://create-react-app.dev/docs/importing-a-component/#absolute-imports

auth 관련 공식 문서 (가이드에 나오는 문서)
https://firebase.google.com/docs/auth/web/start?authuser=0

auth 관련 공식 문서 (API)
https://firebase.google.com/docs/reference/js/auth.md?authuser=2#getauth

Auth interface 공식 문서
https://firebase.google.com/docs/reference/js/auth.auth.md?authuser=2#auth_interface


Firebase로부터 인증 내역을 받아오는 과정을 수행하였음
영상과 달리 firebase가 버전 9이기 때문에 공식 문서와 영상의 최신 댓글을 참조하여 작성 완료



2.1 Login Form part One

로그인을 하기 위해 Firebase에서 authentication을 연결하였다.
	email
	google
	github
를 연결하였고, 특히 github는 OAuth에서 추가해주는 과정이 별도로 있었음

로그인을 하기 위한 form을 만들었고
값을 여러 기법들을 사용하여 값을 입력하면 화면에 나타나도록 수정하였다.

비구조화 할당 문법에서 Object내의 변수를 할당받는 방법을 새로 익혔음
아래와 같은 event object를
event = {
	target:{
		name:"Email",
		value:"value"
	}
}

이 문법을 통해서 name과 value라는 변수로 꺼내올 수 있다
const {target:{name,value}} = event;

https://learnjs.vlpt.us/useful/06-destructuring.html#:~:text=%EC%9D%B4%EB%B2%88%EC%97%94%20%EB%91%90%EB%B2%88%EC%A7%B8%20%EB%B0%A9%EB%B2%95%2C%20%ED%95%9C%EB%B2%88%EC%97%90%20%EB%AA%A8%EB%91%90%20%EC%B6%94%EC%B6%9C%ED%95%98%EB%8A%94%20%EB%B0%A9%EB%B2%95%EC%9D%84%20%EC%95%8C%EC%95%84%EB%B3%B4%EA%B2%A0%EC%8A%B5%EB%8B%88%EB%8B%A4


2.3 Creating Account
	Promise
	await
	async

이메일 기반 계정 만들기
https://firebase.google.com/docs/auth/web/password-auth?authuser=2&hl=ko#create_a_password-based_account


newAccount라는 useState hook을 이용해서 submit버튼을 CreateAccount또는 LogIn 중 하나를 선택한다
firebase의 createUserWithEmailAndPassword, signInWithEmailAndPassword을 사용하여 계정을 만들고
firebase에 등록이 되는지 확인한다


2.4 Log In
로그인을 했는데 로그인 창이 그대로인 상황을 해결
useState에서 auth인증 된 결과를 가져오는데 로딩 이전에 불러와서 그런것

기다린 다음에 넣어주기 위해 useEffect를 사용

onAuthStateChanged
https://firebase.google.com/docs/reference/js/auth.auth.md?authuser=2#authonauthstatechanged


initializing이 끝난 뒤에 로그인창이나 로그인이 된 home을 보여주고자 함
newAccount를 제대로 사용하지 않았는데 toggleAccount라는 함수로 문자열을 클릭해서
CreateAccount/Sign In 두가지를 선택해서 할 수 있도록 수정하였음
setNewAccount가 잘 이해가 안됨

setNewAccount((prev) => !prev) ??????


2.5 Social Login
popup, redirect 두 가지 방법으로 로그인 가능
redirect는 작업이 많다고 popup으로 

SignInWithPopup()
https://firebase.google.com/docs/reference/js/auth.md?authuser=2#signinwithpopup
example guide
https://firebase.google.com/docs/auth/web/google-signin?authuser=0

구글과 github로 로그인을 구현하였음 와 개쩜





------
# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
