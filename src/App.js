import React from 'react';
import Form from './components/Form';
import Card from './components/Card';
import CardList from './components/CardList';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      filterInput: '',
      cardBoard: [],
      cardName: '',
      cardDescription: '',
      cardAttr1: '',
      cardAttr2: '',
      cardAttr3: '',
      cardImage: '',
      cardRare: 'normal',
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

    if (Number(cardAttr1) > attMax
      || Number(cardAttr2) > attMax
      || Number(cardAttr3) > attMax) possibleSum = false;

    if (Number(cardAttr1) < 0
      || Number(cardAttr2) < 0
      || Number(cardAttr3) < 0) possibleSum = false;
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

  testHasTrunfo = () => {
    const { cardBoard } = this.state;
    const findedTrunfo = cardBoard.find((card) => card.cardTrunfo === true);
    if (findedTrunfo) {
      this.setState({
        hasTrunfo: true,
      });
    } else {
      this.setState({
        hasTrunfo: false,
      });
    }
  };

  onSaveButtonClick = (event) => {
    event.preventDefault();
    const {
      cardName,
      cardDescription,
      cardAttr1, cardAttr2,
      cardAttr3, cardImage,
      cardRare,
      cardTrunfo,
    } = this.state;

    const addCard = {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
    };
    this.setState((currentState) => (
      { cardBoard: [...currentState.cardBoard, addCard],
        cardName: '',
        cardDescription: '',
        cardAttr1: 0,
        cardAttr2: 0,
        cardAttr3: 0,
        cardImage: '',
        cardRare: 'normal',
        cardTrunfo: false,
        isSaveButtonDisabled: true,
      }
    ), this.testHasTrunfo);
  };

  onclickDelete = (index) => {
    const { cardBoard } = this.state;
    const cardBoardCPY = cardBoard.slice();
    cardBoardCPY.splice(index, 1);
    this.setState({
      cardBoard: cardBoardCPY,
    }, this.testHasTrunfo);
  };

  searchCard = ({ target }) => {
    const { value } = target;
    this.setState({
      filterInput: value,
    });
  };

  filteredCardList = () => {
    const { cardBoard, filterInput } = this.state;
    return cardBoard.filter((card) => {
      console.log(card.cardName.toUpperCase().includes(filterInput));
      if (filterInput === '') return cardBoard;
      return card.cardName.toLowerCase().includes(filterInput.toLowerCase());
    });
  };

  render() {
    const {
      filterInput,
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
        <h1 className="hero-title">Tryunfo</h1>
        <main className="app-main">
          <section className="insert-card">
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
          </section>
          <section className="search-section">
            <label>
              Pesquise um card
              <input
                data-testid="name-filter"
                className="search"
                type="text"
                name="filterInput"
                value={ filterInput }
                onChange={ this.searchCard }
              />
            </label>
          </section>
          <section className="card-board">
            { this.filteredCardList()
              .map((card, index) => (
                <CardList
                  key={ card.cardName }
                  card={ card }
                  onclickDelete={ () => this.onclickDelete(index) }
                />
              ))}
          </section>
        </main>
      </div>
    );
  }
}

export default App;
