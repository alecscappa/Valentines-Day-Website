// ─── Get overlay elements first ───────────────────────────────────────────────

// ─── Puzzle data ────────────────────────────────────────────────────────────
const puzzle = {
  rows: 19,
  cols: 18,

  /*grid: [
    [null,null,null,null,null,null,'L',null,null,null,null,null,null,null,null,null,null,null],
    [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],
    [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],
    [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],
    [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],
    [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],
    [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],
    [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],
    [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],
    [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],
    [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],
    [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],
    [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],
    [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],
    [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],
    [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],
    [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],
    [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],
    [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],
  ],*/
  grid: [
    [null,null,null,null,null,null,'S',null,null,null,null,null,null,null,null,null,null,null],
    [null,null,null,null,null,null,'T',null,null,null,null,null,null,null,null,null,null,null],
    [null,null,null,null,null,null,'E',null,null,null,null,null,null,null,null,null,null,null],
    [null,null,null,null,null,null,'G',null,null,null,null,null,null,null,null,null,null,null],
    [null,null,null,null,null,'W','O','N','D','E','R','W','O','M','A','N', null, null],
    [null,null,null,null,null,null,'S', null,null,null,null,null,null,null,null,null,null,null],
    [null,null,null,null,null,'K','A','R','A','O','K','E',null,null,null,null,null,null],
    [null,null,null,null,null,null,'U',null,null,null,null,null,null,null,null,null,null,null],
    [null,null,null,'K',null,null,'R','P','D',null,null,null,null,null,null,null,null,null],
    [null,null,null,'I',null,null,'U',null,null,null,null,null,null,null,null,null,null,'V'],
    ['S','H','Y','N','E','S','S','B','O','Y',null,null,null,null,'L','A','R','A'],
    [null,null,null,'O',null,'E',null,null,'N',null,null,null,null,null,null,'R',null,'L'],
    [null,null,null,'K',null,'X',null,null,'E',null,null,null,'A',null,null,'C',null,'E'],
    [null,null,null,'U',null,'Y',null,null,'P','U','R','P','L','E','R','A','I','N'],
    [null,null,null,'N',null,null,null,null,'I',null,null,null,'E',null,null,'D',null,'T'],
    [null,null,null,'I',null,null,null,'P','E','R','F','E','C','T',null,'E',null,'I'],
    [null,null,null,'Y',null,null,null,null,'C',null,null,null,null,null,null,null,null,'N'],
    [null,null,null,'A',null,null,null,'D','E','A','D','P','O','O','L',null,null,'E'],
    [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,'S'],
  ],
  clues: {
    down: [
      "1. My Favourite Dinosaur (11)",
      "4. Where we went on our first date - 2 (10)",
      "6. Today (10)",
      "8. What song is you (4)",
      "9. The reason I hugged you (8)",
      "11. Where we went on our first date - 3 (6)",
      "12. The love of your life (4)"
    ],
    across: [
      "2. Your Favourite Super Hero (11)",
      "3. Where we went on our first date - 1 (7)",
      "5. Where we met (3)",
      "7. What song is Alec (10)",
      "10. The love of my life (4)",
      "13. A song we sang together (10)",
      "14. The first song I posted with you (7)",
      "15. The first movie we watched in a cinema (8)"
    ]
  }
};

const clueNumbers = [
  { number: 1,  row: 0,  col: 6  },
  { number: 2,  row: 4,  col: 5  },
  { number: 3,  row: 6,  col: 5  },
  { number: 4,  row: 8,  col: 3  },
  { number: 5,  row: 8,  col: 6  },
  { number: 6,  row: 9,  col: 17 },
  { number: 7,  row: 10, col: 0  },
  { number: 8,  row: 10, col: 5  },
  { number: 9,  row: 10, col: 8  },
  { number: 10, row: 10, col: 14 },
  { number: 11, row: 10, col: 15 },
  { number: 12, row: 12, col: 12 },
  { number: 13, row: 13, col: 8  },
  { number: 14, row: 15, col: 7  },
  { number: 15, row: 17, col: 7  },
];

