import React from 'react';
import Form from './components/Form';
import Card from './components/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      cardName: '',
      cardDescription: '',
      cardAttr1: '',
      cardAttr2: '',
      cardAttr3: '',
      cardImage: '',
      cardRare: '',
      cardTrunfo: false,
      hasTrunfo: false,
      isSaveButtonDisabled: true,
    };
  }

  isPossibleSum = () => {
    const { cardAttr1, cardAttr2, cardAttr3 } = this.state;
    let possibleSum = true;
    const attMax = 90;
    const attSumMax = 210;

    if ((Number(cardAttr1)
    + Number(cardAttr2)
    + Number(cardAttr3)) > attSumMax) possibleSum = false;

    if (cardAttr1 > attMax
      || cardAttr2 > attMax
      || cardAttr3 > attMax) possibleSum = false;

    if (cardAttr1 < 0
      || cardAttr2 < 0
      || cardAttr3 < 0) possibleSum = false;
    return possibleSum;
  };

  handleErrors = () => {
    const { cardName, cardDescription, cardImage, cardRare } = this.state;
    const errorsList = [
      !cardName.length,
      !cardDescription.length,
      !cardImage.length,
      !cardRare.length,
      !this.isPossibleSum(),
    ];
    const noErrors = errorsList.every((error) => error === false);
    this.setState({
      isSaveButtonDisabled: !noErrors,
    });
  };

  onInputChange = ({ target }) => {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name]: value,
    }, this.handleErrors);
  };

  onSaveButtonClick = () => {

  };

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
      hasTrunfo,
      isSaveButtonDisabled,
    } = this.state;

    return (
      <div>
        <h1>Tryunfo</h1>
        <main className="app-main">
          <Form
            className="form-component"
            cardName={ cardName }
            cardDescription={ cardDescription }
            cardAttr1={ cardAttr1 }
            cardAttr2={ cardAttr2 }
            cardAttr3={ cardAttr3 }
            cardImage={ cardImage }
            cardRare={ cardRare }
            cardTrunfo={ cardTrunfo }
            hasTrunfo={ hasTrunfo }
            isSaveButtonDisabled={ isSaveButtonDisabled }
            onInputChange={ this.onInputChange }
            onSaveButtonClick={ this.onSaveButtonClick }
          />
          <Card
            className="card-component"
            cardName={ cardName }
            cardDescription={ cardDescription }
            cardAttr1={ cardAttr1 }
            cardAttr2={ cardAttr2 }
            cardAttr3={ cardAttr3 }
            cardImage={ cardImage }
            cardRare={ cardRare }
            cardTrunfo={ cardTrunfo }
          />
        </main>
      </div>
    );
  }
}

export default App;
