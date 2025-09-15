import styles from './header.module.css'; // Importando os estilos específicos do cabeçalho do jogo

// Componente de cabeçalho do jogo da cobrinha
// Este componente exibe o título do jogo e uma breve descrição de como jogar
export default function Header() {
  return (
    <header className={styles.header}>
      <h1>Snake Game</h1>
      <p>Alimente a cobrinha utilizando as setas do teclado.</p>
    </header>
  );
}
