import { useState } from "react";
import Modal from "react-modal";
import { Dashboard } from './components/Dashboard';
import { Header } from './components/Header';
import { NewTransactionsModal } from "./components/NewTransactionsModal";
import { GlobalStyle } from './styles/global';

Modal.setAppElement("#root");

function App() {
  const [
    isNewTransactionModalOpen, 
    setIsNewTransactionModalOpen
  ] = useState(false);

  function handleOpenNewTransactionModal(){
    setIsNewTransactionModalOpen(true);
  }
  function handleCloseNewTransactionModal(){
    setIsNewTransactionModalOpen(false);
  }

  return (
    <>
    <Header 
    onOpenNewTransactionMOdal={handleOpenNewTransactionModal}
    />
    <Dashboard />
    <NewTransactionsModal
      isOpen={isNewTransactionModalOpen}
      onRequestClose={handleCloseNewTransactionModal}
    />
    <GlobalStyle />
    </>
  );
}

export default App;
