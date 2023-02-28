function Menu(config){
    this.nav = (typeof config.container) === 'string' ? document.querySelector(config.container) : config.container

    this.btn = (typeof config.toogleBtn) === 'string' ? document.querySelector(config.toogleBtn) : config.toogleBtn

    this.maxwidth = config.widthEnable || false;

    var _opened = false;
    var _this = this;
    
    this.btn.removeAttribute('style');
    
    // closeMenu();

    // fechar menu qdo ficar menor que medida. Menuzinho fechado
    if(this.maxwidth){
        window.addEventListener('resize', e =>{
            if(window.innerWidth > _this.maxwidth){
                _this.nav.removeAttribute('style');
                _opened = true;
            }
            else if (!_this.nav.getAttribute('style')){
                    closeMenu();

                }
        })
    }

    // arrumar qdo f5 - menu some qdo está maior que maxwidth
    if(window.innerWidth <= _this.maxwidth){
        closeMenu();
    }

    this.btn.addEventListener('click', openOrClose);
    

    function openOrClose(){
        if(!_opened){
            openMenu();
        }
        else{
            closeMenu();
        }
    }

    function openMenu(){
        var _top = _this.nav.getBoundingClientRect().top + 'px';

        var _style = {
            maxHeight: 'calc(100vh - '+ _top +')',
            overflow:'hidden'
        }

        applyStyleToNav(_style);

        _opened = true;
    }

    // adicionar as propriedades ao menu
    function applyStyleToNav(_style){
        Object.keys(_style).forEach( stl => {
            _this.nav.style[stl] = _style[stl];
        })
        
    }


    function closeMenu(){
        var _style = {
            maxHeight: '0px',
            overflow:'hidden'
        }

        applyStyleToNav(_style);

        _opened = false;
    }

   
}