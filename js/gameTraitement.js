function initCheckbox() {
    // initialisation du checkbox 
    var cases = document.getElementsByName('val');
    for (var j = 0; j < cases.length; j++) {
        if (cases[j].checked) {
            cases[j].checked = false;
        }
    }

}
$(document).ready(function() {
    let bt = document.querySelector(".validResponse");
    // cacher les deus image à gauche et à droite de btn suivant 
    $(".left-btn").css("visibility", "hidden")
    $(".right-btn").css("visibility", "hidden")
    let i = 0;
    $(".popup").hide()
    $(".questions").hide()
    $(".quiz_btn").click(function() {
        // la quiz commence ici start
        $(".G0").hide()
        $(".questions").show()
        scrollTo(top)
        $.getJSON("js/Question.json", function(all) {
            function showQuestion(i) {
                // pour afficher la question suivant le conteur i referencé chaque question
                $(".level").text(i + 1)
                $(".quest").text(all[i].question)
                $(".rep1").text(all[i].response[0].text)
                $(".rep2").text(all[i].response[1].text)
                $(".rep3").text(all[i].response[2].text)
            }
            var topleftImg = ["Game/Batgame_4.png",
                "Game/Batgame_5.png",
                "Game/Batgame_6.png",
                "Game/Batgame_7.png",
                "Game/Batgame_8.png",
                "Game/Batgame_10.png",
                "Game/Batgame_11.png",
                "Game/Batgame_12.png",
                "Game/Batgame_14.png",
            ]
            console.log(topleftImg[0])
            showQuestion(0)
            $(".validResponse").click(function() {
                function recupValeurs() {
                    // return le choix du gamer
                    var cases = document.getElementsByName('val');
                    var resultat = Array();
                    for (var j = 0; j < cases.length; j++) {
                        if (cases[j].checked) {
                            resultat.push(cases[j].value);
                        }
                    }
                    return resultat;
                }
                if (recupValeurs().length != 1) {
                    console.log("Erreur")
                } else {
                    // question suivant ainsi des suite
                    if (all[i].response[recupValeurs()[0]].isGood == true) {
                        initCheckbox()
                        document.querySelector(".left").src = topleftImg[i];
                        i++;
                        showQuestion(i)
                    } else {
                        // affichage when game over
                        if (i <= 5) {
                            $(".information-gameover").text("Oula! Heureusement que le Riddler est sous les verrous... il faut que vous vous repassiez les films, cette fois en enlevant peut-être le masque qui vous a bloqué la vue ! Allez, rien n'est perdu!")
                            $(".text-info").text("C'EST PAS TOUT A FAIT CA..")
                            $(".popup").show()
                            $(".Quizz").hide()
                            scrollTo(top)

                        } else if (i > 5 & i < 9) {
                            $(".information-gameover").text("Encore un peu d'entrainement avec le chevalier Noir vous serait bénéfique, mais vous pouvez marcher la tête haute vos connaissances sont là. A vous les consolier, foncez Gotham est votre terrain de chasse !")
                            $(".text-info").text("PAS MAL !")
                            $(".popup").show()
                            $(".Quizz").hide()
                            scrollTo(top)
                        } else {
                            $(".information-gameover").text("Vous êtes véritablement un super fan de l'univers de batman !Comics, film, rien ne vous échappe.Bruce Wayne a de quoi être fier,Gotham est en pais et Batman peut prendra sa retraite; vous veillez aux grains")
                            $(".text-info").text("BRAVO !")
                            $(".popup").show()
                            $(".Quizz").hide()
                            scrollTo(top)

                        }
                    }
                }
                // return fale pour empecher le reloading de my page
                return false
            })
        });



    })
})


// $(document).ready(function() {
//     $.getJSON("js/Question.json", function(all) {
//         console.log(all[0].question)
//         console.log(all[0].response[0].text)
//     });
// })