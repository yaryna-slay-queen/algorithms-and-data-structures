function randomMatrix(rows, cols, min, max) {
  const matrix = [];

  for (let i = 0; i < rows; i++) {
    const row = [];
    for (let j = 0; j < cols; j++) {
      row.push(Math.floor(Math.random() * (max - min + 1)) + min);
    }
    matrix.push(row);
  }

  return matrix;
}
const matrix = randomMatrix(4, 4, -20, 20);
matrix.forEach(row => console.log(row.join('\t')));


//-------------Task1--------------
function first(matrix) {
  return matrix.map(row => {
    const sum = row.reduce((acc, val) => acc + val, 0);
    const mean = sum / row.length;

    return row.map(val => Number((val - mean).toFixed(2)));
  });
}


//-------------Task2--------------
function second(matrix, k) {
  const rows = matrix.length;
  if (rows === 0) return [];
  const cols = matrix[0].length;

  const shiftUp = k % rows;
  const shiftRight = k % cols;

  const shiftedRight = matrix.map(row => {
    const tail = row.slice(cols - shiftRight);
    const head = row.slice(0, cols - shiftRight);
    return tail.concat(head);
  });
  const topRows = shiftedRight.slice(0, shiftUp);
  const bottomRows = shiftedRight.slice(shiftUp);

  return bottomRows.concat(topRows);
};

//-------------Task3--------------
function third(matrix) {
  const flatArray = matrix.flat();
  const maxVal = Math.max(...flatArray);

  const rows = matrix.map(function(row, i) {
    if (row.includes(maxVal)) {
      return i;
    } else {
      return -1;
    }
  });

  const cols = matrix[0].map(function(_, j) {
    const hasMaxValInCol = matrix.some(function(row) {
      return row[j] === maxVal;
    });

    if (hasMaxValInCol) {
      return j;
    } else {
      return -1;
    }
  });

  const filteredRows = matrix.filter(function(_, i) {
    return !rows.includes(i);
  });

  const result = filteredRows.map(function(row) {
    return row.filter(function(_, j) {
      return !cols.includes(j);
    });
  });

  return result;
}

//-------------Task4--------------
function fourth(matrix) {
  const n = matrix.length;

  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      const temp = matrix[i][j];
      matrix[i][j] = matrix[j][i];
      matrix[j][i] = temp;
    }
  }

  for (let i = 0; i < n; i++) {
    matrix[i].reverse();
  }

  return matrix;
}


function showResult(title, mat){
  console.log(`\n-----------${title}-----------`);
  mat.forEach(row => console.log(row.join('\t')));
}

showResult('Task1', first(matrix));
showResult('Task2', second(matrix, 1));
showResult('Task3', third(matrix));

showResult('Task4 (до обертання)', matrix);
showResult('Task4 (після обертання)', fourth(matrix));
