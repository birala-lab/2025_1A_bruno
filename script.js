const avanca = document.querySelectorAll(".btn-proximo")

avanca.forEach(button=> {
    button.addEventListener('click', function(){
      const atual = document.querySelect('.ativo')
      const proximopasso = 'passo' + this.getAtribute('data-proximo')

    atual.classList.remove('ativo')
    document.getElementsById(proximopasso).classlist.add('ativo')
 })
   
})
 
