import React from 'react';
import './App.css';
import Form from './components/Form';
import Card from './components/Card';

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

    if ((Number(cardAttr1) + Number(cardAttr2) + Number(cardAttr3)) > 210) possibleSum = false;
    if (cardAttr1 > 90 || cardAttr2 > 90 || cardAttr3 > 90) possibleSum = false;
    if (cardAttr1 < 0 || cardAttr2 < 0 || cardAttr3 < 0) possibleSum = false;
    return possibleSum;
  };
  
  handleErrors = () => {
    const { cardName, cardDescription, cardImage, cardRare } = this.state;
    console.log(this.isPossibleSum())
    const errorsList = [
      !cardName.length,
      !cardDescription.length,
      !cardImage.length,
      !cardRare.length,
      !this.isPossibleSum(),
    ];
    const noErrors = errorsList.every((error)=> error === false);
    this.setState({
      isSaveButtonDisabled: !noErrors,
    })
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
        <Form
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
          cardName={ cardName }
          cardDescription={ cardDescription }
          cardAttr1={ cardAttr1 }
          cardAttr2={ cardAttr2 }
          cardAttr3={ cardAttr3 }
          cardImage={ cardImage }
          cardRare={ cardRare }
          cardTrunfo={ cardTrunfo }
        />
      </div>
    );
  }
}

export default App;