// ─── Build word list ─────────────────────────────────────────────────────────
// Each word knows its cells so we can do proper boundary-aware navigation
const WORDS = [];
clueNumbers.forEach(({ number, row, col }) => {
  const grid = puzzle.grid;
  const R = puzzle.rows, C = puzzle.cols;

  // across: starts here if no letter to left, has letter to right
  const startsAcross = (col === 0 || !grid[row][col - 1]) && col + 1 < C && grid[row][col + 1];
  // down: starts here if no letter above, has letter below
  const startsDown   = (row === 0 || !grid[row - 1][col]) && row + 1 < R && grid[row + 1][col];

  if (startsAcross) {
    const cells = [];
    let cc = col;
    while (cc < C && grid[row][cc]) { cells.push({ r: row, c: cc }); cc++; }
    WORDS.push({ number, dir: 'across', cells });
  }
  if (startsDown) {
    const cells = [];
    let rr = row;
    while (rr < R && grid[rr][col]) { cells.push({ r: rr, c: col }); rr++; }
    WORDS.push({ number, dir: 'down', cells });
  }
});

const ACROSS_WORDS = WORDS.filter(w => w.dir === 'across');
const DOWN_WORDS   = WORDS.filter(w => w.dir === 'down');

function wordContaining(r, c, dir) {
  return WORDS.find(w => w.dir === dir && w.cells.some(cell => cell.r === r && cell.c === c));
}

// ─── State ───────────────────────────────────────────────────────────────────
let currentDir  = 'across';
let currentWord = ACROSS_WORDS[0];

// ─── Render grid ─────────────────────────────────────────────────────────────
const crosswordEl = document.getElementById("crossword");
crosswordEl.classList.add("crossword");
crosswordEl.style.gridTemplateColumns = `repeat(${puzzle.cols}, 32px)`;

// inputs[r][c] = <input> or null
const inputs = Array.from({ length: puzzle.rows }, () => Array(puzzle.cols).fill(null));

puzzle.grid.forEach((row, r) => {
  row.forEach((letter, c) => {
    const cell = document.createElement("div");
    cell.classList.add("cell");

    if (letter === null) {
      cell.classList.add("black");
    } else {
      const clue = clueNumbers.find(n => n.row === r && n.col === c);
      if (clue) {
        const numEl = document.createElement("span");
        numEl.classList.add("number");
        numEl.textContent = clue.number;
        cell.appendChild(numEl);
      }

      const input = document.createElement("input");
      input.maxLength = 1;
      input.dataset.correct = letter;
      input.autocomplete = "off";
      input.spellcheck = false;

      input.addEventListener("focus",   () => onFocus(r, c, input));
      input.addEventListener("click",   () => onClick(r, c, input));
      input.addEventListener("keydown", e  => onKeyDown(e, r, c, input));
      input.addEventListener("input",   ()  => onInput(r, c, input));

      cell.appendChild(input);
      inputs[r][c] = input;
    }

    crosswordEl.appendChild(cell);
  });
});

// ─── Active clue banner ───────────────────────────────────────────────────────
const activeClueBanner = document.getElementById("active-clue");

function updateBanner() {
  if (!currentWord || !activeClueBanner) return;
  const dir = currentWord.dir === 'across' ? 'Across' : 'Down';
  const clueList = currentWord.dir === 'across' ? puzzle.clues.across : puzzle.clues.down;
  const clueText = clueList.find(c => c.startsWith(`${currentWord.number}.`)) || '';
  activeClueBanner.textContent = `${dir}: ${clueText}`;
}

// ─── Word highlighting ────────────────────────────────────────────────────────
function highlightWord(word, activeR, activeC) {
  // Clear all
  for (let r = 0; r < puzzle.rows; r++)
    for (let c = 0; c < puzzle.cols; c++)
      if (inputs[r][c])
        inputs[r][c].parentElement.classList.remove("highlight", "active-cell");

  if (!word) return;
  word.cells.forEach(({ r, c }) => {
    if (inputs[r][c]) inputs[r][c].parentElement.classList.add("highlight");
  });
  if (inputs[activeR]?.[activeC])
    inputs[activeR][activeC].parentElement.classList.add("active-cell");
}

// ─── Focus & click ────────────────────────────────────────────────────────────
function onFocus(r, c, input) {
  // Prefer current direction; fall back to the other if no word this way
  const word = wordContaining(r, c, currentDir)
            || wordContaining(r, c, currentDir === 'across' ? 'down' : 'across');
  if (word) { currentWord = word; currentDir = word.dir; }
  highlightWord(currentWord, r, c);
  updateBanner();
}

function onClick(r, c, input) {
  // Second click on same cell → toggle direction
  if (document.activeElement === input) {
    const other = currentDir === 'across' ? 'down' : 'across';
    const otherWord = wordContaining(r, c, other);
    if (otherWord) {
      currentDir  = other;
      currentWord = otherWord;
      highlightWord(currentWord, r, c);
      updateBanner();
    }
  }
}

