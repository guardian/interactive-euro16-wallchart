//date  Match_Categ Home_team   Home_Goals  Away_team   Away_Goals  Resultfixture   kickofftimelocal    bstTime Stadium_name    City                                                                                    

var dataFixtures;
var dataCopy;
var dataStadia;
var dataISO = [{fifaisocode: 'ALB',fullcountryname: 'Albania' },{fifaisocode: 'AUT',fullcountryname: 'Austria' },{fifaisocode: 'BEL',fullcountryname: 'Belgium' },{fifaisocode: 'HRV',fullcountryname: 'Croatia' },{fifaisocode: 'CZE',fullcountryname: 'Czech Republic' },{fifaisocode: 'ENG',fullcountryname: 'England' },{fifaisocode: 'FRA',fullcountryname: 'France' },{fifaisocode: 'GER',fullcountryname: 'Germany' },{fifaisocode: 'HUN',fullcountryname: 'Hungary' },{fifaisocode: 'ISL',fullcountryname: 'Iceland' },{fifaisocode: 'ITA',fullcountryname: 'Italy' },{fifaisocode: 'NIR',fullcountryname: 'Northern Ireland' },{fifaisocode: 'POL',fullcountryname: 'Poland' },{fifaisocode: 'PRT',fullcountryname: 'Portugal' },{fifaisocode: 'IRL',fullcountryname: 'Republic of Ireland' },{fifaisocode: 'ROU',fullcountryname: 'Romania' },{fifaisocode: 'RUS',fullcountryname: 'Russia' },{fifaisocode: 'SVK',fullcountryname: 'Slovakia' },{fifaisocode: 'ESP',fullcountryname: 'Spain' },{fifaisocode: 'SWE',fullcountryname: 'Sweden' },{fifaisocode: 'CHE',fullcountryname: 'Switzerland' },{fifaisocode: 'TUR',fullcountryname: 'Turkey' },{fifaisocode: 'UKR',fullcountryname: 'Ukraine' },{fifaisocode: 'WLS',fullcountryname: 'Wales' },{fifaisocode: 'TBA',fullcountryname: 'TBA' }];
var dataGroups = [];
var dataGroupStandings;
var groupLetters = ["A","B","C","D","E","F","G","H"]
var data_gr_A; var data_gr_B; var data_gr_C; var data_gr_D; var data_gr_E; var data_gr_F; 

var trophySVG = '<svg width="60px" height="90px"><path fill-rule="evenodd" clip-rule="evenodd" fill="#ff9b0b" d="M40.796,35.309c1.524-0.96,3.051-1.919,4.572-2.878 c3.95-2.736,8.157-5.653,10.668-9.822c2.412-4.003,3.422-11.325-1.863-13.038c-2.703-0.878-4.835,0.553-6.604,1.015    C46.471,8.77,28.326,8.816,24.032,8.892c-5.345,0.304-9.319-0.679-12.023,1.693c-10.52-4.662-12.068,5.537-7.788,12.7 c2.654,4.442,7.564,7.177,11.685,10.16c1.07,0.677,2.143,1.355,3.216,2.031c1.128,1.808,2.257,3.614,3.386,5.419  c1.894,2.411,5.425,4.997,4.402,10.161c-0.375,1.908-2.247,3.73-2.369,5.079c0.168,0.34,0.34,0.68,0.507,1.016   c0.17,1.598-1.163,2.83-1.862,3.726c-2.251,2.889-4.31,0.858-7.451,2.37c-0.757,0.465-4.324,7.283-4.572,8.465c0,3.5,0,7,0,10.502 c-1.412,2.942-4.807,7.95-4.742,12.698c2.233,1.479,6.948,1.015,10.669,1.015c8.578-0.11,17.16-0.224,25.741-0.339 c3.307-0.483,8.084,0.867,10.326-0.675c0.444-0.294,0.454-0.319,0.678-0.847c0.701-2.555-4.5-10.655-5.417-12.532 c-0.057-3.554-0.115-7.11-0.171-10.667c-1.242-2.483-2.481-4.968-3.725-7.45c-1.293-0.67-3.232-0.047-5.079-0.508 c-2.276-0.572-4.066-3.686-4.91-5.759c0.224-0.336,0.452-0.676,0.675-1.016c-4.974-8.109-0.881-11.109,3.219-16.594 C39.216,38.131,40.006,36.719,40.796,35.309z M45.876,16.173c2.456-0.586,3.142-2.325,4.742-3.725 c1.405,0.023,1.955,0.323,2.877,0.677c4.57,7.51-6.458,16.03-10.665,18.288c-0.058,0-0.115,0-0.173,0 C43.732,26.335,44.805,21.253,45.876,16.173z M17.09,31.414c-4.521-1.472-16.791-13.314-9.651-18.965 c3.926,0.126,2.938,3.289,6.434,3.556c1.718,4.376,1.629,10.287,3.218,14.562C17.09,30.849,17.09,31.131,17.09,31.414z"/></svg>'

