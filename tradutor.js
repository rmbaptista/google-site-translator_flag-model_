function ChangeLang(a) {
     var b, elemento = "";
     if (document.createEvent) {
     var c = document.createEvent("HTMLEvents");
     c.initEvent("click", true, true)
     }
     if (a == 'pt') {
     elemento = $(".goog-te-banner-frame:eq(0)").contents().find("button[id*='restore']")
         /*Caso queira adicionar idiomas, colocar no "case" as duas letras do idioma que quer(igual aparece no site do
         * google translator) e no "b =" colocar pelo menos as TRÊS PRIMEIRAS letras do idioma, assim dará certo*/
     } else {
     switch (a) {
     case 'es':
     b = "espanhol";
     break;
     case 'en':
     b = "ing";
     break;
     }
     elemento = $(".goog-te-menu-frame:eq(0)").contents().find("span:contains('" + b + "')");
     }
     if (elemento.length > 0) {
     if (document.createEvent) {
     elemento[0].dispatchEvent(c)
     } else {
     elemento[0].click()
     }
     }
    }
    function googleTranslateElementInit() {
     new google.translate.TranslateElement({
     pageLanguage: 'pt',
     autoDisplay: false,
     includedLanguages: 'es,en',
     layout: google.translate.TranslateElement.InlineLayout.SIMPLE
     },
     'google_translate_element');
    }
