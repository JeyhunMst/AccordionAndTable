

    $(document).ready(function(){
        $
        $(".accordion").click(function(){
          this.nextElementSibling.classList.add("clicked");
          $(".clicked").slideToggle("slow");
          this.nextElementSibling.classList.remove("clicked");
        });
      });

