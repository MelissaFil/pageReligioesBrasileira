function activeTabInit() { 
    const tabImg = document.querySelectorAll('.js-tabimg li');

    const tabContent = document.querySelectorAll('.js-tabcontent section');
    tabContent[0].classList.add('ativo')

    function activeTab(){

        tabContent.forEach((tab)=>{
            tab.classList.remove('ativo')
        })
        const section = '.'+ this.dataset.img
    
        const select = document.querySelector(section)

        select.classList.add('ativo')

    }

    tabImg.forEach((img)=>{
        img.addEventListener('click', activeTab)
    })
}

function accordionListInit(){
    const accordionList = document.querySelectorAll('#faq dt')

    function activeAccordion(){
        this.classList.toggle('ativo');
        this.nextElementSibling.classList.toggle('ativo')
    }

    accordionList.forEach((accordion)=>{
        accordion.addEventListener('click', activeAccordion)
    })
}
function atualizarPorcentagem(i, max, item, tempoAtraso){
    if (i <= max) {
      setTimeout(function() {
          item.nextElementSibling.textContent = i + "%";
          atualizarPorcentagem(i + 1, max, item, tempoAtraso);
      }, tempoAtraso);
  }
}
function contagemPorcentagemIniti(){
    const dtReligioes = document.querySelectorAll(".porcentagem-religioes dt")

    dtReligioes.forEach((item)=>{
        switch(item.dataset.religiao){
            case 'catolico':
                atualizarPorcentagem(0, 49, item, 40);    
            case 'evangelico':
                atualizarPorcentagem(0, 26, item, 60); 
            case 'espirita':
                atualizarPorcentagem(0, 4, item, 200);  
            case 'umbanda':
                atualizarPorcentagem(0, 2, item, 250);  
            
        }
    })
      
}
function scrollSection(e){
    e.preventDefault();
    const href = e.currentTarget.getAttribute('href');
    const section = document.querySelector(href);
    section.scrollIntoView({
        behavior:'smooth',
        block:'start'
    })


    
}

function init(){
    activeTabInit();
    accordionListInit();

    window.addEventListener("scroll", function() {
        let sectionDados = document.getElementById("dados").getBoundingClientRect();
        if (sectionDados.bottom <= window.innerHeight) {
            contagemPorcentagemIniti();
            window.removeEventListener("scroll", arguments.callee);
        }
    });

    const linkMenu = document.querySelectorAll('.menu a')
    linkMenu.forEach((item)=>{
        item.addEventListener('click', scrollSection)
    })
}

init()