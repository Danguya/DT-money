import { Container,  Content} from "./styles";
import logoImg from '../../assets/logo.svg'

interface HeaderProps {
  onOpenNewTransactionMOdal: () => void;
}
export function Header({onOpenNewTransactionMOdal}:HeaderProps) {
  
  return (
    <Container>
      <Content>
        <img src={logoImg} alt="dt money" />
        <button 
          type="button"
          onClick={onOpenNewTransactionMOdal}
        >
          Nova Transação
        </button>
      </Content>
    </Container>
  )
}