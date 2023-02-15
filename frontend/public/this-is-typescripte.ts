//JavaScript any = 쉽게 검색할 수 있고, 모든 타입이 될 수 있지만,
//TypeScript 는 type system이 필요함 ()
// x: number 같이 자신이 반환될 타입을 명시해주는걸 000 이라함

const sum = (x: number, y: number): number => {
  return x + y;
};

sum(20, "101");
