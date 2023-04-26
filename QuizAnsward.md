## 마지막으로 풀어 본 때 : 2023-04-24(일)

### Next.js 의 목표와 장점은?
* <b>Pre-rendering</b> : 서버에서 사전에 렌더링을 하기 때문에 브라우저에서 js 기능을 정지 시켜도 렌더링된 페이지를 볼 수 있다.(리액트에선 불가능) <U>각 페이지별로 사전 렌더링 방식을 설정할 수 있다.</U>
* 다양한 내장 컴포넌트로 보다 나은 개발 경험을 제공
	- Link : 브라우저 내장 태그(`<a>`) 보다 빠름. 전체 페이지를 로딩하지 않음. 빌드 단계에서 Prefetching 적용.
	- Image : 레이아웃 누적 변동을 방지하는 방식으로 로딩, 각 페이지에 필요한 이미지만 로딩하여 사이트 성능 개선
	- Head
	- Script : 로딩 타이밍 조절 가능. 로딩 시 콜백 함수 설정 가능.
* SSG, SSR 양쪽을 모두 지원하여 렌더링 성능 개선 : 사전 로딩
* 자동으로 코드 분할
* 웹팩, 바벨 등을 통한 번들링 필요 없음
* SSG 를 지원하기 때문에 SEO 최적화 가능
* 데이터베이스와 연결 용이
* FastRefresh 가 제공되는 개발환경 v
* prefetching 으로 최적화된 CSR
* css, sass, css in js 를 지원하는 라이브러리 내장

### Next.js 내장 컴포넌트의 종류와 기능은?
* Link
* Head
* Image
* Script

### Next.js 에서 Style 을 핸들링하는 방법들은?
* 전역
* 로컬
* 레이아웃

### Next.js 에서 사용할 수 있는 page 제공흐름과 각 장단점은? 각 흐름을 사용하는 방법은?
* SSG with data / without data
* SSR with data / without data
* CSR

### Next.js 에서 정적 HTML, Javascript, `<Link />`가  로딩되는 순서는?
* HTML -> Javascript -> `<Link />`

### SSG 와 SSR 의 차이는? 언제 SSG 를 쓰고 언제 SSR 을 써야 하는가?
* HTML 렌더링 타이밍 : 빌드 vs 요청 시
* <b>사용자의 요청 전에 렌더링이 가능한가?</b>

### getStaticProps 의 기본적인 작성법과 주의해야 할 점은?
* async 여야 하고 <b>page 에서 export 되어야 한다.</b>