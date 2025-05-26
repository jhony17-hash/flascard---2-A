function criaCARTAO(categoria, pergunta, resposta){
  let container=document. getElementByld('container')
  let cartao = document.createElement('article')
  cartao.className ='cartao'  

cartao.innerHTML =`
<div class="cartao__conteudo">
<h3>${categoria}</h3>
<div class="cartao__conteudo__pergonta">
<p>${pergunta}</p>
</div>
<div class="cartao__conteudo__resposta">
<p>${resposta</p>
     </div>
     </div>

     let respostaEstaVisivel = false

     function vira Cartao(){
     respostaEstaVisivel = !respostaEstaVisivel
     cartao.classList.toggle(',respostaEstaVisivel)
     {
     cartao.addEventListener(', viraCartao)

     container.appendChild(cartao)

     }
