import styled from 'styled-components'

export const StyledTable = styled.main`
  width: 100%;
  display: flex;
  max-width: 1120px;
  margin: 4rem auto 0;
  padding: 0 1.5rem;
  border-radius: 6px;

  table {
    width: 100%;
    border-collapse: collapse;

    tr {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr 1fr;
      gap: 16px;
      padding: 20px 32px;
      background: #29292e;
      height: 66px;
      border-radius: 6px;
      margin-bottom: 10px;
    }
  }
`

interface PriceHighLightProps {
  variant: 'income' | 'outcome'
}

export const PriceHighLight = styled.span<PriceHighLightProps>`
  color: ${(props) => (props.variant === 'income' ? 'green' : 'red')};
`
