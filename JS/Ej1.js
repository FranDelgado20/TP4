const auto={
    marca:'toyoya',
    color:'rojo',
    modelos:'Hilux',
    motor:true
}
function encender(){
    if(auto.motor===true){
        auto.motor=false
        console.log('el auto se apago')
    }else if(auto.motor===false){
        auto.motor=true
        console.log('El auto se encendio')
    }
}
console.log  (auto)
