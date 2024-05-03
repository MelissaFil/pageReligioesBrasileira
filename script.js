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

function init(){
    activeTabInit();
    accordionListInit();
}

init()