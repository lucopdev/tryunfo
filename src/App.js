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
      trunfoFilterInput: false,
      rareFilterInput: 'todas',
      nameFilterInput: '',
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
    this.setState({ isSaveButtonDisabled: !noErrors });
  };

  onInputChange = ({ target }) => {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({ [name]: value }, this.handleErrors);
  };

  testHasTrunfo = () => {
    const { cardBoard } = this.state;
    const findedTrunfo = cardBoard.find((card) => card.cardTrunfo === true);
    if (findedTrunfo) {
      this.setState({ hasTrunfo: true });
    } else {
      this.setState({ hasTrunfo: false });
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
    this.setState({ cardBoard: cardBoardCPY }, this.testHasTrunfo);
  };

  nameFilteredList = () => {
    const { cardBoard, nameFilterInput } = this.state;
    return cardBoard.filter((card) => (
      card.cardName.toLowerCase().includes(nameFilterInput.toLowerCase())));
  };

  rareFilteredList = () => {
    const { cardBoard, rareFilterInput } = this.state;
    return cardBoard.filter((card) => (
      card.cardRare.toLowerCase() === rareFilterInput.toLowerCase()));
  };

  stFilteredList = () => {
    const { cardBoard, trunfoFilterInput } = this.state;
    return cardBoard.filter((card) => card.cardTrunfo === trunfoFilterInput);
  };

  searchFilter = () => {
    const { cardBoard, nameFilterInput, rareFilterInput, trunfoFilterInput } = this.state;
    if (nameFilterInput !== '') return this.nameFilteredList();
    if (rareFilterInput !== 'todas') return this.rareFilteredList();
    if (trunfoFilterInput === true) return this.stFilteredList();
    return cardBoard;
  };

  render() {
    const {
      trunfoFilterInput,
      rareFilterInput,
      nameFilterInput,
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
            <label className="search-name-label">
              Busca por nome
              <input
                disabled={ trunfoFilterInput }
                data-testid="name-filter"
                className="search-name-input"
                type="text"
                name="nameFilterInput"
                value={ nameFilterInput }
                onChange={ this.onInputChange }
              />
            </label>
            <span className="rare-search-span">Buscar raridade</span>
            <select
              className="rare-search-select"
              disabled={ trunfoFilterInput }
              name="rareFilterInput"
              data-testid="rare-filter"
              value={ rareFilterInput }
              onChange={ this.onInputChange }
            >
              <option value="todas">todas</option>
              <option value="normal">normal</option>
              <option value="raro">raro</option>
              <option value="muito raro">muito raro</option>
            </select>
            <label className="st-search-label">
              Super Trunfo
              <input
                className="st-search-input"
                name="trunfoFilterInput"
                value={ trunfoFilterInput }
                data-testid="trunfo-filter"
                type="checkbox"
                onChange={ this.onInputChange }
              />
            </label>
          </section>
          <section className="card-board">
            { this.searchFilter()
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
