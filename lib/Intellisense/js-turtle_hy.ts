/**
 *   A tartaruga move-se para a frente, com o número de passos indicado
 *   https://hanumanum.github.io/js-turtle/   
 *
 *   @param steps o número de passos da tartaruga
 *   @return void
 */
declare function forward(steps: number): void;



/**
 *   A tartaruga roda para a esquerda
 *   https://hanumanum.github.io/js-turtle/
 *
 *   @param angle o ângulo para o qual a tartaruga deve rodar
 *   @return void
 */
declare function left(angle: number): void;



/**
 *   A tartaruga roda para a direita
 *   https://hanumanum.github.io/js-turtle/
 *
 *   @param angle o ângulo para o qual a tartaruga deve rodar
 *   @return void
 */
declare function right(angle: number): void;


/**
 *   Define a espessura das linhas
 *   https://hanumanum.github.io/js-turtle/
 *
 *   @param thickness a espessura da linha
 *   @return void
 */
declare function width(thickness: number): void;


/**
 *   Define a cor das linhas
 *   https://hanumanum.github.io/js-turtle/
 *
 *   @param r o primeiro componente do código de cor (vermelho),
 *            ou o nome da cor, 
 *            ou o código hexadecimal, 
 *            ou um array preenchido com os valores RGB da cor
 *   @param g o segundo componente do código de cor (verde)
 *   @param b o terceiro componente do código de cor (azul)
 *   @param alpha a opacidade/transparência da cor, no intervalo de 0 a 1
 *   @return void
 */
declare function color(r: string|number[], g?: number, b?: number, alpha?: number): void;



/**
 *   Altera a posição da tartaruga de acordo com as coordenadas, sem desenhar linha
 *   https://hanumanum.github.io/js-turtle/
 *
 *   @param x a coordenada x 
 *   @param y a coordenada y
 *   @return void
 */
declare function ir(x: number, y: number): void;


/**
 *   Levanta o lápis; os comandos forward() executados depois disso moverão a tartaruga, mas não desenharão linhas
 *   https://hanumanum.github.io/js-turtle/
 *
 *   @return void
 */
declare function penup(): void;


/**
 *   Baixa o lápis
 *   https://hanumanum.github.io/js-turtle/
 *
 *   @return void
 */
declare function pendown(): void;



/**
 *   Limpa a tela/tela de desenho
 *   https://hanumanum.github.io/js-turtle/
 *
 *   @return void
 */
declare function clear(): void;



/**
 *   Desenha um sistema de coordenadas na tela, com o intervalo indicado
 *   https://hanumanum.github.io/js-turtle/
 *
 *   @param step o "passo" ou intervalo do sistema de coordenadas
 *   @return void
 */
declare function showGrid(step: number): void;


/**
 *   Escolhe uma cor aleatória
 *   https://hanumanum.github.io/js-turtle/
 *
 *   @return void
 */
declare function randomColor_h(): void;