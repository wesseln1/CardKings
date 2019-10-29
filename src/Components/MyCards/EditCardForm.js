// /* eslint react/no-multi-comp: 0, react/prop-types: 0 */
// import React, { useState, Component } from "react";
// import { Redirect } from "react-router-dom";
// import {
//   Button,
//   Modal,
//   ModalHeader,
//   ModalBody,
//   ModalFooter,
//   Card,
//   CardBody,
//   CardTitle,
//   CardText,
//   CardSubtitle,
//   CardImg
// } from "reactstrap";
// import APIManager from "../../Modules/APIManager";
// import "./CardDetails.css"

// export default class CardDetails extends Component {
//   state = {
//     modal: false,
//     edit: false,
//     cardYear: "",
    
//   };

//   toggle = () => {
//     this.setState(prevState => ({
//       modal: !prevState.modal
//     }));
//   };

//   editCard = (card) => {
//     this.setState({edit: true})
//     unEditedCard = {

//     }
//   }

//   render() {
//     return (
//       <>
//         <Button className="myCardButtons" color="primary" onClick={this.toggle}>
//           Details
//         </Button>
//         <Modal
//           isOpen={this.state.modal}
//           toggle={this.toggle}
//           className="class!"
//         >
//           <ModalHeader toggle={this.toggle}>
//             {this.props.card.card.playerName}
//           </ModalHeader>
//           <ModalBody>
//             <Card className="flexHomeCardDetails">
//               <CardImg
//               className="cardDetailImg"
//                 top
//                 width="100%"
//                 src={this.props.card.card.frontImage}
//                 alt="Card image cap"
//               />
//               <CardBody>
//                 <CardSubtitle>
//                   Position: {this.props.card.card.playerPosition}
//                 </CardSubtitle>
//                 <br></br>
//                 <CardSubtitle>
//                   Team: {this.props.card.card.cardTeam}
//                 </CardSubtitle>
//                 <br></br>
//                 <Input onChange={this.handleFeildChange} type="text" id="cardYear" disabled value={`Year: ${this.props.card.card.cardYear}`}>
//                 <Input onChange={this.handleFeildChange} type="text" id="cardBrand" disabled value={`Year: ${this.props.card.card.cardYear}`}>
//                 <Input onChange={this.handleFeildChange} type="text" id="cardCondition" disabled value={`Year: ${this.props.card.card.cardYear}`}>
//               </CardBody>
//             </Card>
//           </ModalBody>
//           <ModalFooter>
//             <Button
//               type="submit"
//               onClick={() => this.editCard(this.props.card)}
//             >
//               Edit
//             </Button>
//             <Button color="warning" className="cardDetailButton" onClick={() => this.props.deleteCard(this.props.card.id)}>Delete</Button>
//             <Button color="danger" onClick={this.toggle}>
//               Cancel
//             </Button>
//           </ModalFooter>
//         </Modal>
//       </>
//     );
//   }
// }