// import React, { Component } from "react";
// import ViewCards from "./Card";
// import { CardGroup} from "reactstrap"
// import APIManager from "../../Modules/APIManager";

// export default class CardList extends Component {
//     state={
//         cards: [],
//         // currentUser: ""
//     }

//     getData(){
//         APIManager.getCards("cards", this.props.currentUser)
//         .then((cards)=> {
//             this.setState({
//                 cards: cards
//             })
//         })
//     }

//     componentDidMount(){
//         this.getData()
//     }

//   render() {
//     return (
//       <div>
//         <CardGroup>
//             {this.state.cards.map(card => {
//                 <ViewCards currentUser={this.props.currentUser} card={card} {...this.props}/>
//             })
//             }
//         </CardGroup>
//       </div>
//     );
//   }
// }
