import React from 'react';
import PropTypes from 'prop-types';
import './Form.css';

class Form extends React.Component {
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
      onInputChange,
      onSaveButtonClick,
    } = this.props;

    return (
      <main className="form-container">
        <form className="form-main" onSubmit={ onSaveButtonClick }>
          <fieldset className="input-group mb-3">
            <span className="input-group-text">
              Nome da Carta:
            </span>
            <input
              className="form-control"
              name="cardName"
              value={ cardName }
              onChange={ onInputChange }
              data-testid="name-input"
              type="text"
            />
          </fieldset>

          <fieldset className="input-group mb-3">
            <span className="input-group-text">
              Descrição:
            </span>
            <textarea
              className="form-control"
              name="cardDescription"
              value={ cardDescription }
              onChange={ onInputChange }
              data-testid="description-input"
              type="text"
            />
          </fieldset>

          <fieldset className="input-group mb-3">
            <span className="input-group-text">
              Primeiro Atributo:
            </span>
            <input
              className="form-control"
              name="cardAttr1"
              value={ cardAttr1 }
              onChange={ onInputChange }
              data-testid="attr1-input"
              type="number"
            />
          </fieldset>

          <fieldset className="input-group mb-3">
            <span className="input-group-text">
              Segundo Atributo:
            </span>
            <input
              className="form-control"
              name="cardAttr2"
              value={ cardAttr2 }
              onChange={ onInputChange }
              data-testid="attr2-input"
              type="number"
            />
          </fieldset>

          <fieldset className="input-group mb-3">
            <span className="input-group-text">
              Terceiro Atributo:
            </span>
            <input
              className="form-control"
              name="cardAttr3"
              value={ cardAttr3 }
              onChange={ onInputChange }
              data-testid="attr3-input"
              type="number"
            />
          </fieldset>

          <fieldset className="input-group mb-3">
            <span className="input-group-text">
              Imagem:
            </span>
            <input
              className="form-control"
              name="cardImage"
              value={ cardImage }
              onChange={ onInputChange }
              data-testid="image-input"
              type="text"
            />
          </fieldset>

          <section className="select-check-container">
            <span className="select-span">
              Raridade
            </span>
            <select
              className="form-select"
              aria-label="Default select example"
              name="cardRare"
              value={ cardRare }
              onChange={ onInputChange }
              data-testid="rare-input"
            >
              <option value="normal">normal</option>
              <option value="raro">raro</option>
              <option value="muito raro">muito raro</option>
            </select>

            <section className="checkbox-container">
              {
                hasTrunfo ? <em>Você já tem um Super Trunfo em seu baralho</em>
                  : (
                    <fieldset className="checkbox-fieldset">
                      <span>Super Trunfo?</span>
                      <input
                        className="checkbox"
                        name="cardTrunfo"
                        checked={ cardTrunfo }
                        onChange={ onInputChange }
                        data-testid="trunfo-input"
                        type="checkbox"
                      />
                    </fieldset>
                  )
              }
            </section>
          </section>
          <button
            className="save-button"
            data-testid="save-button"
            disabled={ isSaveButtonDisabled }
            type="submit"
          >
            Salvar
          </button>
        </form>
      </main>
    );
  }
}

Form.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
  hasTrunfo: PropTypes.bool.isRequired,
  isSaveButtonDisabled: PropTypes.bool.isRequired,
  onInputChange: PropTypes.func.isRequired,
  onSaveButtonClick: PropTypes.func.isRequired,
};

export default Form;
