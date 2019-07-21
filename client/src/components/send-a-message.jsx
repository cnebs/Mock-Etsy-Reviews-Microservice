import React         from "react";
import Container     from 'react-bootstrap/Container'
import Row           from 'react-bootstrap/Row';
import Col           from 'react-bootstrap/Col';

const SendAMessage = (props) => {
  return (

    <Container className="reviewsSendAMessageContainer">
      <Row>
        <Col md={1}>
          <Row>
            <img className="reviewAvatar"src={props.sellerAvatar} alt="Seller Avatar"/>
          </Row>
        </Col>
        <Col className="reviewsSendAMessageTextContainer"md={11}>
          <Row>
            <span className="reviewsSendAMessageLineOne">
              <span className="reviewsSendAMessageHaveAQuestion">Have a question about the item?</span>
              <span 
                className="reviewsSendAMessageButton"
                onClick={props.handleSendAMessageClick}>
                  Send a message.
              </span>
            </span>
          </Row>
          <Row>
            <span className="reviewsSendAMessageLineTwo">
              <span className="reviewsSendAMessageSellerUsuallyResponds">This seller usually responds</span>
              <span className="reviewsSendAMessageWithin">within a few hours.</span>
            </span>
          </Row>
        </Col>
      </Row>
    </Container>

  )
}

export default SendAMessage;