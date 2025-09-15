import { useCallback, useEffect, useRef, useState } from 'react';

// Hook customizado para gerenciar a lógica do jogo da cobrinha
// Este hook encapsula a lógica do jogo, incluindo o estado do tabuleiro, a cobrinha, a direção, a comida, o estado do jogo (se está rodando ou não) e a pontuação.
export interface Position {
  x: number;
  y: number;
}

export type Cell = 'empty' | 'snake' | 'food';
export type Direction = 'up' | 'down' | 'left' | 'right';

const BOARD_SIZE = 20;

// Tamanho do tabuleiro do jogo
interface UseSnakeGame {
  board: Cell[][];
  startGame: () => void;
  isRunning: boolean;
  score: number;
}

// Função para criar um tabuleiro vazio
function createEmptyBoard(): Cell[][] {
  return Array.from({ length: BOARD_SIZE }, () =>
    Array.from({ length: BOARD_SIZE }, () => 'empty')
  );
}

// Função para gerar comida em uma posição aleatória que não colida com a cobrinha
// Ela garante que a comida não apareça na mesma posição que qualquer segmento da cobrinha
function generateFood(snake: Position[]): Position {
  let newFood: Position;
  do {
    newFood = {
      x: Math.floor(Math.random() * BOARD_SIZE),
      y: Math.floor(Math.random() * BOARD_SIZE),
    };
  } while (snake.some((segment) => segment.x === newFood.x && segment.y === newFood.y));
  return newFood;
}

// Direção oposta para evitar que a cobrinha se mova na direção contrária imediatamente
// Isso é importante para evitar colisões instantâneas com a própria cobrinha
const OPPOSITE: Record<Direction, Direction> = {
  up: 'down',
  down: 'up',
  left: 'right',
  right: 'left',
};

// Função principal do hook que retorna o estado e as funções necessárias para o jogo
// Ela inicializa o tabuleiro, a cobrinha, a direção, a comida, o estado do jogo e a pontuação.
// Também define funções para criar um tabuleiro vazio, gerar comida, atualizar o tabuleiro,
export default function useSnakeGame(): UseSnakeGame {
  const [board, setBoard] = useState<Cell[][]>(createEmptyBoard());
  const [snake, setSnake] = useState<Position[]>([{ x: 10, y: 10 }]);
  const [food, setFood] = useState<Position>(() => generateFood([{ x: 10, y: 10 }]));
  const [isRunning, setIsRunning] = useState<boolean>(false);
  const [score, setScore] = useState<number>(0);

  // Fila de direções
  // Usada para armazenar as direções que o jogador pressiona
  // A fila permite que o jogador pressione várias teclas rapidamente e a cobrinha se mova na direção correta
  const directionQueue = useRef<Direction[]>(['right']);
  const lastDirection = useRef<Direction>('right');
  const isStarting = useRef(false);

  // Hook para atualizar o tabuleiro sempre que a cobrinha ou a comida mudarem
  // Ele cria um novo tabuleiro vazio e preenche com os segmentos da cobrinha e a comida
  const updateBoard = useCallback((): void => {
    const newBoard = createEmptyBoard();
    snake.forEach((segment) => {
      newBoard[segment.y][segment.x] = 'snake';
    });
    newBoard[food.y][food.x] = 'food';
    setBoard(newBoard);
  }, [snake, food]);

  const moveSnake = useCallback((): void => {

    // Consome a próxima direção da fila, se houver
    let nextDirection = directionQueue.current[0];
    if (directionQueue.current.length > 1) {
      directionQueue.current.shift();
      nextDirection = directionQueue.current[0];
    }
    lastDirection.current = nextDirection;

    // Calcula a nova posição da cabeça da cobrinha com base na direção atual
    // Se a direção for 'up', diminui o valor de y; se for 'down', aumenta o valor de y; se for 'left', diminui o valor de x; se for 'right', aumenta o valor de x
    const head = snake[0];
    const newHead: Position = { ...head };

    if (nextDirection === 'up') newHead.y -= 1;
    if (nextDirection === 'down') newHead.y += 1;
    if (nextDirection === 'left') newHead.x -= 1;
    if (nextDirection === 'right') newHead.x += 1;

    // Verifica se a nova cabeça colidiu com as paredes do tabuleiro ou com ela mesma
    const hitWall =
      newHead.x < 0 || newHead.x >= BOARD_SIZE || newHead.y < 0 || newHead.y >= BOARD_SIZE;
    const hitSelf = snake.some((segment) => segment.x === newHead.x && segment.y === newHead.y);
    
    // Se colidiu com as paredes ou com ela mesma, para o jogo e exibe uma mensagem de Game Over
    if (hitWall || hitSelf) {
      setIsRunning(false);
      alert('Você machucou a cobrinha! Game Over ✝');
      return;
    }
    
    // Se não colidiu, atualiza a posição da cobrinha
    const newSnake = [newHead, ...snake];

    if (newHead.x === food.x && newHead.y === food.y) {
      setScore((prev) => prev + 1);
      setFood(generateFood(newSnake));
    } else {
      newSnake.pop();
    }

    setSnake(newSnake);
  }, [food, snake]);

  // Hook para lidar com eventos de teclado
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      let newDirection: Direction | null = null;
      if (e.key === 'ArrowUp') newDirection = 'up';
      if (e.key === 'ArrowDown') newDirection = 'down';
      if (e.key === 'ArrowLeft') newDirection = 'left';
      if (e.key === 'ArrowRight') newDirection = 'right';

      if (
        newDirection &&
        newDirection !== OPPOSITE[lastDirection.current] &&
        directionQueue.current[directionQueue.current.length - 1] !== newDirection
      ) {
        directionQueue.current.push(newDirection);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Hook para iniciar o jogo
  // Ele define um intervalo que chama a função moveSnake a cada 200ms enquanto o
  useEffect(() => {
    if (!isRunning) return;
    const interval = setInterval(() => {
      moveSnake();
    }, 200);
    return () => clearInterval(interval);
  }, [isRunning, moveSnake]);

  // Hook para atualizar o tabuleiro sempre que a cobrinha ou a comida mudarem
  // Ele chama a função updateBoard para atualizar o estado do tabuleiro
  useEffect(() => {
    updateBoard();
  }, [snake, food, updateBoard]);

  const startGame = (): void => {
    if (isStarting.current) return; // Evita múltiplos starts
    isStarting.current = true;
    const initialSnake: Position[] = [{ x: 10, y: 10 }];
    setSnake(initialSnake);
    setFood(generateFood(initialSnake));
    setScore(0);
    setIsRunning(true);
    directionQueue.current = ['right'];
    lastDirection.current = 'right';
    setTimeout(() => {
      isStarting.current = false;
    }, 500); // Libera para novo start após meio segundo
  };
  
  return {
    board,
    startGame,
    isRunning,
    score,
  };
}