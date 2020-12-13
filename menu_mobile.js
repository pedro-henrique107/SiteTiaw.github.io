
var a=false;
function abreMenu(){

if(a){

    document.getElementById ("M_mobile").innerHTML=`
    <div id="M_mobile">
            <div class="menu_mobile">
            <div class="buscar_mobile"><input type="text" class="buscar"><img src="img.png" class="lupa"></div>
            <div><a href="">home</a></div>
            <div><a href="">dicas de saúde</a></div>
            <div><a href="">tabelas de exercícios</a></div>
            <div><a href="">recomendações de equipamentos</a></div>
            <div><a href="">sobre nos</a></div>
        </div>
        </div>        
    `;
    a=false;
}else{
    document.getElementById ("M_mobile").innerHTML="";
    a=true;
}
}
document.getElementById ('BTN_menu_mobile').addEventListener ('click', abreMenu);
window.onload=abreMenu;