var clockSVG = '<svg width="24px" height="24px"><path d="M39.832,42.138c0,1.656-0.312,3.211-0.938,4.664c-0.625,1.454-1.477,2.726-2.555,3.82 c-1.078,1.094-2.344,1.953-3.797,2.578s-3.008,0.938-4.664,0.938s-3.219-0.312-4.688-0.938s-2.742-1.484-3.82-2.578 c-1.078-1.094-1.93-2.367-2.555-3.82c-0.625-1.453-0.938-3.008-0.938-4.664s0.312-3.211,0.938-4.664 c0.625-1.454,1.477-2.727,2.555-3.82c1.078-1.094,2.352-1.953,3.82-2.579c1.469-0.625,3.031-0.937,4.688-0.937 s3.211,0.312,4.664,0.937c1.453,0.625,2.719,1.484,3.797,2.579c1.078,1.094,1.93,2.367,2.555,3.82 C39.52,38.927,39.832,40.482,39.832,42.138z M36.316,43.216v-1.594l-6.938-0.375l-0.703-8.907h-1.641L26.238,42.56l1.641,1.36  L36.316,43.216z"/></svg>'

var headerImgStr = 'http://interactive.guim.co.uk/2015/12/2016-euros-wallchart/uploaded-assets/bg-cc.gif';


var imageEndString = "500.jpg";

var shortURL;

