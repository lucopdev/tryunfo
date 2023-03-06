import React from 'react';

class Form extends React.Component {
  render() {
    const {
      cardName,
      cardDescription,
      cardAttr1, cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
      hasTrunfo,
      isSaveButtonDisabled,
      onInputChange,
      onSaveButtonClick
    } = this.props;

    return (
      <form>
        <fieldset>
          <label>
            Nome da Carta:
            <input
              value={ cardName }
              onChange={ onInputChange }
              data-testid="name-input"
              type="text"
            />
          </label>
        </fieldset>

        <fieldset>
          <label>
            Descrição:
            <textarea
              value={ cardDescription }
              onChange={ onInputChange }
              data-testid="description-input"
              type="text"
            />
          </label>
        </fieldset>

        <fieldset>
          <label>
            Primeiro Atributo:
            <input
              value={ cardAttr1 }
              onChange={ onInputChange }
              data-testid="attr1-input"
              type="number"
            />
          </label>
        </fieldset>

        <fieldset>
          <label>
            Segundo Atributo:
            <input
              value={ cardAttr2 }
              onChange={ onInputChange }
              data-testid="attr2-input"
              type="number"
            />
          </label>
        </fieldset>

        <fieldset>
          <label>
            Terceiro Atributo:
            <input
              value={ cardAttr3 }
              onChange={ onInputChange }
              data-testid="attr3-input"
              type="number"
            />
          </label>
        </fieldset>

        <fieldset>
          <label>
            Imagem:
            <input
              value={ cardImage }
              onChange={ onInputChange }
              data-testid="image-input"
              type="text"
            />
          </label>
        </fieldset>

        <fieldset>
          <label>
            Raridade:
            <select
              value={ cardRare }
              onChange={ onInputChange }
              data-testid="rare-input"
            >
              <option>normal</option>
              <option>raro</option>
              <option>muito raro</option>
            </select>
          </label>
        </fieldset>

        <fieldset>
          <label>
            Super Trunfo:
            <input
              checked={ cardTrunfo }
              onChange={ onInputChange }
              data-testid="trunfo-input"
              type="checkbox"
            />
          </label>
        </fieldset>

        <button
          data-testid="save-button"
          disabled={ isSaveButtonDisabled }
          onClick={ onSaveButtonClick }
        >
          Salvar
        </button>
      </form>
    );
  }
}

export default Form;
