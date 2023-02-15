class App extends React.Component {
  constructor(props) {
    super(props);
    //component state
    this.state = {
      headline: "React Application",
    };

    // component methods binding `this`
    this.handleChangeHeadline = this.handleChangeHeadline.bind(this);
  }

  // this.handleChangeHeadLine
  handleChangeHeadline() {
    // console.log('clicked button');
    //this는 과연 컴포넌트의 인스턴스(엘리먼트)인가?
    console.log(this); //undefined  / constructor을 통해 bind를 걸어준 이후론 제대로 찾음

    // this는 undefined이므로, 대상을 찾을수 없고 에러를 내뱉음 / 바인딩이후엔 위치를 잘 찾아줌
    this.setState({
      headline: "new headline❗",
    });
  }

  // confirmThis(){
  //  console.log(this);    // App {} 이 잘나옴!
  // }

  render() {
    // this.confirmThis();

    return (
      <div data-component="App">
        <h1>{this.state.headline}</h1>
        {/* React의 JSX(React 엘리먼트)에 연결한 이벤트 리스너(함수)는 언제 실행되는가? */}
        <button type="button" onClick={this.handleChangeHeadline}>
          헤드라인 변경
        </button>
      </div>
    );
  }
}

export default App;
