import Board from '@/app/components/board/board'; // Componente do tabuleiro do jogo
import Header from '@/app/components/header/header'; // Componente do cabeçalho do jogo
import './globals.css'; // Estilos globais da aplicação

export default function Home() {
  return (
    <main className="container">
      <Header />
      <Board />
    </main>
  );
}
