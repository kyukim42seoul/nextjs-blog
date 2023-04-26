This is a starter template for [Learn Next.js](https://nextjs.org/learn).

2023-04-17(월)

<html> 태그 아래로 스타일을 적용했을 때 <Link> 로 라우팅하니까 스타일이 사라지지 않는 원리를 더 자세히 알고 싶다.
<Link> 를 누른 순간 서버 쪽에서 해당 컴포넌트를 찾고 라우팅을 하면, 서버에서 해당 컴포넌트를 렌더링 후 다시 보내주지 않나? 그런데 서버에서 새로 렌더링했을 컴포넌트에 왜 이전 스타일이 남아있나?
=> 후에 Link, routing, prefetching 에 대해 좀 더 알아보자

Link => https://nextjs.org/docs/api-reference/next/link
Routing => https://nextjs.org/docs/routing/introduction

Static File Server => https://nextjs.org/docs/basic-features/static-file-serving

Automatic Image Optimization => https://nextjs.org/docs/basic-features/image-optimization
Image => https://nextjs.org/docs/api-reference/next/image

Head => https://nextjs.org/docs/api-reference/next/head

Script => https://nextjs.org/docs/basic-features/script

_app.js => https://nextjs.org/docs/advanced-features/custom-app
* file for wrap all components. Using for routing or global style.
* need to restart dev server after add this file.

- 2023-04-18(화) 복습
이어서... => https://nextjs.org/learn/basics/assets-metadata-css/polishing-layout 

2023-04-18(화)

거의 2시간을 복습에 할애해서 스타일 다듬고 tailwind 나 postCSS, sass 사용하는 방법 안내 정도 밖에 없었다.

여기서부터... => https://nextjs.org/learn/basics/data-fetching

2023-04-19(수)

### ServerSideGeneration
* 외부 데이터를 가져 올 메소드 작성(ex. lib/posts.js)  
	=> `page 컴포넌트`에서 반환되는 컴포넌트 상위에서 `export async function getStaticProps() { const Data = getDataMethod() ... return {external Data}}` 작성  
	=> `page 컴포넌트`에서 props(ex. `const Home = (data) => {... return <div>...</div>}`) 로 반환된 데이터 흡수 및 사용. 
* `getStaticProps()` 는 <U>오직 page 에서만 export 될 수 있다.</U>

### ServerSideRendering
* `getServerSideProps()`

### ClientSideRendering
* [SWR](https://swr.vercel.app/ko) 추천 << 버셀이 만든 기능이라 더 추천하는 듯 ㅋㅋ

[사족] : 그치... 대쉬보드나 유저에게 특화된 페이지는 SEO 가 필요 없지...!

### Dynamic Routes
* SSG with Dynamic Routes
	- getStaticPaths()
	- getStaticProps()
	- 와... 대박... 정적 경로를 바로 만들어준다! 당연히 SSG 로 페이지도 서버에서 렌더링 된다...


2023-04-24(월)
* TroubleShooting
	- 노드 모듈에 포함된 `<Date />` 컴포넌트에서 환경(Server/Client)에 따라 `한국 표준시` 라는 문장을 `Korean Standard Time`과 `한국 표준시` 로 번역해서 Next.js 의 디버거에 걸렸다. SSR 과 CSR 의 컨텐츠 차이 에러가 떴다.
	- 해결 : `<Date />` 의 옵션으로 해결하고자 했으나 마땅한 옵션을 찾지 못해 해당 컴포넌트를 제외하고 `{postDate}` 로 컨텐츠에 바로 적어버렸다.

2023-04-26(수)

### [API route](https://nextjs.org/docs/api-routes/introduction)
* API endpoint 를 위해 사용
* page 와 마찬가지로 동적 생성 가능

### [PreviewMode](https://nextjs.org/docs/advanced-features/preview-mode)

