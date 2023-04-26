## 요점 확인 및 복습

2023-04-18(화) : 2023-04-17(월) 학습 내용
### Next.js 는 어떤 문제를 해결하고 있는가?
* React CSR 에서 불편했던 부분들
	- 웹팩, 바벨 등을 사용한 번들링
	- 코드 분리
	- 데이터 베이스와 연결하기 위한 별도의 코드
	- 성능 향상을 위한 사전 로딩 필요성
	- SEO : 검색 최적화

### Next.js 의 목표는?
* 기존 React 개발의 불편함 해소 및 개발 경험 향상을 위한 빌트인 기능 제공

### Next.js 가 제공하는 것은?
* 직관적인 Page 기반 라우팅 << 기존 PHP 개발과 비슷
* pre-rendering(?) in SSG(Server Side Generation), SSR
* 최적화된 prefetching(?) 을 통한 클라이언트 사이드 라우팅
* 코드 분리 자동화
* 서버리스 함수로 API 엔드 포인트를 만들기 위한 API 라우트(???)
* css, sass, css in js 라이브러리 지원 기능 내장
* [Fast refresh](https://nextjs.org/docs/basic-features/fast-refresh) 가 지원되는 개발 환경
* 확장 가능

### 명령어
* npm run dev : 개발용 서버 가동

### Next.js 에서 page
* `/pages` 경로에서 export 된 리액트 컴포넌트
* 파일의 이름에 따라 자동으로 라우팅
* /pages/index.js 는 "/" 로 라우팅
* 컴포넌트은 어떤 이름이든 가질 수 있지만 반드시 default export 로 내보내야 함

### [Link](https://nextjs.org/docs/api-reference/next/link)
* HTML 태그 `<a>` 와 유사한 기능의 컴포넌트
* `Link` 를 통해 클라이언 사이드 네비게이션 가능
	- 이는 javascript 를 통해 네비게이션을 한다는 뜻이며 기본 브라우저의 네비게이션보다 빠르다.
	- 클라이언트 사이드 네비게이션 시 전체 페이지를 로드하지 않는다.
* Next.js 앱 외부의 페이지와 연결할 때는 `<a>` 태그를 사용해야 한다.

### Code Splitting and Prefetching
* Code splitting
	* 각 페이지에 필요한 코드만 로드
	* 특정 페이지에서 에러가 발생해도 나머지 앱/웹은 정상 작동
* Prefetching
	- <U>프로덕션 빌드 단계</U>에서 `Link` 가 적용된 페이지는 `Prefetching` 하여 백그라운드에서 로드되어 있다.

### Asset, Metadata, CSS
* `/public` : 정적 에셋이 들어갈 경로
* `<Image>` : image 핸들링
* `<Head>` : `<title>` 등 추가/변경
* `/pages/_document.js` : `<html>`, `<body>` 에 속성 추가/변경
* `<Script>` : 외부 스크립트 추가/변경

### Image
* 프로덕션 빌드 타이밍이 아닌 `요청 시`에 이미지 최적화 : <U>이미지가 아무리 많아도 빌드 시간이 늘어나지 않음</U>
* 이미지는 기본적으로 `lazy loading` 됨. : <U>이미지 로딩 때문에 페이지 로딩이 느려지지 않음.</U>
* CLS(누적 레이아웃 시프트)를 피할 수 있도록 이미지 로드.
* `height, width prop` 은 원하는 렌더링 크기여야하며, 비율은 원본 이미지와 같아야 한다.
* 기존 `<img>` 태그의 한계
	- 다양한 화면 크기에 대응
	- 서드파티 라이브러리로 이미지 최적화 직접 해야함
	- 이미지 로딩 타이밍 : 오로지 뷰포트에 들어갈 때에만 로딩

### Script
* 스크립트가 로딩되는 방식, 로딩 된 후의 콜백 함수 실행 등 기존 `<script>` 태그의 확장판
* Props
	- strategy : 로딩 되는 시기 제어
	- onLoad : 로딩이 완료된 직후 실행할 js 코드

### Layout
* 엄... 이건 Next.js 독자 기능이라기보다 기존 React 에서 module.css 를 활용하는 방법과 같은데...?
* 다만 Next.js 의 자동 코드 분할이 적용되어 해당 css 가 필요한 순간에 로딩되긴 한다.

### Global Styles
* `/pages/_app.js`
	- <U>추가 한 이후에 꼭 서버 재시작</U>
	- 전역 스타일은 `_app.js` 에서만 import 되어야 한다.

복습 <완>
- 무슨 복습이 1시간 48분이 걸리냐... 어제 공부한 게 2시간인데...
- 그래도 어제 예제를 작성하면서 쓱쓱 넘겼던 디테일들을 일부 잡을 수 있었다.
- 2023-04-20(목) 에 한번 더 복습하자. 21일 하면 좋지만 성국이가 오니까 미리 해두자.
- - -

2023-04-24(월) 복습 <완> : 기존 복습 내용을 훑으니 시간이 확실히 줄어든다.(1시간 48분 -> 13분). 퀴즈를 미리 좀 준비해 뒀다가 수시로 풀어야 겠다.