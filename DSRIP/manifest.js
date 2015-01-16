// This document, manifest.js, is the only file a wApps repository needs to maintain.
// it includes four sections: 1) Branding, 2) Tabs, 3) Apps, and 4) Authors


// 1) BRANDING - the icon and link in the upper left corner
wApps.manifest.brand={
    pic:'https://wapps.googlecode.com/git/brandMathBiol.png',
    url:'https://github.com/wApps/manifest#wapps-all-you-need-is-a-manifest'
};

// 2) TABS - the navigation tabs in the head of wApps. 
//    The code manage "myApps", "Store" and "People",
//    the rest is up to you.
wApps.manifest.tabs={
    "myApps":{
        html:'Apps you selected from the AppStore ...',
        Div:{} // where the DOM element will be set later 
    },
    "Store":{
        html:'Retrieving list of Apps from the manifest ...',
        Div:{}
    },
    "People":{
        html:'Retrieving list of people authoring Apps ...',
        Div:{}
    },
    "About":{
        html:'<h1>wApps</h1>This is an experiment in loosening the architecture of a webApp store to achieve a deeper integration between autonomously developed components.',
        Div:{}
    }
};

// 3) APPS - the description of the applications 
wApps.manifest.apps.push(

    {
    "name" : 'SPARCS plot PQI',
    "description" : 'Hospital Inpatient Prevention Quality Indicators (PQI) for Adult Discharges by Zip Code (SPARCS): Beggining 2009',
    "url" : 'https://mathbiol.github.io/openHealth/?jobs/pqiSuffolk.js',
    "author" : 'Jonas Almeida',
    buildUI:function(id){
        this.require('', // script needed to volunteer compute cycles to QM
            function(){
                $('#'+id).html("<iframe width=100% height=1700 src='https://mathbiol.github.io/openHealth/?jobs/pqiSuffolk.js'/>");
            });
        }
    },

    {
    "name" : 'SPARCS tabulate Diabetes',
    "description" : 'Hospital Inpatient Discharges (SPARCS De-Identified): 2012',
    "url" : 'https://mathbiol.github.io/openHealth/?jobs/sparcsSuffolk2012tabulateDiabetes.js',
    "author" : 'Jonas Almeida',
    buildUI:function(id){
        this.require('', // script needed to volunteer compute cycles to QM
            function(){
                $('#'+id).html("<iframe width=100% height=1700 src='https://mathbiol.github.io/openHealth/?jobs/pqiSuffolk.js'/>");
            });
        }
    },

    {
    "name" : 'SPARCS tabulate Asthma',
    "description" : 'Hospital Inpatient Discharges (SPARCS De-Identified): 2012',
    "url" : 'https://mathbiol.github.io/openHealth/?jobs/sparcsSuffolk2012tabulateAsthma.js',
    "author" : 'Jonas Almeida',
    buildUI:function(id){
        this.require('', // script needed to volunteer compute cycles to QM
            function(){
                $('#'+id).html("<iframe width=100% height=1700 src='https://mathbiol.github.io/openHealth/?jobs/sparcsSuffolk2012tabulateAsthma.js'/>");
            });
        }
    },

    {
    "name" : 'SPARCS tabulate all',
    "description" : 'Hospital Inpatient Discharges (SPARCS De-Identified): 2012',
    "url" : 'https://mathbiol.github.io/openHealth/?jobs/sparcsSuffolk2012tabulate.js',
    "author" : 'Jonas Almeida',
    buildUI:function(id){
        this.require('', // script needed to volunteer compute cycles to QM
            function(){
                $('#'+id).html("<iframe width=100% height=1700 src='https://mathbiol.github.io/openHealth/?jobs/sparcsSuffolk2012tabulate.js'/>");
            });
        }
    },

    {
    "name": "ET callHome",
    "description": "a little coding on the manifest can go a long way.",
    "url": "https://code.google.com/p/jmat/", // home page of App
    "author":"Jonas Almeida",
    "namespace":'jmat',
    buildUI:function(id){
        this.require('https://jmat.googlecode.com/git/jmat.js', //'https://localhost:8888/jmat/jmat.js',
            function(){
                $('<div id="plotHere">').appendTo($('#'+id).html(''));
                jmat.plot("plotHere",jmat.rand(100),jmat.rand(100));
                var bt = $('<button>').html('call home').appendTo($('#'+id));
                bt.click(function(){jmat.plot("plotHere",jmat.rand(100),jmat.rand(100))});      
            }
        )}
    },

    {
    "name": "someWApp",
    "description": "Some wApp one of you links here",
    "url": "https://uab.mathbiol.org/workshop",
    "author":"Some Author",
    "namespace":'Some_wApp',
    buildUI:function(id){
        this.require('', // script to load your code 
            function(){
                $('#'+id).html("<h1>Some wApp</h1>Some Application you developped and want to wApp here");
            });
        }
    }
);

// 4) AUTHORS - description of the authors, matching the names in the Apps,
//              where they can be described as a string or, when there is
//              a team of authors, as an Array of strings .
wApps.manifest.authors.push(
    {
    "name":"Jonas Almeida",
    "url":"https://jonasalmeida.info"
    },
    {
    "name":"Some Author",
    "url":"https://someURL"
    }
);