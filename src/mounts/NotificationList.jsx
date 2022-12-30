import React from "react";
import Notification from "./Notification";

// 댓글 데이터 생성
const reservedNotifications = [
    { message : '안녕하세요, 오늘 일정 알려드립니다.', id: 1 },
    { message : '오후 수업 시간입니다.', id: 2},
    { message : '이제 곧 쉬는 시간입니다.', id: 3}
];

// 자바스크립트 타이머 객체 정보를 저장하는 변수
// setTimeout : 1회용 타이머, 지정된 시간 이후에 1번 동작, 실행 시 타이머 정보를 반환, 삭제시 clearTimeout() 사용(어차피 한번 쓰고 사라져서 잘 안쓴다.)
// setInterval : 지정된 시간마다 동작하는 타이머, 실행 시 타이머 정보를 반환, 삭제시 clearInterval() 함수를 사용
let timer;

class NotificationList extends React.Component {
    constructor(props) {
        super(props);
        
        // 현재 컴포넌트의 상태인 notifications 선언
        this.state = {
            // 빈 배열 타입인 state가 생성
            notifications: [],
        }
    }
    
    // 화면에 처음 그려질 내용
    render() {
        return (
            <div>
                {/* state의 notifications 배열을 가지고 화면을 그려준다. */}
                {/* notifications 배열의 기본값이 비었기 때문에 화면에 아무것도 그리지 않는다. */}
                {this.state.notifications.map(item => {
                    return <Notification message={item.message} key={item.id}/>;
                })}
            </div>
        );
    }
    
    // render() 함수 실행 후 동작
    // 통신대신에 타이머 사용
    componentDidMount() {
        // object 타입의 확장 표현식을 통해서 변수 notifications 를 선언하고 state의 값을 전부 대입
        const {notifications} = this.state;
        
        console.log('마운트 완료');
        
        // 타이머를 사용하여 지정된 시간마다 동작하도록 설정함
        timer = setInterval(() => {
            if (notifications.length < reservedNotifications.length) {
                const index = notifications.length;
                // 배열 notifications에 데이터를 추가
                notifications.push(reservedNotifications[index]);
                
                // state의 상태 수정
                // this.state에 있는 notifications에 현재 componentDidMount안에 있는 지역변수 notifications의
                // 데이터를 저장
                this.setState({notifications : notifications});
                console.log('데이터 추가 완료');
            } else {
                clearInterval(timer);
            }
        }, 1000);
        
    }
    
    componentDidUpdate() {
        console.log('상태 업데이트');
    }
}

export default NotificationList;