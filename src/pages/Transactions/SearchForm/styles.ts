import styled from 'styled-components'

export const SearchFormContainer = styled.form`
  display: flex;
  width: 1120px;
  margin: 4rem auto 0;
  padding: 0 1.5rem;
  border-radius: 6px;

  input {
    flex-grow: 1; /* Adicionado flex-grow: 1 */
    padding: 16px;
    background: #121214;
    border-radius: 6px;
    color: white;
  }

  button {
    display: flex;
    align-items: center;
    background: transparent;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    padding: 14px 32px;
    height: 54px;
    border: 1px solid #00b37e;
    border-radius: 6px;
    color: #00b37e;

    &:hover {
      background: ${(props) => props.theme['green-700']};
      transition: background-color 0.2s;
    }
  }
`
