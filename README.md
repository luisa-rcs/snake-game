<<<<<<< HEAD
🐍 Snake Game
<div align="center">
  <img src="https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white" alt="Next.js" />
  <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" alt="React" />
  <img src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript" />
  <img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white" alt="CSS3" />
</div>
<div align="center">
  <h3> Um jogo da cobrinha clássico desenvolvido com tecnologias modernas </h3>
  <p><em>Baseado no design do Figma Community</em></p>
</div>

# Design Original
Este projeto foi desenvolvido com base no design disponível na comunidade do Figma:
Snake Game Animation - https://www.figma.com/community/file/860723633860171598 
O design original serviu como inspiração para criar uma versão funcional e interativa do Snake Game para desktop.

# Funcionalidades
*Jogabilidade Clássica* Movimente a cobrinha com as setas do teclado
*Sistema de Comida* Colete itens para crescer e aumentar sua pontuação
*Sistema de Pontuação* Acompanhe seu progresso em tempo real
*Detecção de Colisão* Game over ao colidir com paredes ou com o próprio corpo
*Reiniciar Jogo* Funcionalidade para começar uma nova partida
*Design Responsivo* Interface adaptada para diferentes tamanhos de tela

# Tecnologias Utilizadas
Next.js - Framework React para produção
React - Biblioteca para construção de interfaces
TypeScript - Superset JavaScript com tipagem estática
CSS Modules - Estilização com escopo local
React Hooks - useState, useEffect, useCallback para gerenciamento de estado


# Estrutura do Projeto

```
src/
├── app/
│   ├── components/
│   │   ├── board/
│   │   │   ├── board.tsx              
│   │   │   └── board.module.css       
│   │   ├── button/
│   │   │   ├── button.tsx             
│   │   │   └── button.module.css      
│   │   └── header/
│   │       ├── header.tsx             
│   │       └── header.module.css      
│   ├── hooks/
│   │   └── useSnakeGame.ts            
│   ├── globals.css                    
│   ├── layout.tsx                     
│   └── page.tsx                       

```

# Como Jogar

Iniciar: Clique no botão "Iniciar" para começar o jogo
Movimentar: Use as setas do teclado para controlar a cobrinha

⬆️ Seta para Cima - Move para cima
⬇️ Seta para Baixo - Move para baixo
⬅️ Seta para Esquerda - Move para esquerda
➡️ Seta para Direita - Move para direita


*Objetivo* Colete a comida (quadrados vermelhos) para crescer e aumentar sua pontuação
*Cuidado* Evite colidir com as paredes ou com o próprio corpo da cobrinha
*Reiniciar* Clique em "Reiniciar" para jogar novamente


# Arquitetura do Código

## Hook Customizado (useSnakeGame)

Gerenciamento de Estado: Controla tabuleiro, cobrinha, direção, comida e pontuação
Lógica do Jogo: Implementa movimentação, detecção de colisão e geração de comida
Eventos de Teclado: Captura e processa as teclas direcionais

## Componentes React

*Board:* Renderiza o tabuleiro e controles do jogo
*Header:* Exibe título e instruções
*Button:* Componente reutilizável para ações

## Estilização

CSS Modules: Escopo local para evitar conflitos de estilos
Design System: Cores e espaçamentos consistentes
Responsividade: Layout adaptável para diferentes dispositivos

# Desenvolvedora
<div align="center">
[Luísa Silva]
Linkedin: https://www.linkedin.com/in/luísa-silva-dev/
Contato: (31) 99953-3581
</div>

<div align="center">
  <p>🐍 Divirta-se jogando Snake Game!</p>
</div>
=======
# snake-game
Snake game simples construído com Next.js e TypeScript
>>>>>>> b3d5be956e5d57cecbbd1acd76e9ba9f5b9c5c02
