 
document.addEventListener('DOMContentLoaded', function() {
    document.getElementsByClassName('container')[0].style.display = "block";
  });
  

function salvar(id){
    document.getElementsByClassName('container')[id-1].style.display = "none";
    document.getElementsByClassName('container')[id].style.display = "block";
    document.getElementsByClassName('container')[id].style.display = "block";
}
    function result () {
        var score = 0;
        if(document.getElementById('correct1').checked){
            score ++;
        }
        if(document.getElementById('correct2').checked){
            score ++;
        }
        if(document.getElementById('correct3').checked){
            score ++;
        }
        if(document.getElementById('correct4').checked){
            score ++;
        }
        alert("sua pontuação é:" + score);
    }

    const nomeArquivo = 'perg.json';

    function mostrarDados(){
        function extrairDados() {
            fetch(nomeArquivo)
                .then(response => response.json())
                .then(data => {
                    const perguntas = data.perguntas;
                    for (k = 0; k < perguntas.length; k++){
                        const perguntaSpan = document.createElement('h2');
                        perguntaSpan.innerHTML = `Pergunta: ${perguntas[k].questao}`;
                        document.body.appendChild(perguntaSpan);
    
                        const resposta = perguntas[k].resposta;
                        
                        var itemCorreto;
                        switch(resposta){
                            case 'a':
                                itemCorreto = 0;
                            break;
                            case 'b':
                                itemCorreto = 1;
                            break; 
                            case 'c':
                                itemCorreto = 2;
                            break;
                            case 'd':
                                itemCorreto = 3;
                            break;    
                            case 'e':
                                itemCorreto = 4;
             break;    
             }    
                        
             const opcoes = perguntas[k].opcoes;
    
             for (j= 0; j < opcoes.length; j++ ){
            const opcao = document.createElement('p');
    
            opcao.innerHTML = opcoes[j];
            if (j==itemCorreto){
             opcao.style.backgroundColor = 'blue';
                 }
    
             document.body.appendChild(opcao);
         }
    
    
            }
                    
                    // const quebraLinha = document.createElement('br');
                    // document.body.appendChild(quebraLinha);
                    // });
     })
    .catch(error => {
     console.error('Erro ao ler o arquivo JSON:', error);
    });
        } 
        
     extrairDados();
    }
