import logo from './logo.svg';
import './App.css';
// import Potato from "./Potato";
import PropTypes from "prop-types";

// props : 부모 컴포넌트에서 자식 컴포넌트로 데이터를 전달하는 매개변수
// props는 읽기 전용
// 사용법
// 컴포넌트명(props) {
//      {props.부모가 전달한 키 이름}
// }
// 컴포넌트명({ 부모가 전달한 키 이름, ... 반복}) {
//      {키 이름1}, {키 이름2}, ...
//      console.log({키 이름1})
// }
// 컴포넌트명(props) {
//      const  {키 이름, ...} = props;
//      console.log({키 이름});
// }

function Food(props) {
    console.log(props.name);
    
    return (
        <div>
            <h3>I Love {props.name}</h3>
            <h4>{props.rating} / 5.0</h4>
            <img src={props.img}></img>
        </div>
    );
}

const foodList = [
    {
        id : 1,
        name : '돈까스',
        rating : 4.5,
        image : 'https://recipe1.ezmember.co.kr/cache/recipe/2021/10/28/4e06df24f7acc52f449251b387f644981.jpg'
    },
    {
        id : 2,
        name : '돼지국밥',
        rating : 4.3,
        image: 'https://d12zq4w4guyljn.cloudfront.net/20200707070129012_photo_304feb90864a.jpg'
    },
    {
        id : 3,
        name : '햄버거',
        rating : 4,
        image : 'http://www.thekpm.com/news/photo/202201/106072_86332_1730.jpg'
    }
];

function renderFood(dish) {
    return <Food key={dish.id} name={dish.name} img={dish.image} rating={dish.rating} />;
}

function App() {
    // 이 곳은 일반적인 js 소스코드 부분
    
    // return => 화면을 생성하는 가상 DOM 부분
  return (
      // 부모 태그는 반드시 1개만 존재해야 함(자식태그는 상관없음)
      // jsx 문법에서 class라는 키워드는 자바스크립트의 클래스 키워드와 겹치기 때문에
      // 자바스크립트의 클래스와 css 선택자의 class를 구분하기 위해서 css 선택자인 class를 className으로 사용함
    <div className="App">
        <h1>리엑트 사용하기</h1>
        {/* SPA : Single Page Application, index.html 과 같은 하나의 화면 구성 파일로 모든 화면을 구성하는 웹 페이지 */}
        {/* SPA는 프론트엔드 프레임워크를 사용하여 하나의 화면에서 필요한 부분을 실시간으로 변경하여 웹을 표시함,
            해당 화면을 구성하는 요소를 컴포넌트라고 한다.*/}
        {/* 컴포넌트 : 리액트에서 화면을 구성하는 요소 */}
        {/* Food라는 컴포넌트에 변수명이 fav이고 값이 kimchi인 데이터를 전달 */}
        {/*<Food fav={"kimchi"} something={true} papapapa={["hello", 1, 2, 3, 4, true]} />*/}
        {/*<Food fav={"돈까스"} />*/}
        
        {/* {} : jsx 문법에서 {} 데이터를 표현하는데 사용함, 간단한 연산식도 사용이 가능하다. */}
        {foodList.map(dish => renderFood(dish))}
    </div>
  );
}

// 매개변수로 사용되는 데이터를 체크
// 매개변수의 이름까지 체크할 수 있다.
// isRequired : 해당 부분이 반드시 필요, 없으면 오류 발생
Food.propTypes = {
    name : PropTypes.string.isRequired,
    img : PropTypes.string.isRequired,
    rating : PropTypes.number.isRequired
};

export default App;
