# ReduxStudy
## Redux란?

---

React의 Component State를 별도의 전용 장소인 store에 보관하여 관리하여 

상태 관리를 쉽게 할 수있게 해주는 상태관리 라이브러리

## Redux의 특징

---

1. Applcation의 State를 1개로 유지하여 App의 복잡성을 낮춘다.
2. Applicition의 State값의 의도치 않은 변화를 차단하여 App을 예측가능 할 수 있도록 해준다.
3. Component에서 State에 접근하려면 Dispatcher와 Reducer를 사용하여 간접적으로 접근해야 한다.

    State 내부의 data는 getState()를 통해서만 참조 할 수 있다.

    State 내부의 data에 변화가 있을경우 이를 참조는 모든 component가 반영 할 수 있도록 제어한다

## Redux Store의 구조

---
![image](https://user-images.githubusercontent.com/71309053/116190050-e83fde00-a764-11eb-911a-bdf46b768238.png)

**State**: Applicaition에 관련된 상태 정보
**Reducer** : state와 action을 매개변수로 사용하여 새로운 state값을 return 해준다. 

**render** : Store 밖에서 state값을 참조하는 기능 

**Dispath** : reducer를 호출하여 state값을 변경하고 subscribe를 호출하여 render를 호출 

**action** : dispatch 함수를 통해 전달되는 객체 

**Subscribe** : State값이 변경될때마다 render를 호출하는 함수 getState : render에서 State의 값을 가져오기 위한 함수

## React-Redux 연동
Redux를 사용하여 React의 State를 효율적으로 관리할 수 있다.
이때 store를 다루는 Component는 Store만을 담당하는 container Component와 기능을 담당하는 Presentation Component로 구분하여 재사용성을 높일 수 있다.

react-redux 패지키를 사용하여 복잡한 구성을 간단하게 처리할 수 있다.
Provider Component에 App Component를 종속시켜 store를 전역으로 처리 할 수 있다.
connect()() : connect()함수를 통해 반환된 함수가 Component를 매개변수로 받아 presentation component를 생성