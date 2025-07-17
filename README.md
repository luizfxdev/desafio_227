# Enigma do Cofre do Mago 🔮

Uma aplicação web interativa que resolve o enigma mágico do cofre do mago, calculando as somas mínima e máxima possíveis de uma sequência de números.

## ✨ Funcionalidades

- **Interface moderna** com tema de magia e mistério
- **Validação de entrada** para garantir exatamente 5 números positivos
- **Cálculo instantâneo** das somas mínima e máxima
- **Explicação detalhada** do processo de cálculo
- **Design responsivo** que funciona em dispositivos móveis
- **Animações mágicas** nos botões
- **Efeitos visuais** com fundo temático

## 🛠️ Tecnologias Utilizadas

- HTML5
- CSS3 (com animações e responsividade)
- JavaScript Vanilla

## 🚀 Como Usar

1. Insira 5 números positivos separados por vírgula no campo de entrada
   - Exemplo: `1, 3, 5, 7, 9`
2. Clique no botão **DESVENDAR** para resolver o enigma
3. Veja o resultado com a menor e maior soma possível
4. Confira os detalhes do cálculo abaixo do resultado
5. Use **RETORNAR** para limpar e tentar uma nova sequência

## 📝 Exemplo de Saída

Para a entrada `1, 3, 5, 7, 9`:
Solução: (16, 24)

Menor soma: 16 (25 - 9)
Maior soma: 24 (25 - 1)
Sequência ordenada: [1, 3, 5, 7, 9]


## 🎨 Design Features

- Background dinâmico com tema de magia
- Botões com efeitos de brilho e animação
- Container com vidro fosco (glassmorphism)
- Cores temáticas (roxos, verdes e vermelhos)
- Layout responsivo para todos os dispositivos

## 📱 Responsividade

O design se adapta a:
- Desktop (container alinhado à esquerda)
- Tablets (centralizado com menos padding)
- Celulares (botões em coluna, texto ajustado)

## 🌟 Destaques do Código

- Função pura para resolver o enigma (`solveMageSafe`)
- Validação robusta da entrada do usuário
- Formatação clara do resultado e cálculos
- Animações CSS performáticas
- Sem dependências externas (Vanilla JS)

## 📜 O Enigma

"Quando a sequência é ordenada do menor ao maior, o segredo está em somar todos os números, exceto um, para descobrir a menor e a maior soma possível."

⚔️ **Regras:**
- A lista deve conter exatamente 5 números inteiros
- Todos os números devem ser positivos
- O retorno é no formato (menor_soma, maior_soma)
