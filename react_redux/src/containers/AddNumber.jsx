import AddNumber from "../components/AddNumber";
import React, {Component} from 'react';
import {connect} from 'react-redux';

export default connect()(AddNumber);
// export default class extends Component{
//     render(){
//         return <AddNumber onClick={function(size){
//             store.dispatch({
//                 type:'INCREMENT',
//                 size:size
//               });
//         }}></AddNumber>
//     }
// }