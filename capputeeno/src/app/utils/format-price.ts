export default function formattedValue(value:number) {
    const reais = Math.floor(value / 100); // Obtém o valor em reais, ignorando os centavos
    const centavos = value % 100; // Obtém o valor dos centavos
    
    // Formata o valor em reais e centavos no formato desejado
    const valorFormatado = `R$ ${reais},${centavos.toString().padStart(2, '0')}`;
    
    return valorFormatado;
  }