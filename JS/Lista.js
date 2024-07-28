let convidados = [];
        let ol = document.getElementById("i_lista");
        
        function cadastra_convidado(){
            let p = document.getElementById("i_convidado").value;
            convidados.push(p)
            document.getElementById("i_convidado").value ="";
            desenha_lista();
        }

        function remove_convidado(){
            convidados.shift();
            desenha_lista();
        }

        function desenha_lista(){
            ol.innerHTML = "";
            for(let x=0; x < convidados.length; x++){
            ol.innerHTML += `<li> ${convidados[x]} </li>`;
        }

    }