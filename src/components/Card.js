import React from 'react';
import PropTypes from 'prop-types';
import './Card.css';

class Card extends React.Component {
  render() {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
    } = this.props;

    return (
      <main className="card-main">
        <section className="main-section">
          <h2 className="card-title" data-testid="name-card">{ cardName }</h2>
          <div className="img-container">
            { cardTrunfo
              ? <p className="trunfo" data-testid="trunfo-card">Super Trunfo</p> : ''}
            { cardImage ? <img
              className="card-img"
              data-testid="image-card"
              src={ cardImage }
              alt={ cardName }
            /> : <div className="empty"> </div> }
          </div>
          <p
            className="description"
            data-testid="description-card"
          >
            { cardDescription }
          </p>
          <div className="ps-container">
            <div className="p-container">
              <span>Attr01 ...........................</span>
              <p data-testid="attr1-card">{ cardAttr1 }</p>
            </div>
            <div className="p-container">
              <span>Attr02 ...........................</span>
              <p data-testid="attr2-card">{ cardAttr2 }</p>
            </div>
            <div className="p-container">
              <span>Attr03 ...........................</span>
              <p data-testid="attr3-card">{ cardAttr3 }</p>
            </div>
            <p data-testid="rare-card">{ cardRare }</p>
          </div>
        </section>
      </main>
    );
  }
}

Card.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
};

export default Card;
