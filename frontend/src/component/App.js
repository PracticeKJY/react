class App extends React.Component {
  //선언형
  //React 처럼 생각하기

  //component state 상태변수만들기
  state = {
    headline: "React Application",
    isToggle: false,
    isLoading: !true,
    hasError: null,
    // {
    //   message: "서버에서 적절하지 않은 요청이 있다는 응답이 있었습니다.",
    // }, //null 혹은 error객체 {stack, message}
    // isDisabled: false,
  };

  originalHeadline = this.state.headline;
  willUpdateHeadline = "new headline❗";
  //this는 과연 컴포넌트의 인스턴스(엘리먼트)인가?
  // console.log(this); //undefined  / constructor을 통해 bind를 걸어준 이후론 제대로 찾음
  // this는 undefined이므로, 대상을 찾을수 없고 에러를 내뱉음 / 바인딩이후엔 위치를 잘 찾아줌

  //handler

  //왜 화살표함수쓴거야? this랑 연관
  handleChangeHeadline = () => {
    let assignHeadlineContent = "";
    const { isToggle } = this.state;
    //조건 처리
    //문(보기편하게만들것인가)
    // if (this.state.isToggle) {
    //   assignHeadlineContent = this.originalHeadline;
    //   this.setState({
    //     isToggle: false,
    //     headline: this.originalHeadline,
    //   });
    // } else {
    //   this.setState({
    //     isToggle: true,
    //     headline: this.willUpdateHeadline,
    //   });
    // }

    //식(빠르게칠것인가)
    isToggle
      ? this.setState({ isToggle: false, headline: this.originalHeadline })
      : this.setState({
          isToggle: true,
          headline: this.willUpdateHeadline,
        });

    //setState로 상태변수 업데이트하기
    // this.setState({
    //   headline: "new headline❗",
    //   isDisabled: true,
    // });
  };

  render() {
    // console.log(this);
    const { headline, isDisabled, isToggle, hasError } = this.state;

    if (this.state.isLoading) {
      return <div role="alert">데이터 로딩중 ...</div>;
    }
    if (this.state.hasError) {
      return <div role="alert">{hasError}</div>;
    }

    return (
      <div data-component="App">
        <h1>{headline}</h1>
        {/* React의 JSX(React 엘리먼트)에 연결한 이벤트 리스너(함수)는 언제 실행되는가? */}
        <button
          type="button"
          onClick={this.handleChangeHeadline}
          //버튼비활성화 상태 업데이트하기
          // disabled={isDisabled}
        >
          {isToggle ? "오리지널 헤드라인으로 변경" : "새로운 헤드라인변경"}
        </button>
      </div>
    );
  }
}

export default App;