// ─── Keyboard ────────────────────────────────────────────────────────────────
function onKeyDown(e, r, c, input) {
  if (e.key === "Backspace") {
    e.preventDefault();
    if (input.value) {
      input.value = "";
    } else {
      moveCursor(r, c, -1);
    }
    return;
  }
  // Arrow keys: move one step and lock direction
  if (e.key === "ArrowRight") { e.preventDefault(); setDir('across'); stepArrow(r, c+1, 'across'); }
  if (e.key === "ArrowLeft")  { e.preventDefault(); setDir('across'); stepArrow(r, c-1, 'across'); }
  if (e.key === "ArrowDown")  { e.preventDefault(); setDir('down');   stepArrow(r+1, c, 'down'); }
  if (e.key === "ArrowUp")    { e.preventDefault(); setDir('down');   stepArrow(r-1, c, 'down'); }
}

function setDir(dir) {
  currentDir = dir;
}

function stepArrow(r, c, dir) {
  if (r < 0 || r >= puzzle.rows || c < 0 || c >= puzzle.cols) return;
  if (!inputs[r][c]) return;
  // Update word for new position
  const w = wordContaining(r, c, dir) || wordContaining(r, c, dir === 'across' ? 'down' : 'across');
  if (w) currentWord = w;
  inputs[r][c].focus();
}

function onInput(r, c, input) {
  input.value = input.value.toUpperCase().slice(-1);
  if (!input.value) return;
  checkSolved();
  moveCursor(r, c, 1);
}

// ─── Cursor movement ──────────────────────────────────────────────────────────
function moveCursor(r, c, step) {
  if (!currentWord) return;
  const cells = currentWord.cells;
  const pos   = cells.findIndex(cell => cell.r === r && cell.c === c);
  if (pos === -1) return;

  if (step === 1) {
    // Skip filled cells, stop at first empty one in this word
    for (let i = pos + 1; i < cells.length; i++) {
      const { r: nr, c: nc } = cells[i];
      if (!inputs[nr][nc].value) {
        inputs[nr][nc].focus();
        return;
      }
    }
    // Word done — jump to next word in same direction
    jumpToNextWord();
  } else {
    // Backspace: go back one cell regardless of fill
    for (let i = pos - 1; i >= 0; i--) {
      const { r: nr, c: nc } = cells[i];
      if (inputs[nr][nc]) { inputs[nr][nc].focus(); return; }
    }
  }
}

function jumpToNextWord() {
  const list = currentDir === 'across' ? ACROSS_WORDS : DOWN_WORDS;
  const idx  = list.findIndex(w => w === currentWord);
  const next = list[(idx + 1) % list.length];
  currentWord = next;
  const target = next.cells.find(({ r, c }) => !inputs[r][c].value) || next.cells[0];
  inputs[target.r][target.c].focus();
}

// ─── Win check ────────────────────────────────────────────────────────────────
function checkSolved() {
  for (let r = 0; r < puzzle.rows; r++)
    for (let c = 0; c < puzzle.cols; c++)
      if (inputs[r][c] && inputs[r][c].value !== inputs[r][c].dataset.correct) return;
  onPuzzleSolved();
}

function onPuzzleSolved() {
  document.body.style.background = "linear-gradient(135deg, #ffd6e5, #ff9ec4)";
  document.getElementById("videoOverlay").classList.add("show");
}

// ─── Clue list ────────────────────────────────────────────────────────────────
const cluesEl = document.getElementById("clues");
cluesEl.innerHTML = `
  <p><strong>Across</strong></p>
  ${puzzle.clues.across.map(c => `<p>${c}</p>`).join("")}
  <p><strong>Down</strong></p>
  ${puzzle.clues.down.map(c => `<p>${c}</p>`).join("")}
`;

// ─── Highlight CSS (injected, won't clash with your style.css) ────────────────
const style = document.createElement("style");
style.textContent = `
  .cell.highlight input     { background: #fce4ec !important; }
  .cell.active-cell input   { background: #f48fb1 !important; }
  #active-clue {
    min-height: 1.6em;
    font-size: 1em;
    color: #d66a8c;
    font-style: italic;
    margin-bottom: 8px;
  }
`;
document.head.appendChild(style);

// ─── Start ────────────────────────────────────────────────────────────────────
const first = ACROSS_WORDS[0].cells[0];
inputs[first.r][first.c].focus();

// ─── Button listeners ─────────────────────────────────────────────────────────
const videoOverlay = document.getElementById("videoOverlay");

document.getElementById("loveBtn").addEventListener("click", () => {
  onPuzzleSolved();
});

document.getElementById("closeVideo").addEventListener("click", () => {
  videoOverlay.classList.remove("show");
});