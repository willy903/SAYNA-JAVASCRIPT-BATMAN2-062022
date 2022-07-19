function initCheckbox() {
    var cases = document.getElementsByName('val');
    for (var j = 0; j < cases.length; j++) {
        if (cases[j].checked) {
            cases[j].checked = false;
        }
    }

}
$(document).ready(function() {
    let bt = document.querySelector(".validResponse");
    let i = 0;
    $(".questions").hide()
    $(".quiz_btn").click(function() {
        $(".G0").hide()
        $(".questions").show()
        scrollTo(top)
        $.getJSON("js/Question.json", function(all) {
            function showQuestion(i) {
                $(".level").text(i + 1)
                $(".quest").text(all[i].question)
                $(".rep1").text(all[i].response[0].text)
                $(".rep2").text(all[i].response[1].text)
                $(".rep3").text(all[i].response[2].text)
            }

            function verifieReponse(i, j) {
                $(".rep2").text(all[i].response[1].isGood)
            }
            showQuestion(0)
            $(".validResponse").click(function() {
                function recupValeurs() {
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
                    if (all[i].response[recupValeurs()[0]].isGood == true) {
                        initCheckbox()
                        i++;
                        showQuestion(i)
                    } else {
                        console.log("false")
                    }
                }

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