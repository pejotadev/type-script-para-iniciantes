/**
 * Exercicio
 *
 */
// 1 - Faça um fetch da API: https://api.origamid.dev/json/cursos.json
// 2 - Defina a interface da API
// 3 - Crie um Type Guard, que garanta que a API possui nome, horas e tags
// 4 - Use Type Guards para garantir a Type Safety do código
// 5 - Preencha os dados da API na tela.
async function fetchCursos() {
    const response = await fetch('https://api.origamid.dev/json/cursos.json');
    const data = await response.json();
    mostrarCursos(data);
}
fetchCursos();
function mostrarCursos(cursos) {
    if (Array.isArray(cursos)) {
        cursos.forEach(curso => {
            if (isCurso(curso)) {
                document.body.innerHTML += `
      <div>
      <h2>${curso.nome}</h2>
      <p>${curso.horas}</p>
      <p>${curso.tags.join(', ')}</p>
      </div>`;
            }
        });
    }
}
function isCurso(curso) {
    return curso.nome !== undefined &&
        curso.horas !== undefined &&
        curso.tags !== undefined;
}
