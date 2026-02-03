let highestZ = 1;

class Paper {
  holdingPaper = false;

  prevMouseX = 0;
  prevMouseY = 0;

  currentPaperX = 0;
  currentPaperY = 0;

  init(paper) {
    paper.addEventListener('mousedown', (e) => {
      this.holdingPaper = true;

      paper.style.zIndex = highestZ++;
      
      this.prevMouseX = e.clientX;
      this.prevMouseY = e.clientY;
    });

    document.addEventListener('mousemove', (e) => {
      if (!this.holdingPaper) return;

      const velocityX = e.clientX - this.prevMouseX;
      const velocityY = e.clientY - this.prevMouseY;

      this.currentPaperX += velocityX;
      this.currentPaperY += velocityY;

      this.prevMouseX = e.clientX;
      this.prevMouseY = e.clientY;

      paper.style.transform = `translate(${this.currentPaperX}px, ${this.currentPaperY}px)`;
    });

    window.addEventListener('mouseup', () => {
      this.holdingPaper = false;
    });
  }
}

const papers = document.querySelectorAll('.paper');
papers.forEach(paper => {
  const p = new Paper();
  p.init(paper);
});
