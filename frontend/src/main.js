// React 컴포넌트 vs 엘리먼트
import { Group } from "./learn/react.components.js";

// 함수 타입
// React 월드
// React 엘리먼트 생성 과정에서는 반드시 React.createElement API

// 사용법 1
// 웹브라우저가 인식 가능한 HTML 표준 엘리먼트 이름 (문자 값)
// console.log(React.createElement('details'));
// console.log(React.createElement('details'));
// 사용법 2
// 컴포넌트 함수 또는 클래스 참조 전달
// console.log(React.createElement(Group));

//진짜DOM = index.HTML 안의 body 하드코뒹    {blue}
//가상DOM = 객체일뿐 = react.createELement
//reactDom. 이 뭐하는 친구였지? = React가 한 결과(가상 DOM 생성)을 실제 DOM에 랜더링(mount) 하는 것
//root에다 랜더링 시킬거야. 근데 그걸 누구한테 시킬거면 reactdom한테 시킬건데,
//reactdomroot는 화면에 랜더링할 수 있는 능력이 있는 객체를 생성한것
//render의 능력은 하나의 elem만 render할 수있는데,
//children은 [객체] 로 묶을 수 있으니까, ( ...childern),
//25줄의 선언을 [React.createElement(함수명객체참조)] 이런 식으루 하자

// ReactDOM이 하는 일은 React가 한 결과(가상 DOM 생성)를  {blue}
// 실제 DOM에 렌더링(마운트)하는 것입니다.
// 컴포넌트 함수 또는 클래스 참조 전달
// console.log(React.createElement(Group));

// ReactDOM이 하는 일은 React가 한 결과(가상 DOM 생성)를
// 실제 DOM에 렌더링(마운트)하는 것입니다.

// ReactDOM의 절차
// 1. ReactDOM의 루트를 생성한다. (실제 DOM 요소를 전달)
// ReactDOM.createRoot(document.getElementById('root'));
// 2. 생성된 ReactDOM의 루트 요소(객체)를 통해 실제 DOM에 렌더링 한다.
// reactDomRoot.render();
// const React루트객체 = ReactDOM.루트요소생성하기(실제 DOM 요소)
// React루트객체.렌더링(React 엘리먼트);

const reactDomRoot = ReactDom.createRoot(document.getElementById("root"));
reactDomRoot.render(
  // HTML, XML
  <div role="group" lang="en">
    Group Element
  </div>
  // React.createElement(Group)
);
