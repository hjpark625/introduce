1. HTML, CSS란 무엇이며 필요한 이유
  - HTML: HyperText Markup Language로 웹을 이루는 가장 기초적인 구성요소이며 웹 컨텐츠의 의미와 구조를 정의할 때 사용한다.
  - CSS: Cascading Style Sheets로 HTML이나 XML(XML의 방언인 SVG, XHTML 포함)로 작성된 문서의 표시 방법을 기술하기 위한 스타일 시트 언어이다. 
2. HTML, CSS, JavaScript의 관계
  - 간략하게 얘기하자면 HTML은 골격, CSS는 모양과 표현, JS는 기능과 동작으로 말할 수 있다. 
4. `.html,` `.css`, `.js`세 종류의 파일을 연결하는 방법
  - `.html`: <a href="1.html"></a>
  - `.css`: 
      <head>
        <link rel="stylesheet" href="style.css">
      <head>
  - `.js`:
      <head>
        <script src="main.js"></script>
      </head>
5. script 태그의 위치에 따른 차이점
  - 웹사이트는 파싱을 할 때 개발자가 코딩한 내용을 상단에서 하단으로 파싱을 하기 때문에 스크립트 태그의 위치에 따라 콘솔에 오류가 발생할 수 있다.
        이를 방지하기 위해서 async, defer를 스크립트 태그에 속성으로 덧붙여서 사용한다.
