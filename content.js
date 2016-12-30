//content script
(function() {

    //---------------listeners----------------------------------

    chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
        var toInsert="...";
        if(request == "fewWords") {
            toInsert=loremGenerator.getWords(rand(4,10),true);
        }
        if(request == "manyWords") {
            toInsert=loremGenerator.getWords(rand(40,200),true);
        }
        if(request == "manyManyWords") {
            toInsert=loremGenerator.getWords(rand(40,200),true);
            var r=0;
            while(Math.random()<0.9 || toInsert.length<2000){
                r++;
                toInsert+="\n";
                toInsert+=loremGenerator.getWords(rand(40,200),true);
            }
        }
        document.execCommand("insertText", false, toInsert);
    });


    //---------------utils----------------------------------


    /**
     * php like rand
     * @param min
     * @param max
     * @returns {*}
     */
    function rand(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min
    }
    function capitalize(string) {
        return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
    }

    /**
     * To generate some lorem ipsum.
     * @constructor
     */
    var Lorem=function(){
        var boot=function(){
            if(!words){
                words=text.split(" ");
            }
        };
        var words=null;
        var text='Novitates autem si spem adferunt, ut tamquam in herbis non fallacibus fructus appareat, ' +
            'non sunt illae quidem repudiandae, vetustas tamen suo loco conservanda; maxima est enim vis vetustatis et consuetudinis. ' +
            'Quin in ipso equo, cuius modo feci mentionem, si nulla res impediat, nemo est, quin eo, quo consuevit, libentius utatur quam intractato et novo. ' +
            'Nec vero in hoc quod est animal, sed in iis etiam quae sunt inanima, consuetudo valet, cum locis ipsis delectemur, montuosis etiam et silvestribus, ' +
            'in quibus diutius commorati sumus. Tu autem, Fanni, quod mihi tantum tribui dicis quantum ego nec adgnosco nec postulo, facis amice; sed, ut mihi videris, ' +
            'non recte iudicas de Catone; aut enim nemo, quod quidem magis credo, aut si quisquam, ille sapiens fuit. Quo modo, ut alia omittam, mortem filii tulit! memineram Paulum, ' +
            'videram Galum, sed hi in pueris, Cato in perfecto et spectato viro.        ' +
            'Per hoc minui studium suum existimans Paulus, ut erat in conplicandis negotiis artifex dirus, unde ei Catenae inditum est cognomentum, vicarium ipsum eos quibus praeerat ' +
            'adhuc defensantem ad sortem periculorum communium traxit. et instabat ut eum quoque cum tribunis et aliis pluribus ad comitatum imperatoris vinctum perduceret: quo percitus ' +
            'ille exitio urgente abrupto ferro eundem adoritur Paulum. et quia languente dextera, letaliter ferire non potuit, iam districtum mucronem in proprium latus inpegit. ' +
            'hocque deformi genere mortis excessit e vita iustissimus rector ausus miserabiles casus levare multorum. Hinc ille commotus ut iniusta perferens et indigna praefecti ' +
            'custodiam protectoribus mandaverat fidis. quo conperto Montius tunc quaestor acer quidem sed ad lenitatem propensior, consulens in commune advocatos palatinarum ' +
            'primos scholarum adlocutus est mollius docens nec decere haec fieri nec prodesse addensque vocis obiurgatorio sonu quod si id placeret, post statuas Constantii deiectas ' +
            'super adimenda vita praefecto conveniet securius cogitari.   Constituendi autem sunt qui sint in amicitia fines et quasi termini diligendi. De quibus tres video sententias ' +
            'ferri, quarum nullam probo, unam, ut eodem modo erga amicum adfecti simus, quo erga nosmet ipsos, alteram, ut nostra in amicos benevolentia illorum erga nos benevolentiae ' +
            'pariter aequaliterque respondeat, tertiam, ut, quanti quisque se ipse facit, tanti fiat ab amicis. Eodem tempore etiam Hymetii praeclarae indolis viri negotium est actitatum, ' +
            'cuius hunc novimus esse textum. cum Africam pro consule regeret Carthaginiensibus victus inopia iam lassatis, ex horreis Romano populo destinatis frumentum dedit, ' +
            'pauloque postea cum provenisset segetum copia, integre sine ulla restituit mora.  Quapropter a natura mihi videtur potius quam ab indigentia orta amicitia, applicatione ' +
            'magis animi cum quodam sensu amandi quam cogitatione quantum illa res utilitatis esset habitura. Quod quidem quale sit, etiam in bestiis quibusdam animadverti potest, ' +
            'quae ex se natos ita amant ad quoddam tempus et ab eis ita amantur ut facile earum sensus appareat. Quod in homine multo est evidentius, primum ex ea caritate quae est ' +
            'inter natos et parentes, quae dirimi nisi detestabili scelere non potest; deinde cum similis sensus exstitit amoris, si aliquem nacti sumus cuius cum moribus et natura ' +
            'congruamus, quod in eo quasi lumen aliquod probitatis et virtutis perspicere videamur. Quam ob rem vita quidem talis fuit vel fortuna vel gloria, ut nihil posset accedere, ' +
            'moriendi autem sensum celeritas abstulit; quo de genere mortis difficile dictu est; quid homines suspicentur, videtis; hoc vere tamen licet dicere, P. Scipioni ' +
            'ex multis diebus, quos in vita celeberrimos laetissimosque viderit, illum diem clarissimum fuisse, cum senatu dimisso domum reductus ad vesperum est a patribus conscriptis, ' +
            'populo Romano, sociis et Latinis, pridie quam excessit e vita, ut ex tam alto dignitatis gradu ad superos videatur deos potius quam ad inferos pervenisse. Rogatus ad ultimum ' +
            'admissusque in consistorium ambage nulla praegressa inconsiderate et leviter proficiscere inquit ut praeceptum est, Caesar sciens quod si cessaveris, et tuas et palatii tui ' +
            'auferri iubebo prope diem annonas. hocque solo contumaciter dicto subiratus abscessit nec in conspectum eius postea venit saepius arcessitus.  Dein Syria per speciosam ' +
            'interpatet diffusa planitiem. hanc nobilitat Antiochia, mundo cognita civitas, cui non certaverit alia advecticiis ita adfluere copiis et internis, et Laodicia et Apamia ' +
            'itidemque Seleucia iam inde a primis auspiciis florentissimae.        Quae dum ita struuntur, indicatum est apud Tyrum indumentum regale ' +
            'textum occulte, incertum quo locante vel cuius usibus apparatum. ideoque rector provinciae tunc pater Apollinaris eiusdem nominis ut conscius ductus est ' +
            'aliique congregati sunt ex diversis civitatibus multi, qui atrocium criminum ponderibus urgebantur.';

        /**
         * Returns random words
         * @param {int} count how many words?
         * @returns {string}
         * @param cap
         */
        this.getWords=function(count,cap){
            var start=rand(0,words.length);
            var arr=words.slice(start,start+count);
            var str= arr.join(" ");

            //sanitize
            for(var i=0;i<5;i++){
                str=str.trim();
                str=str.replace("  "," ");
                str=str.replace("..",".");
                str=str.replace(",.",".");
                str=str.replace(";.",".");
                str=str.replace(" .",".");
            }


            if(cap){
                str=capitalize(str);
                str+=".";
            }

            //sanitize
            for(var i=0;i<5;i++){
                str=str.trim();
                str=str.replace("  "," ");
                str=str.replace("..",".");
                str=str.replace(",.",".");
                str=str.replace(";.",".");
                str=str.replace(" .",".");
            }

            return str;
        };
        boot();
    };

    //---------------- go ----------------------

    var loremGenerator=new Lorem();



})();



