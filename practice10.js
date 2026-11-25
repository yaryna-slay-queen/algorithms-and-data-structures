const text = "абабагаламага";

function getFrequencies(str) {
  const freq = {};
  for (let char of str) {
    freq[char] = (freq[char] || 0) + 1;
  }
  return freq;
}

function buildTree(freq) {
  let nodes = Object.keys(freq).map((char) => ({
    char: char,
    weight: freq[char],
    left: null,
    right: null,
  }));

  while (nodes.length > 1) {
    nodes.sort((a, b) => a.weight - b.weight);

    const left = nodes.shift();
    const right = nodes.shift();

    const newNode = {
      char: null,
      weight: left.weight + right.weight,
      left: left,
      right: right,
    };

    nodes.push(newNode);
  }

  return nodes[0];
}

function generateCodes(node, currentCode = "", codes = {}) {
  if (!node) return;

  if (node.char !== null) {
    codes[node.char] = currentCode || "0";
  }

  generateCodes(node.left, currentCode + "0", codes);
  generateCodes(node.right, currentCode + "1", codes);

  return codes;
}

function encode(str, codes) {
  let encoded = "";
  for (let char of str) {
    encoded += codes[char];
  }
  return encoded;
}

function decode(encodedStr, tree) {
  let decoded = "";
  let currentNode = tree;

  for (let bit of encodedStr) {
    currentNode = bit === "0" ? currentNode.left : currentNode.right;

    if (currentNode.char !== null) {
      decoded += currentNode.char;
      currentNode = tree;
    }
  }
  return decoded;
}


const frequencies = getFrequencies(text);
const tree = buildTree(frequencies);
const codes = generateCodes(tree);
const encodedText = encode(text, codes);
const decodedText = decode(encodedText, tree);

const uniqueCharsCount = Object.keys(frequencies).length;
const bitsPerCharUniform = Math.ceil(Math.log2(uniqueCharsCount));
const uniformLength = text.length * bitsPerCharUniform;

console.log("Вихідний текст:", text);
console.log("Таблиця кодів Хаффмана:", codes);
console.log("Закодований рядок:", encodedText);
console.log("Декодований рядок:", decodedText);
console.log("--- Порівняння ---");
console.log(`Довжина кодом Хаффмана: ${encodedText.length} біт`);
console.log(`Довжина рівномірним кодом: ${uniformLength} біт (по ${bitsPerCharUniform} біти на символ)`);
console.log(`Економія: ${uniformLength - encodedText.length} біт`);