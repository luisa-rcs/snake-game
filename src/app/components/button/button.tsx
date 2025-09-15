import { ButtonHTMLAttributes } from 'react'; // Importando o tipo ButtonHTMLAttributes do React para definir as propriedades do botão
import styles from './button.module.css'; // Importando os estilos do botão

// Componente de botão reutilizável para o jogo da cobrinha
// Este componente recebe um rótulo (label) e outras propriedades de botão HTML
interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
} 

export default function Button({ label, ...rest }: ButtonProps) {
  return (
    <button className={styles.button} {...rest}>
      {label}
    </button>
  );
}
