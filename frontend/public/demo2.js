/* React 컴포넌트 --------------------------------------------------------------- */

// 함수(형) 컴포넌트
function Group(props) {
  console.log(props.lang);
  console.log(props.content);

  // JSX 보간법(interpolation)
  // <element prop={value}>this is {content}</element>

  return (
    <div role="group" lang={props.lang}>
      {props.content}
    </div>
  );
}

function Group2(props) {
  console.log(props);
  console.log(props.class);
  console.log(props.ariaLabel);
  console.log(props.content);

  return (
    <div className={props.class} role="group2" aria-label={props.ariaLabel}>
      {props.content}
    </div>
  );
}

// 클래스 컴포넌트
class Logo extends React.Component {
  // 생성자
  // constructor(props) {
  //   super(props);
  // }

  // 렌더링
  render() {
    // React 엘리먼트 반환
    // return <img src="../public/assets/react-logo.svg" alt="React" />;

    // React는 99% JavaScript
    // 구조 분해 할당
    const { path, label } = this.props;
    <img src={path} alt={label} />;
  }
}

/* React DOM 렌더 ------------------------------------------------------------- */

const reactDomRoot = ReactDOM.createRoot(document.getElementById("root"));

reactDomRoot.render(
  <React.Fragment>
    <Logo label="React"></Logo>
    <Group lang="es" content="sit amet consectetur." />
    <Logo
      path="https://upload.vectorlogo.zone/logos/nextjs/images/60eff509-53dd-4280-92e7-7318fa02e934.svg"
      label="Next.js"
      unknown="아무 것도 몰라요~"
    />
    <Group lang="ru" content="Далеко-далеко за словесными горами." />
    <Group2
      class="anything"
      content="나너무졸려요 큰일났어,,,"
      ariaLabel="너무나도졸려"
    />
  </React.Fragment>
);

// reactDomRoot.render(
//   [
//     // with JSX
//     <div role="presentation" lang="ko" key="with-jsx">
//       <Logo /> 리액트
//     </div>,

//     // without JSX
//     React.createElement(
//       'div',
//       { role: 'gorup', lang: 'en', key: "without-jsx" },
//       React.createElement(Logo),
//       'React'
//     ),
//   ]
// );

// 함수의 arguments
function sum(x, y) {
  return x + y;
}

sum(10, 1000); // 1010
sum(-9, -2); // 1010

// React 컴포넌트의 Props (함수의 전달인자)
function MenuList(props) {
  // { items: [...] }
  return (
    <ul>
      <li>item 1</li>
      <li>item 2</li>
    </ul>
  );
}

// React.createElement(MenuList); // sum();

// sum(29, 103);
// React.createElement(
//   MenuList,
//   {
//     items: [
//       { id: 'menu-1', title: 'munu one'},
//       { id: 'menu-2', title: 'munu two'},
//     ]
//   }
// );

{
  /* <MenuList></MenuList>

const items = [ 
  { id: 'menu-1', title: 'munu one'},
  { id: 'menu-2', title: 'munu two'},
] */
}

{
  /* <MenuList items={items}></MenuList> */
}
