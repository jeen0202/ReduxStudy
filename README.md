# ReduxStudy

## Redux란?
React의 Component State를 별도의 전용 장소인 store에 보관하여 관리하여 상태 관리를 쉽게 할 수있게 해주는
상태관리 라이브러리
## Redux의 특징
1. Componet의 State 관리
    Applcation의 State를 1개로 유지하여 App의 복잡성을 낮춘다.
    Applicition의 State값의 의도치 않은 변화를 차단하여 App을 예측가능 할 수 있도록 해준다.
    Component에서 State에 접근하려면 Dispatcher와 Reducer를 사용하여 간접적으로 접근해야 한다.
    State 내부의 data는 getState()를 통해서만 참조 할 수 있다.
    State 내부의 data에 변화가 있을경우 이를 참조는 모든 component가 반영 할 수 있도록 제어한다.
    