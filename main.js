// le prénom
let prenom = $('input:eq(1)').val(" ");
// le nom
let nom = $('input:eq(2)').val(" ");
// le mail
let mail = $('input:eq(3)').val(" ");
// url img
let url = $('input:eq(4)').val(" ");
// age
let age = $('input:eq(5)').val(" ");

$('#form').on('submit', (event) => {
    event.preventDefault();

    
    if (prenom.val() <= " " || nom.val() <= " " || mail.val() <= " " || url.val() <= " " || age.val() <= " ") {
        // Alerte
        $('#entreInfo').html(`
        <div class="alert alert-danger" role="alert">
           Tu as oublié de remplir un champ!
        </div>`).fadeIn();
        // Alerte
    }else{
        $('.attend').hide();
        $('#entreInfo').hide();

        $('#profil').html(`
            <h3 class="text-center pb-4">Opération réussie!</h3>
            <div class="border rounded p-5" id="resultat">
                <div id="info">
                    <p>Votre nom complet:${" " + $('input:eq(1)').val() + " " + $('input:eq(2)').val()}</p>
                    <p>Votre email:${" " + $('input:eq(3)').val()}</p>
                    <p>Votre age:${" " + $('input:eq(5)').val()}</p>
    
                    <p class="text-center">Informations Corrects ?</p>
                    <div class="d-flex justify-content-around" id="choix">
                        <button type="button" class="btn btn-success">Oui</button>
                        <button type="button" class="btn btn-danger">Non</button>
                    </div>
                </div>
                <img class="w-50 d-block mx-auto" id="imgAvatar" src="${$('input:eq(4)').val()}" alt="">
            </div>
        `)
    }


    // Le bouton OUI
    $('button:eq(9)').on('click', () => {
        $('#profil').remove();
        $('#formConteneur').remove();
        $(".valide").html(`
             <div class="alert alert-success" role="alert">
                Votre inscription a bien été enregistrée
             </div>`).fadeIn();
    })
    // Le bouton OUI

    // Le bouton NON
    $('button:eq(10)').on('click', () => {
        $('#profil').empty();
        $('.attend').show();
    })
    // Le bouton NON
})
