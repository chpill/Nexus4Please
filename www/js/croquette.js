define(["jquery"],function($){


    //alert("Hello world");
    
    //croquette("https://play.google.com/store/devices/details?id=nexus_4_8gb");
    // PB de CORS si pas de privilèges (besoin de certif marketplace...)
    // essai avec un fichier en local
    croquette("demoFiles/demo_nexus");

    function croquette(url){
    
        // Pas une "vraie" XHR pour l'instant...

         $.get(url,function(response){
            console.log(response);
         });
    

    }

});
