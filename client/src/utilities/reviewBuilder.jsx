import React         from "react";
import Rating        from "react-rating";
import Container     from 'react-bootstrap/Container';
import Row           from 'react-bootstrap/Row';
import Col           from 'react-bootstrap/Col';
import dateConverter from "./dateConverter.jsx"

const reviewBuilder = (data) => {
  return (
    <Container>
      <Row>
        <Col md={1}>
          <Row>
            <img className='reviewAvatar' src={typeof data.avatar === 'undefined' ? "https://www.etsy.com/images/avatars/default_avatar_75x75.png" : data.avatar}></img>
          </Row>
        </Col>
        <Col md={11}>
          <Row>
            <span className='reviewName'>{data.name}</span>  
            <span className='reviewDate'>{` ${dateConverter(data.date)}`}</span>
          </Row>
          <Row>
            <p className='reviewRating'>
              <Rating
                    className='reviewStars'
                    readonly
                    fullSymbol='fa fa-star fa-1x'
                    emptySymbol='fa fa-star-o fa-1x'
                    initialRating={data.rating}
              />
            </p>
          </Row>
          <Row>
            <p className='reviewText'>
              {data.review}
            </p>
          </Row>
          <Row>
            <Col md={{span: 1.5}}>
              <img className='reviewProductImage' src={data.productImage} />
            </Col>
            <Col>
              <Row></Row>
              <Row>
              <span className='reviewProductTitle'>{data.productTitle}</span>
              </Row>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
}

export default reviewBuilder;