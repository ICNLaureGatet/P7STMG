$(function() {
    //gestion de la hauteur du bandeau :
    var pageVisitees = []
    afficheNewPage('accueil', function() {
        $('#bandeau').css('height', $('#blocPage').outerHeight(true))
    })
    $('a').css('color', 'blue')
        //je gère ici le survol des liens du menu navigation
    $('#bandeau>nav>ul>li').css('padding-bottom', '1px')
    $('li>a').on('mouseover', function() {
        $(this).css('border', '2px rgb(0,100,150) dotted')
        $(this).css('border-radius', '5px')
        $(this).css('box-shadow', '3px 3px 2px rgb(100,100,100)')
        $(this).css('color', 'rgb(0,100,200)')
        $(this).css('font-weight', 'bold')
    })
    $('li>a').on('mouseleave', function() {
        $(this).css('border', '')
        if (pageVisitees.indexOf($(this).text()) == -1) {
            //la page n'a pas encore été visitée
            $(this).css('color', 'blue')
            $(this).css('box-shadow', '')
        } else {
            $(this).css('color', 'rgb(180,180,180)')
            $(this).css('box-shadow', '3px 3px 2px rgb(100,100,100)')
        }
        $(this).css('font-weight', 'normal')
    })

    var contenuInit = $('#blocPage').html()
    $('li>a').on('click', function() {
        var titrePage = $(this).text()
        afficheNewPage(titrePage, function() {
            $('#bandeau').css('height', $('#blocPage').outerHeight(true))
        })

    })

    function afficheNewPage(titre, callback) {
        var newContent
        if (pageVisitees.indexOf(titre) == -1) pageVisitees.push(titre)
        switch (titre) {
            case 'II - Fonction dérivée':
                newContent = '<p>Je rappelle que vous avez été destinataire du support de cours suivant : <a href="pdf/2019_1STMG_05_Derivation_eleve.pdf" target="_blank">pdf</a></p>'
                newContent += '<h2>II - Fonction dérivée</h2>'
                newContent += '<p>Voici le tableau complété en classe</a></p>'
                newContent += '<p> <img src="images/tableauDerivees.JPG"></p>'
                newContent += '<p>Voici sur un exemple la façon de calculer la dérivée d\'une fonction polynôme de degré 3 : <a href="pdf/2019_presentationcalculDerivee.pdf" target="_blank">pdf</a></p>'
                newContent += '<p>Pour plus d\'explications, voici une vidéo qui reprend étape par étape le contenu de ce fichier pdf.</p>'
                newContent += '<video controls width="467" height="348"><source src="videos/DeriveePolynomeDegre3.mp4"></video>'
                newContent += '<p><strong>Cela devrait aider les élèves qui n\'auraient pas réussi à faire le deuxième exercice labomep.</strong></p>'
                newContent += '<p><strong>Vous devez par ailleurs aller sur moodle car un exercice en ligne est à faire (il reprend les exercices 30, 33 et 37 p. 113).</strong></p>'
                break
            case 'III - Sens de variation d\'une fonction et signe du nombre dérivé':
                newContent = '<h2>III - Sens de variation d\'une fonction et signe du nombre dérivé </h2>'
                newContent += '<p>Recopier dans votre cours ce qui suit :<br/><img src="images/proprieteSigneDerivee.JPG"><br/>'
                newContent += '<p>Voici sur un exemple (à écrire dans le cours) comment on peut utiliser cette propriété : <a href="pdf/2019_signeDeriveeVariationFct.pdf" target="_blank">pdf</a></p>'
                newContent += '<p>Pour plus d\'explications, voici une vidéo qui reprend étape par étape le contenu de ce fichier pdf.</p>'
                newContent += '<video controls width="467" height="351"><source src="videos/SigneDeriveeVariationFct.mp4"></video>'
                newContent += "<p>Nous pouvons poursuivre avec l'exercice complet (et donc très important) montrant comment sont souvent utilisées ces propriétés.</p>"
                newContent += "<p>Voici le corrigé de l'exercice du cours. Le recopier : <a href=\"pdf/2019_exBilanEtudeFct.pdf\" target=\"_blank\">pdf</a>.</p>"
                newContent += "<p>Pour expliquer ce documents, voici une vidéo que j'ai découpée en 4 parties. <strong>N'oubliez-pas que cet exercice est très important.</strong>"
                newContent += '<video controls width="532" height="408"><source src="videos/exoCoursQuestion1.mp4"></video>'
                newContent += '<video controls width="532" height="408"><source src="videos/exoCoursQuestion2.mp4"></video>'
                newContent += '<video controls width="532" height="408"><source src="videos/exoCoursQuestion3.mp4"></video>'
                newContent += '<video controls width="532" height="408"><source src="videos/exoCoursQuestion3cd.mp4"></video>'
                break
            default:
                //accueil
                newContent = contenuInit
                break
        }
        $('#blocPage').html(newContent)

        callback()
    }
    const counter = document.getElementById("counter")
    $('#counter').hide()

    const updateCounter = async() => {
        const data = await fetch("https://api.countapi.xyz/hit/P7Counter/visits")
        const count = await data.json()
        counter.innerHTML = count.value
    }
    updateCounter()
    $('#voirCompteur').on('click', function() {
        $('#counter').show()
    })
})
