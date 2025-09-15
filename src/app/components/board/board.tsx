'use client';

import useSnakeGame from '@/app/hooks/useSnakeGame'; // Hook customizado com lógica do jogo
import Button from '../button/button'; // Componente de botão reutilizável
import styles from './board.module.css'; // Estilos específicos do tabuleiro do jogo
import { Cell } from '@/app/hooks/useSnakeGame'; // Tipos de célula do tabuleiro

// Componente que renderiza o tabuleiro do jogo da cobrinha
// Ele utiliza o hook useSnakeGame para obter o estado do jogo e renderiza as células
// com base nesse estado; Também inclui um botão para iniciar ou reiniciar o jogo e exibe a pontuação atual.
// O tabuleiro é uma grade de células, onde cada célula pode ser parte da cobrinha, comida ou vazia.
export default function Board() {
  const { board, startGame, isRunning, score } = useSnakeGame();

  return (
    <div className={styles.wrapper}>
      <div className={styles.board}>
        {board.flatMap((row: Cell[], rowIndex: number) =>
          row.map((cell: Cell, colIndex: number) => (
            <div
              key={`${rowIndex}-${colIndex}`}
              className={`${styles.cell} ${
                cell === 'snake'
                  ? styles.snake
                  : cell === 'food'
                  ? styles.food
                  : ''
              }`}
            />
          ))
        )}
      </div>

      <div className={styles.controls}>
        <Button label={isRunning ? 'Reiniciar' : 'Iniciar'} onClick={startGame} />
        <span className={styles.score}>Pontos: {score}</span>
      </div>
    </div>
  );
}
