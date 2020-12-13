 
    document.addEventListener("DOMContentLoaded", function() {
          
        var conteudo = encodeURIComponent(document.title + " " + window.location.href);
   
        document.getElementById("whatsapp-share-btt").href = "https://api.whatsapp.com/send?text=" + conteudo;
    }, false);

      document.addEventListener("DOMContentLoaded", function() {            

          document.getElementById("facebook-share-btt").href = "https://www.facebook.com/sharer/sharer.php?u=" + encodeURIComponent(window.location.href);
      }, false);
     
  


  
    
      document.addEventListener("DOMContentLoaded", function() {
          var url = encodeURIComponent(window.location.href);
          var titulo = encodeURIComponent(document.title);
        
          document.getElementById("twitter-share-btt").href = "https://twitter.com/intent/tweet?url="+url+"&text="+titulo;
          
        
      }, false);