import styled from 'styled-components'

type BotaoProps = {
  principal?: boolean
  fontSize?: string
}

const Botao = styled.button<BotaoProps>`
  background-color: ${(props) => (props.principal ? 'green' : 'blue')};
  font-size: ${(props) => props.fontSize || '16px'};
`

const BotaoPerigo = styled(Botao)`
  background-color: red;
  color: white;
`

function Teste() {
  return (
    <>
      <Botao fontSize="18px" principal>
        Olá
      </Botao>
      <Botao principal={false}>Cancelar</Botao>
      <BotaoPerigo fontSize="28px">PERIGO</BotaoPerigo>
    </>
  )
}

export default Teste