define([
    'reqwest',
    'json!data/sampleData.json',
    'text!templates/appTemplate.html',
    'underscore',
    //'moment-timezone',
    'datejs'
], function(
    reqwest,
    sampleData,
    templateHTML,
    _,
    //moment,
    datejs
) {
   'use strict';

    function logResponse(resp) {
        initData(resp);
    }

    function handleRequestError(err, msg) {
        console.error('Failed: ', err, msg);
    }

    function afterRequest(resp) {
        //console.log('Finished', resp);
    }

    function init(el, context, config, mediator) {
        // DEBUG: Uncomment below to see what we get given on boot
        //console.log(el, context, config, mediator);

        // DOM template example
        el.innerHTML = templateHTML;

        // Load local JSON data
        //console.log(sampleData);

        // Load remote JSON data
        var key = '1EAeb9sKV4xbUivz9XkQYpMc5MPxgmuRu7XCBA-b745E';
        var url = 'https://interactive.guim.co.uk/docsdata/'+key+'.json';  //http://interactive.guim.co.uk/docsdata-test/1EAeb9sKV4xbUivz9XkQYpMc5MPxgmuRu7XCBA-b745E.json

        reqwest({
            url: url,
            type: 'json',
            crossOrigin: true
        })
        .then(logResponse)
        .fail(handleRequestError)
        .always(afterRequest);
    }


    function initData(resp){
        modelData(resp);

        if (window.guardian.config.page.shortUrl){
            shortURL = (window.guardian.config.page.shortUrl)
        }else {
            shortURL = "http://www.theguardian.com";
        }
        
    }

    function modelData (resp){
            dataFixtures = resp.sheets.NewFixtures;
            dataCopy = resp.sheets.copyHolder;
            dataGroupStandings = resp.sheets.Group_standings;
            dataStadia = resp.sheets.stadia;

            // Block of code to log out ISO codes from spreadsheet
                //dataISO = resp.sheets.country_iso;
                // var dataStr = "";
                // _.each(dataISO, function(item){

                //     dataStr+= ("{fifaisocode: '"+item.fifaisocode+"',fullcountryname: '"+item.fullcountryname+"' }," );
                // })
                // console.log(dataStr);
            
            data_gr_A = _.filter(dataGroupStandings, function(item){ return item.Group == "A"; });
            data_gr_B = _.filter(dataGroupStandings, function(item){ return item.Group == "B"; });
            data_gr_C = _.filter(dataGroupStandings, function(item){ return item.Group == "C"; });
            data_gr_D = _.filter(dataGroupStandings, function(item){ return item.Group == "D"; });
            data_gr_E = _.filter(dataGroupStandings, function(item){ return item.Group == "E"; });
            data_gr_F = _.filter(dataGroupStandings, function(item){ return item.Group == "F"; });
            // 
            _.each(data_gr_A, function (item){
               item.shortCountry = get3LetterCode(item.Country);
            })
            _.each(data_gr_B, function (item){
               item.shortCountry = get3LetterCode(item.Country);
            })
            _.each(data_gr_C, function (item){
               item.shortCountry = get3LetterCode(item.Country);
            })
            _.each(data_gr_D, function (item){
               item.shortCountry = get3LetterCode(item.Country);
            })
            _.each(data_gr_E, function (item){
               item.shortCountry = get3LetterCode(item.Country);
            })
            _.each(data_gr_F, function (item){
               item.shortCountry = get3LetterCode(item.Country);
            })

            dataGroups.push(data_gr_A);
            dataGroups.push(data_gr_B);
            dataGroups.push(data_gr_C);
            dataGroups.push(data_gr_D);
            dataGroups.push(data_gr_E);
            dataGroups.push(data_gr_F);

            _.each(dataFixtures, function(item,i){
                item.gutime = formatTime(item.kickofftimelocal);
                item.gudate = formatDate(item.date);
                item.shortdate = formatShortDate(item.date);
            });

           initView(); 
           
    }

    function initView(){
        viewTables(dataGroups);

        viewHeader();

        viewSocialButtons();

        var knockOutsArr = getKnockoutsData(dataFixtures);

        viewKnockouts(knockOutsArr);

        // viewVenues();

        viewVenuesList();

        viewCredits();
    }


    function getKnockoutsData(dataFixtures){

        var tempArr = [];
            _.each(dataFixtures, function(item,i){

                var checkCat = item.Match_Categ.split('_');

                item.Home_teamMobile = getMobileMatch(item.Home_team);
                item.Away_teamMobile = getMobileMatch(item.Away_team);
                
                item.isoHomeName = getShortName(item.Home_team);
                item.isoAwayName = getShortName(item.Away_team);

                    if (checkCat[0] != "Group"){
                        item.quickRef = item.Match_Categ.substring(0, 1);
                        tempArr.push(item);
                    }
            });

        return tempArr;

    }

    function getMobileMatch(itemIn){
        var tempCat = itemIn.split('-');
        var tempItem;

        tempCat.length > 1 ? tempItem = tempCat[0]+" "+tempCat[1] : tempItem = tempCat[0];

        var checkCat = tempItem.split(' ');
        var tempStr = "";
        
        _.each(checkCat, function(item,i){
            var homeGoal="";
            var awayGoal="";
                
           item == "Korea" ? tempStr = "KOR" : tempStr = tempStr + item.substring(0, 1);  
            
            _.each(dataISO, function(countryCode,k){
                       if(item == countryCode.fullcountryname){
                           tempStr = countryCode.fifaisocode;
                        }
                    });
                
            })


       return tempStr.toUpperCase();

    }
    


    function getDataObj(strIn){
        var objOut = "Not found";
        _.each(dataCopy, function(item,i){
            if (item.categ == strIn){
                objOut = item; 
            }
        })

        return objOut;

    }

    function viewHeader(knockOutsArr){

        var dataObj = getDataObj("header area");
        var dataPicObj = getDataObj("header picture");

        var htmlStr = "<h4 id='headStack2' style='color:#0eb6ea'>"+dataObj.smallTitle+"</h4><h1 id='headStackTitle'>"+dataObj.titleCopy+"</h1><p id='headSupportCopy'>"+dataObj.mainCopy+"</p>";

        document.getElementById('headerArea').innerHTML = htmlStr;  

        document.getElementById('heroPic').setAttribute('style','background: url('+headerImgStr+') top center no-repeat; background-size:cover;')

        //document.getElementById('wwc__shareButtons').innerHTML = shareButtonsStr;                 
                        

    }

    function getHTMLSocialButtons(){
        var twitterShareUrl ="_";
         var facebookShareUrl ="_";
          var maiTo ="_";


     return '<div class="visuals-share-btns"><a target="_blank" class="wwc__share-button" data-source="twitter"></a><a target="_blank" class="wwc__share-button" data-source="facebook"></a><a target="_blank" class="wwc__share-button" data-source="email"></a></div>'
        


    } 


    function viewSocialButtons(){
        var htmlStr =  getHTMLSocialButtons();

        document.getElementById('shareBtnHolder').innerHTML = htmlStr; 


        addShareListeners();


    }

    function viewKnockouts(knockOutsArr){

        var dataObjKO = getDataObj("knockoutstages");

        var htmlStr = "<div class='sub-head-container'><h3>"+dataObjKO.titleCopy+"</h3><p>"+dataObjKO.mainCopy+"</p></div>";

        var r16 = "<div class='wwc16__chart-row' id='wwc16__r16'></div>"
        var qf = "<div class='wwc16__chart-row' id='wwc16__rqf'></div>"
        var sf = "<div class='wwc16__chart-row' id='wwc16__rsf'></div>"
        var f = "<div class='wwc16__chart-row' id='wwc16__rf' style='border:none'></div>"
        
        var htmlStr = htmlStr + r16 + qf + sf + f;

        document.getElementById('wwc__wallchart').innerHTML = htmlStr;

        populateKnockouts(knockOutsArr);
 
    }   



    function viewVenues(){
        var dataObjVenues = getDataObj("venues");
        
        var htmlStrVenues = "<div class='sub-head-container'><h3>"+dataObjVenues.titleCopy+"</h3><p>"+dataObjVenues.mainCopy+"</p></div><iframe class='gv-iframed-graphic' src='"+dataObjVenues.imagePath+"'></iframe>";
        document.getElementById('wwc__venues').innerHTML = htmlStrVenues;
    } 

    function viewVenuesList(){
        

        var htmlStr = populateVenueList();

        document.getElementById('wwc__venues-list').innerHTML = htmlStr;
    }  

     function viewCredits(){
        var dataObjCredits = getDataObj("credits");
        var htmlStrCredits = "Credits: "+dataObjCredits.mainCopy;
        document.getElementById('wwc__credits').innerHTML = htmlStrCredits;
    }   
    
    function getShortName(strIn){
        
        var tempArr = strIn.split(" ");
        var tempStr = "shortname";
        
        _.each(tempArr, function(item,i){
            
            _.each(dataISO, function(compare, k){
                if(compare.fullcountryname == item){
                    return (compare.fifaisocode);
                }
                
            })
            
        })
        
        
    }

    function populateVenueList(){
        var dataObjVenues = getDataObj("venues");
        var htmlStr = "<div class='sub-head-container'><h3>"+dataObjVenues.titleCopy+"</h3><p>"+dataObjVenues.mainCopy+"</p></div>";

        dataStadia = _.sortBy(dataStadia, function(item){ return parseInt(item.number); });

        htmlStr+="<div class='wwc-map-holder'><iframe class='gv-iframed-graphic' src='https://interactive.guim.co.uk/uploader/embed/2015/12/euro-2016venues/giv-257500x2rbfFm6d1S/'></iframe></div><div class='wwc-map-text-holder'> <ul id='wwc__venues-listed'>";

        _.each(dataStadia, function(item,i){
            var newAtom="<li><div class='wwc-stadia--image' style='background: url("+item.image+") top center no-repeat; background-size: cover;'></div>";
            newAtom += "<div class='wwc-stadia--copy'><span style='color:#0eb6ea'>"+item.number+"</span> | <span style='font-weight:600'>"+item.city+"</span></br>";
            newAtom +="<span style='color:#999'>"+item.name+"</br>";
            newAtom +="Capacity: </span><span style='color:#0eb6ea'>"+item.capacity+"</br></span></div>";
            newAtom +="</li>";
            htmlStr+= newAtom;
        });

        htmlStr+="</ul></div>  </div></div>";

        return htmlStr
    }

    function populateKnockouts(knockOutsArr){
        
        var htmlStr16 = "<div class='sub-head-container-3'>Round of 16</div>";
        var htmlStrQF = "<div class='sub-head-container-3'>Quarter-finals</div>";
        var htmlStrSF = "<div class='sub-head-container-3'>Semi-finals</div>";
        var htmlStrF = "<div class='sub-head-container-3'>Final</div><div class='wwc16__trophyHolder'>"+trophySVG+"</div>";
      
        var rCount = 0;
        var qCount = 0;
        var sCount = 0;
 
        _.each(knockOutsArr, function(item,i){          
//handle if fixtures
            if(item.quickRef == "R" && item.Resultfixture == "fixture"){
               rCount++;  
               htmlStr16+= "<div class='wwc16__last-16'><span class='wwc16__match-date visible-non-mobile'>Match "+rCount+"</span><span class='wwc16__match-date visible-mobile'>M"+rCount+"</span><span class='visible-non-mobile'>"+item.Home_team+"<br>v<br>"+item.Away_team+"</span><span class='wwc16__match-detail visible-non-mobile'>"+item.gudate+"<br>"+item.gutime+" (CET)<br>"+item.City+"</span><span class='visible-mobile'>"+item.Home_teamMobile+"<br>v<br>"+item.Away_teamMobile+"</span><span class='wwc16__match-detail visible-mobile'>"+item.shortdate+"</span></div>";
            }
            if(item.quickRef == "Q" && item.Resultfixture == "fixture"){
               qCount++; 
               htmlStrQF+= "<div class='wwc16__qf'><span class='wwc16__match-date visible-non-mobile'>Quarter-final "+qCount+"</span><span class='wwc16__match-date visible-mobile'>QF"+qCount+"</span><span class='visible-non-mobile'>"+item.Home_team+"<br>v<br>"+item.Away_team+"</span><span class='wwc16__match-detail visible-non-mobile'>"+item.gudate+"<br>"+item.gutime+" (CET)<br> "+item.City+"</span><span class='visible-mobile'>"+item.Home_teamMobile+"<br>v<br>"+item.Away_teamMobile+"</span><span class='wwc16__match-detail visible-mobile'>"+item.shortdate+"</span></div>";
            }
            if(item.quickRef == "S" && item.Resultfixture == "fixture"){
               sCount++; 
               htmlStrSF+= "<div class='wwc16__sf'><span class='wwc16__match-date visible-non-mobile'>Semi-final "+sCount+"</span><span class='wwc16__match-date visible-mobile'>SF"+sCount+"</span><span class='visible-non-mobile'>"+item.Home_team+"<br>v<br>"+item.Away_team+"</span><span class='wwc16__match-detail visible-non-mobile'>"+item.gudate+"<br>"+item.gutime+" (CET)<br> "+item.City+"</span><span class='visible-mobile'>"+item.Home_teamMobile+"<br>v<br>"+item.Away_teamMobile+"</span><span class='wwc16__match-detail visible-mobile'>"+item.shortdate+"</span></div>";
            }

            if(item.quickRef == "F" && item.Resultfixture == "fixture"){
               htmlStrF+= "<div class='wwc16__final'><span class='wwc16__match-date visible-non-mobile'>Final</span><span class='wwc16__match-date visible-mobile'>Final</span><span class='visible-non-mobile'>"+item.Home_team+"<br>v<br>"+item.Away_team+"</span><span class='wwc16__match-detail visible-non-mobile'>"+item.gudate+"<br>"+item.gutime+" (CET)<br> "+item.City+"</span><span class='visible-mobile'>"+item.Home_teamMobile+"<br>v<br>"+item.Away_teamMobile+"</span><span class='wwc16__match-detail visible-mobile'>"+item.shortdate+"</span></div>";
            }
            
            
// handle if results
            if(item.quickRef == "Q" && item.Resultfixture == "result"){
               qCount++; 
               htmlStrQF+= "<div class='wwc16__qf'><span class='wwc16__match-date visible-non-mobile'>Quarter-final "+qCount+"</span><span class='wwc16__match-date visible-mobile'>QF"+qCount+"</span><span class='visible-non-mobile'>"+item.Home_team+" "+item.Home_Goals+"<br>v<br>"+item.Away_team+" "+item.Away_Goals+"</span><span class='wwc16__match-detail visible-non-mobile'>"+item.gudate+"<br>"+item.gutime+" (CET)<br> "+item.Stadium_name+", "+item.City+"</span><span class='visible-mobile'>"+item.Home_teamMobile+" "+item.Home_Goals+"<br>v<br>"+item.Away_teamMobile+" " +item.Away_Goals+"</span><span class='wwc16__match-detail visible-mobile'>"+item.shortdate+"</span></div>";
            }
            
             if(item.quickRef == "R" && item.Resultfixture == "result"){
               rCount++;  
               htmlStr16+= "<div class='wwc16__last-16'><span class='wwc16__match-date visible-non-mobile'>Match "+rCount+"</span><span class='wwc16__match-date visible-mobile'>M"+rCount+"</span><span class='visible-non-mobile'>"+item.Home_team+" "+item.Home_Goals+"<br>v<br>"+item.Away_team+" "+item.Away_Goals+"</span><span class='wwc16__match-detail visible-non-mobile'>"+item.gudate+"<br>"+item.gutime+" (CET)<br>"+item.Stadium_name+", "+item.City+"</span><span class='visible-mobile'>"+item.Home_teamMobile+" "+item.Home_Goals+"<br>v<br>"+item.Away_teamMobile+" " +item.Away_Goals+"</span><span class='wwc16__match-detail visible-mobile'>"+item.shortdate+"</span></div>";
            }
             
             if(item.quickRef == "S" && item.Resultfixture == "result"){
               sCount++; 
               htmlStrSF+= "<div class='wwc16__sf'><span class='wwc16__match-date visible-non-mobile'>Semi-final "+sCount+"</span><span class='wwc16__match-date visible-mobile'>SF"+sCount+"</span><span class='visible-non-mobile'>"+item.Home_team+" "+item.Home_Goals+"<br>v<br>"+item.Away_team+" "+item.Away_Goals+"</span><span class='wwc16__match-detail visible-non-mobile'>"+item.gudate+"<br>"+item.gutime+" (CET)<br> "+item.Stadium_name+", "+item.City+"</span><span class='visible-mobile'>"+item.Home_teamMobile+" "+item.Home_Goals+"<br>v<br>"+item.Away_teamMobile+" " +item.Away_Goals+"</span><span class='wwc16__match-detail visible-mobile'>"+item.shortdate+"</span></div>";
            }

            if(item.quickRef == "F" && item.Resultfixture == "result"){
               htmlStrF+= "<div class='wwc16__final'><span class='wwc16__match-date visible-non-mobile'>Final</span><span class='wwc16__match-date visible-mobile'>Final</span><span class='visible-non-mobile'>"+item.Home_team+" "+item.Home_Goals+"<br>v<br>"+item.Away_team+" "+item.Away_Goals+"</span><span class='wwc16__match-detail visible-non-mobile'>"+item.gudate+"<br>"+item.gutime+" (CET)<br> "+item.Stadium_name+", "+item.City+"</span><span class='visible-mobile'>"+item.Home_teamMobile+" "+item.Home_Goals+"<br>v<br>"+item.Away_teamMobile+" " +item.Away_Goals+"</span><span class='wwc16__match-detail visible-mobile'>"+item.shortdate+"</span></div>";
            }
            
            
        });

        

        document.getElementById('wwc16__r16').innerHTML = htmlStr16;
        document.getElementById('wwc16__rqf').innerHTML = htmlStrQF;
        document.getElementById('wwc16__rsf').innerHTML = htmlStrSF;
        document.getElementById('wwc16__rf').innerHTML = htmlStrF;

    }

    function viewTables(dataGroups){
        //set framework in div
            var dataObjGroup = getDataObj("groupstages");
            var headStrGroup = "<h3>"+dataObjGroup.titleCopy+"</h3><p>"+dataObjGroup.mainCopy+"</p>";
            var htmlStrGroup = "<div class='wc-table' id='table1'></div><div class='wc-table' id='table2'></div><div class='wc-table' id='table3'></div><div class='wc-table' id='table4'></div><div class='wc-table' id='table5'></div><div class='wc-table' id='table6'></div><div class='wc-table' id='table7'></div><div class='wc-table' id='table8'></div>"; 
            document.getElementById('wwc__groups').innerHTML = htmlStrGroup;
            
            document.getElementById('groupSubHead').innerHTML= headStrGroup;

        
            // inject html into tables
            _.each(dataGroups, function(item,i){
                var newHtml = makeATable(item, i);
                document.getElementById('table'+(i+1)).innerHTML = newHtml;  
            });


            // add fixtures to the view under the tables
            var groupFixturesArr = [];

            _.each(dataGroups, function(item,i){ 
                var tempSort = "Group_"+groupLetters[i];
                var tempArr = _.filter(dataFixtures, function(item){ return item.Match_Categ == tempSort; }); 
                groupFixturesArr.push(tempArr); 
            });

        addGroupFixtures(groupFixturesArr);   

    }

    function makeATable (dataIn, i){
        // convert integer (i) to a corresponding letter in alphabet
        var chr = String.fromCharCode(65 + i);

        //title each group with letter returned
         var htmlStr = "<div class='wwc16__group-header'>Group "+ chr +"</div>";

         htmlStr = htmlStr + "<div class='datagrid'><table><thead><tr><th>Team</th><th>P</th><th>W</th><th>D</th><th>L</th><th>GD</th><th>Pts</th></tr></thead>";

            _.each(dataIn, function(item,i){
                
                  var gd = item.F - item.A;
                  var tempStr = "<tr><td><span class='visible-mobile'>"+ item.shortCountry +"</span><span class='visible-non-mobile'>"+item.Country +"</span></td><td>"+ item.P +"</td><td>"+ item.W +"</td><td>"+ item.D +"</td><td>"+ item.L +"</td><td>"+ gd +"</td><td>"+ item.Pts +"</td></tr>"

                  htmlStr = htmlStr+tempStr;
            });

        htmlStr =  htmlStr+"</table></div>";

        return(htmlStr); 

    }

    function get3LetterCode(s){
        var ns = "";
        _.each(dataISO, function (item,i){            
            if(s==item.fullcountryname){  ns=item.fifaisocode; }
        })
        return ns;
    }

    function formatDate(dateIn){
        var dateArr = dateIn.split('/');
        var usDate = new Date(dateArr[1]+"/"+dateArr[0]+"/"+dateArr[2]);
        var dateOptions = { day: 'numeric', month: 'short'};
        var shortDate= usDate.toLocaleDateString('en-GB', dateOptions);   
        var shortDateArr = shortDate.split(' ');
        var guDate = shortDateArr[0]+" "+ shortDateArr[1]

        return (guDate);
    }

     function formatTime(timeIn){

        var timeArr = timeIn.split(':');
        var guTime= timeArr[0]+"."+timeArr[1];    

        return (guTime);
    }

    function formatShortDate(dateIn){

        var dateArr = dateIn.split('/');
        var usDate = new Date(dateArr[1]+"/"+dateArr[0]+"/"+dateArr[2]);
        var dateOptions = { day: 'numeric', month: 'short'};
        var shortDate= usDate.toLocaleDateString('en-GB', dateOptions);   
        var shortDateArr = shortDate.split(' ');
        var shortDateOut = shortDateArr[0]+" "+ shortDateArr[1].substring(0, 3);

        return (shortDateOut);
    }

    function addGroupFixtures(groupFixturesArr){

        _.each(groupFixturesArr, function(groupArr,k){
        //deactivate tz button
            //var tempStr = "<div class='fixtures-group visible-non-mobile' id='fixtureSet_"+k+"'><div class='sub-head-container-2'>Fixtures</div><div class='wwc__tz-button' id='timeSet_"+k+"'></div><div class='fixture-holder'>"

            var tempStr = "<div class='fixtures-group' id='fixtureSet_"+k+"'><div class='sub-head-container-2'>Fixtures</div><div class='fixture-holder'>"
                
                var displayDate = groupArr[0].date;

                    _.each (groupArr, function(item,i){
                            
                            if (i === 0) { 
                                tempStr+="<div class='fixture-date visible-mobile'>"+item.shortdate+"</div><div class='fixture-date visible-non-mobile'>"+item.gudate+"</div>";
                            }
                            
                            if (displayDate != item.date) { 
                                displayDate = item.date;
                                tempStr+="<div class='fixture-date visible-mobile'>"+item.shortdate+"</div><div class='fixture-date visible-non-mobile'>"+item.gudate+"</div>";
                            }

                            if(item.Resultfixture == "fixture"){
                                tempStr+="<div class='fixture-teams'>"+item.Home_team+" v "+item.Away_team+"</div>";
                            }else{
                                tempStr+="<div class='fixture-teams'>"+item.Home_team+" "+item.Home_Goals+" - "+item.Away_Goals+" "+item.Away_team+"</div>";
                            }

                            
                            tempStr+="<div class='fixture-venue'>"+item.gutime+" (CET), "+item.City+"</div>"



                    });

                tempStr += "</div><p class='visible-mobile'></p>";
            // tempStr += "</div></div><div class='wwc__open-fixtures-button visible-mobile' id='fixturesButton_"+k+"'></div>"
            
            document.getElementById('table'+(k+1)).innerHTML = document.getElementById('table'+(k+1)).innerHTML + tempStr;

        });

        addTableListeners();
        //deactivate tz button listener
       // addTzListener();
    }

    function showFixtures(tempId){
        console.log(tempId)
        var idArr = tempId.split('_');
        var idKey = idArr[1];

        document.getElementById("fixtureSet_"+idKey).className = "fixtures-group visible-mobile";
        document.getElementById(tempId).className = "wwc__close-fixtures-button";

        addTableListeners();
    }


    function hideFixtures(tempId){
        var idArr = tempId.split('_');
        var idKey = idArr[1];

        document.getElementById("fixtureSet_"+idKey).className = "fixtures-group visible-non-mobile";
        document.getElementById(tempId).className = "wwc__open-fixtures-button";

        addTableListeners();
    }


    function addTzListener(){

        var testDate = new Date();
        var dateOptions = { hour: 'numeric', minute: 'numeric'};
        var compDate= testDate.toLocaleDateString('en-GB', dateOptions);  
        
        var tzclass = document.getElementsByClassName("wwc__tz-button");
        
        var tzFunction = function() {
            var tempId = this.getAttribute("id");
            console.log(compDate)
        };

       for(var i=0;i<tzclass.length;i++){

            tzclass[i].addEventListener('click', tzFunction, false);

        }

        
    }

    function addTableListeners(){
        var openclass = document.getElementsByClassName("wwc__open-fixtures-button");

        var closeclass = document.getElementsByClassName("wwc__close-fixtures-button");

        var showFunction = function() {
            var c = this.getAttribute("id");
            showFixtures(c);
        };

        var hideFunction = function() {
            var c = this.getAttribute("id");
            hideFixtures(c);
        };

        for(var i=0;i<openclass.length;i++){
            openclass[i].addEventListener('click', showFunction, false);
        }

        for(var i=0;i<closeclass.length;i++){
            closeclass[i].addEventListener('click', hideFunction, false);
        }

    }


    function addShareListeners(){
        var sectionEl = document.getElementsByClassName("wwc__share-button");

            _.each(sectionEl, function(el, i){
                el.addEventListener('click',  function(evt){
                var network = el.getAttribute('data-source');
                shareContent(evt,network)
                })
    });
       
    }

    function shareContent(e, platform, message){

        

        var hashT = " #euro2016 ";
        var shareWindow;
        var twitterBaseUrl = "http://twitter.com/share?text=";
        var facebookBaseUrl = "https://www.facebook.com/sharer/sharer.php?ref=responsive&u=";




        var shareImage = "https://media.guim.co.uk/6a1ef56c6353faa9bf1106ce44b5f3ebb1e206be/0_71_4256_2553/500.jpg";
        var articleUrl = shortURL;
        var facebookUrl = facebookBaseUrl+shortURL;
        var shareUrl = articleUrl;
        var twitPic = "pic.twitter.com/iTAgrtndUN ";

        var fallbackMessage = "The Guardian's Euro 2016 wallchart: all the groups, fixtures and venues ";

        var fbtitle = encodeURIComponent("The Guardian's Euro 2016 wallchart");
        var fbsummary = fallbackMessage;
        
        var facebookUrlNew = "https://www.facebook.com/dialog/share?href="+encodeURIComponent(shortURL)+"&redirect_uri="+encodeURIComponent(shortURL)


        message = message ? message : fallbackMessage;



        
        var shareImagePath = "@@assetPath@@/imgs/";
         
            if(platform === "twitter"){
                shareWindow = 
                    twitterBaseUrl + 
                    encodeURIComponent(twitPic)+
                    encodeURIComponent(message) + 
                    encodeURIComponent(hashT) 
            }else if(platform === "facebook"){
                 shareWindow = "https://www.facebook.com/sharer/sharer.php?app_id=180444840287&ref=responsive&u"+encodeURIComponent(shortURL);
                 console.log(shareWindow)
                     
            }else if(platform === "mail"){
                shareWindow =
                    "mailto:" +
                    "?subject=" + fbtitle +
                    "&body=" + fallbackMessage+" "+shortURL;

                    //mailto:?subject=Sarajevo%3A%20a%20portrait%20of%20the%20city%2020%20years%20after%20the%20Bosnian%20war&body=http%3A%2F%2Fgu.com%2Fp%2F4eqc4%2Fsbl 
            }
        window.open(shareWindow, platform + "share", "width=640,height=320");
    }


// get emailMailto() {
//         return `mailto:?subject=${encodeURIComponent(this.headline)}&body=${encodeURIComponent(this.getShortUrl('email'))}`
//     }

//     get gplusShareUrl() {
//         return `https://plus.google.com/share?url=${encodeURIComponent(this.getShortUrl('gplus'))}`;
//     }

    return {
        init: init
    };
});







