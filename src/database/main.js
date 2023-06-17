URL = 'http://localhost:3000/usuarios'


//=================================================================================================
// GET - Recupera todos os usuários e adiciona na tabela

const ListaUsuarios = document.getElementById('usuarios-list');

fetch(URL)
    .then(res => res.json())
    .then(usuarios => {
        let lista_usuarios = '';
        for (let i = 0; i < usuarios.length; i++) {
            /*vlt_total = usuarios[i].qtd * usuarios[i].vlr;*/
            lista_usuarios += `
            <tr>
                <th>${usuarios[i].id}</th>
                <td>${usuarios[i].nome}</td>
                <td>${usuarios[i].email}</td>
                <td>${usuarios[i].telefone}</td>
                <td>${usuarios[i].senha}</td>
                <td>${parseInt(usuarios[i].status)}</td>
                <td>
                    <a onclick="getUser(${usuarios[i].id});" 
                    class="btn btn-warning btn-sm" 
                    data-toggle="modal" data-target="#produto-modal">
                    <i class="fa fa-edit"></i>  Editar
                    </a>

                    <a onclick="$('#id-user').text(${usuarios[i].id});" class="btn btn-danger btn-sm" 
                    data-toggle="modal" data-target="#modal-delete">
                    <i class="fa fa-trash"></i> Remover
                    </a>
                    </td>
            </tr>
            `;
            ListaUsuarios.innerHTML = lista_usuarios;
        }
    });
//=================================================================================================
// DELETE - PROCEDIMENTO PARA EXCLUIR UM USUÁRIO
const usuarioDelete = document.getElementById('btn-delete');

usuarioDelete.addEventListener('click', (e) => {

    let id = $('#id-user').text();

    fetch(`${URL}/${id}`, {
        method: 'DELETE',
    })
    .then(res => res.json())
    .then(() => location.reload());

})
//=================================================================================================

// PROCEDIMENTO PARA RECUPERAR OS DADOS DE UM USUÁRIO NA API
function getUser(id){

    if(id == 0){
        $('#edit-user-id').text("");
        $( "user-id" ).prop( "disabled", false );
        $('#user-id').val("");
        $('#user-nome').val("");
        $('#user-email').val("");
        $('#user-tel').val("");
        $('#user-senha').val("");
        $('#user-status').val("");
    }else{
        $('#edit-user-id').text(id);
        fetch(`${URL}/${id}`).then(res => res.json())    
        .then(data => {
            $( "#user-id" ).prop( "disabled", true );
            $('#user-id').val(data.id);
            $('#user-nome').val(data.nome);
            $('#user-email').val(data.email);
            $('#user-tel').val(data.telefone);
            $('#user-senha').val(data.senha);
            $('#user-status').val(data.status);
        });
    }    
}
//=================================================================================================

// CREATE or UPDATE - PROCEDIMENTO PARA CRIAR OU EDITAR UM USUÁRIO

const userForm = document.getElementById('user-form');

userForm.addEventListener('submit', (e) => {

    // RECUPERA O ID DO USUÁRIO
    let id = parseInt($('#edit-user-id').text());    

    // RECUPERA OS DADOS DO USUÁRIO
    const usuario = JSON.stringify({
        id: document.getElementById('user-id').value,
        nome: document.getElementById('user-nome').value,
        email: document.getElementById('user-email').value,
        telefone: document.getElementById('user-tel').value,
        senha: document.getElementById('user-senha').value,
        status: document.getElementById('user-status').value
    })

    if (id >= 0) {
        fetch(`${URL}/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: usuario
        })
        .then(res => res.json())
        .then(() => {
          location.reload();
        });
    }          
    else{ 
        fetch(URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: usuario
        })
        .then(res => res.json())
        .then(() => {
          location.reload();
        });
    }      
})
//=================================================================================================
