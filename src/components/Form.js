import React from 'react';

class Form extends React.Component {
  render() {
    return (
      <form>
        <fieldset>
          <label>
            Nome da Carta:
            <input data-testid="name-input" type="text" />
          </label>
        </fieldset>

        <fieldset>
          <label>
            Descrição:
            <textarea data-testid="description-input" type="text" />
          </label>
        </fieldset>

        <fieldset>
          <label>
            Primeiro Atributo:
            <input data-testid="attr1-input" type="number" />
          </label>
        </fieldset>

        <fieldset>
          <label>
            Segundo Atributo:
            <input data-testid="attr2-input" type="number" />
          </label>
        </fieldset>

        <fieldset>
          <label>
            Terceiro Atributo:
            <input data-testid="attr3-input" type="number" />
          </label>
        </fieldset>

        <fieldset>
          <label>
            Imagem:
            <input data-testid="image-input" type="text" />
          </label>
        </fieldset>

        <fieldset>
          <label>
            Raridade:
            <select data-testid="rare-input">
              <option>normal</option>
              <option>raro</option>
              <option>muito raro</option>
            </select>
          </label>
        </fieldset>

        <fieldset>
          <label>
            Super Trunfo:
            <input data-testid="trunfo-input" type="checkbox" />
          </label>
        </fieldset>

        <button data-testid="save-button">Salvar</button>
      </form>
    );
  }
}

export default Form;
