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
