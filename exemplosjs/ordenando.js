// Função para trocar posições no vetor
const swap = (vetor, pos1, pos2) => {
  const temp = vetor[pos1];
  vetor[pos1] = vetor[pos2];
  vetor[pos2] = temp;
};

// Função para embaralhar os elementos do vetor
const shuffle = (vetor, qtdTrocas) => {
  for (let i = 0; i < qtdTrocas; i++) {
    const pos1 = Math.floor(Math.random() * vetor.length);
    const pos2 = Math.floor(Math.random() * vetor.length);
    swap(vetor, pos1, pos2);
  }
};

// Algoritmo Bubble Sort
const bubble_sort = (vetor) => {
  for (let i = 0; i < vetor.length - 1; i++) {
    for (let j = 0; j < vetor.length - i - 1; j++) {
      if (vetor[j] > vetor[j + 1]) {
        swap(vetor, j, j + 1);
      }
    }
  }
  return vetor;
};

// Algoritmo Selection Sort
const selection_sort = (vetor) => {
  for (let i = 0; i < vetor.length - 1; i++) {
    let minIndex = i;
    for (let j = i + 1; j < vetor.length; j++) {
      if (vetor[j] < vetor[minIndex]) {
        minIndex = j;
      }
    }
    swap(vetor, i, minIndex);
  }
  return vetor;
};

// Função de particionamento (auxiliar do Quick Sort)
const particionamento = (vetor, inicio, fim) => {
  const pivot = vetor[fim];
  let i = inicio - 1;
  for (let j = inicio; j < fim; j++) {
    if (vetor[j] < pivot) {
      i++;
      swap(vetor, i, j);
    }
  }
  swap(vetor, i + 1, fim);
  return i + 1;
};

// Algoritmo Quick Sort recursivo
const quick_sort = (vetor, inicio, fim) => {
  if (inicio < fim) {
    const p = particionamento(vetor, inicio, fim);
    quick_sort(vetor, inicio, p - 1);
    quick_sort(vetor, p + 1, fim);
  }
  return vetor;
};
