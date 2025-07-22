
function atualizarDataHora() {
    const dataHoraAtual = new Date();
    const dia = String(dataHoraAtual.getDate()).padStart(2, '0');
    const mes = String(dataHoraAtual.getMonth() + 1).padStart(2, '0'); 
    const ano = dataHoraAtual.getFullYear();
    const dataFormatada = `${dia}/${mes}/${ano}`;
    const horas = String(dataHoraAtual.getHours()).padStart(2, '0');

    const minutos = String(dataHoraAtual.getMinutes()).padStart(2, '0');
    const segundos = String(dataHoraAtual.getSeconds()).padStart(2, '0');
    const horaFormatada = `${horas}:${minutos}:${segundos}`;
    document.getElementById('data-atual').textContent = dataFormatada;
    document.getElementById('hora-atual').textContent = horaFormatada;
}
setInterval(atualizarDataHora, 1000);
atualizarDataHora();

//*codigo fdp só pra um relogio e data, namoral*//
//*pensando bem, é melhor que java*//