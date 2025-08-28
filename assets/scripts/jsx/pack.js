console.log('Script : core | shift : deffered | scope : all  | source : default | type : script | status : loaded');


let proto_loader = ()=> {

    if ( document.querySelector('.proto')  ) {

        let proto = Array.prototype.slice.call(document.querySelectorAll('.proto') );
        proto.forEach( element => {
            let data = document.getElementById( element.getAttribute('data-target') );
            let clon = data.content.cloneNode(true);
            element.innerHTML = '';
            element.appendChild(clon);
            element.classList.remove('proto');
            element.removeAttribute('data-target');
            data.remove();
        });
    } 
}


window.addEventListener('load', ()=> {
    proto_loader();
})