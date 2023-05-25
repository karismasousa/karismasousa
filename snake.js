document.addEventListener('DOMContentLoaded', () => {
    const canvas = document.getElementById('game-board');
    const ctx = canvas.getContext('2d');
  
    const box = 20;
    const canvasSize = 400;
    let snake = [{ x: 200, y: 200 }];
    let direction = 'right';
  
    function draw() {
      ctx.clearRect(0, 0, canvasSize, canvasSize);
  
      // Desenhar a cabeça da cobra
      ctx.fillStyle = 'green';
      ctx.fillRect(snake[0].x, snake[0].y, box, box);
  
      // Movimentar a cobra
      let headX = snake[0].x;
      let headY = snake[0].y;
  
      if (direction === 'right') headX += box;
      if (direction === 'left') headX -= box;
      if (direction === 'up') headY -= box;
      if (direction === 'down') headY += box;
  
      const newHead = { x: headX, y: headY };
  
      // Adicionar a nova cabeça à cobra
      snake.unshift(newHead);
  
      // Remover a última cauda da cobra
      snake.pop();
    }
  
    function gameLoop() {
      setInterval(() => {
        draw();
      }, 100);
    }
  
    document.addEventListener('keydown', (event) => {
      if (event.keyCode === 37 && direction !== 'right') direction = 'left';
      if (event.keyCode === 38 && direction !== 'down') direction = 'up';
      if (event.keyCode === 39 && direction !== 'left') direction = 'right';
      if (event.keyCode === 40 && direction !== 'up') direction = 'down';
    });
  
    gameLoop();
  });
  