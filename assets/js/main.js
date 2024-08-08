(function($) {
  
  "use strict";  

  $(window).on('load', function() {

    /* 
   MixitUp
   ========================================================================== */
  $('#portfolio').mixItUp();

  /* 
   One Page Navigation & wow js
   ========================================================================== */
    var OnePNav = $('.onepage-nev');
    var top_offset = OnePNav.height() - -0;
    OnePNav.onePageNav({
      currentClass: 'active',
      scrollOffset: top_offset,
    });
  
  /*Page Loader active
    ========================================================*/
	
		/*PRELOADER JS*/ 
			$('.spinner').fadeOut();
			$('.preloader').delay(350).fadeOut('slow'); 
		/*END PRELOADER JS*/

		/*START MENU JS*/		
			 if ($(window).scrollTop() > 200) {
              $('.fixed-top').addClass('menu-bg');
          } else {
              $('.fixed-top').removeClass('menu-bg');
          }
			$(window).on('scroll', function(){
				if ( $(window).scrollTop() > 100 ) {
					$('.site-navigation, .header-white, .header').addClass('navbar-fixed');
				} else {
					$('.site-navigation, .header-white, .header').removeClass('navbar-fixed');
				}
			});				
		/*END MENU JS*/	

      /* WOW Scroll Spy
    ========================================================*/
     var wow = new WOW({
      //disabled for mobile
        mobile: false
    });

    wow.init();

    /* Nivo Lightbox 
    ========================================================*/
    $('.lightbox').nivoLightbox({
        effect: 'fadeScale',
        keyboardNav: true,
      });

    /* Counter
    ========================================================*/
    $('.counterUp').counterUp({
     delay: 20,
     time: 3000
    });
	
	 /* Tesimonial
    ========================================================*/
	$(".carousel-testimony").owlCarousel({
		loop:true,
		navText:false,
		autoplay: true,
		items:1,
		slideSpeed: 5000,
		responsive:{
			0:{
				items:1
			},
			768:{
				items:1
			},
			979:{
				items:1
			},
			1000:{
				items:1
			}
		}
	});


    /* Back Top Link active
    ========================================================*/
      var offset = 200;
      var duration = 500;
      $(window).scroll(function() {
        if ($(this).scrollTop() > offset) {
          $('.back-to-top').fadeIn(400);
        } else {
          $('.back-to-top').fadeOut(400);
        }
      });

      $('.back-to-top').on('click',function(event) {
        event.preventDefault();
        $('html, body').animate({
          scrollTop: 0
        }, 600);
        return false;
      });



  });      

}(jQuery));




document.addEventListener("DOMContentLoaded", function() {
  const projects = [
      {
          img: "assets/img/Cinef.png",
          title: "Cineflix website",
          date: "August 31, 2022",
          category: "Development",
          description: "is a movie website developed using HTML, CSS and JavaScript technologies. The page offers an intuitive and attractive interface for users who want to explore information about various movies.",
          link: "https://cineflix23.github.io/Peliculasyseries2023/login.html?"
      },
      {
          img: "assets/img/AR.png",
          title: "ARMusic Page",
          date: "December 15, 2022",
          category: "Development",
          description: "MusicHub is an interactive website created with HTML, CSS and JavaScript, designed for music lovers. Offers a wide collection of music resources available for download with a modern and easy-to-use interface.",
          link: "https://andresra13.github.io/AR-MinWeb/?"
      },
      {
          img: "assets/img/Food.png",
          title: "Food Page",
          date: "January 31, 2023",
          category: "Development",
          description: "FoodieFast is a dynamic website built with HTML, CSS and JavaScript, designed for fast food enthusiasts. It offers a varied menu of options available to order, including burgers, pizzas, and tacos.",
          link: "https://andresr13.github.io/AR-WebSite/?"
      },
      {
          img: "assets/img/Port.png",
          title: "Portafolio AR",
          date: "March 20, 2023",
          category: "Development",
          description: "MyPortfolio is a modern website developed with HTML, CSS and JavaScript, designed to present jobs and professional skills. Offers a well-organized collection of projects, with a clean and easy-to-navigate interface.",
          link: "https://ar-portafolio.netlify.app"
      },
      {
          img: "assets/img/Admi.png",
          title: "Expense manager",
          date: "May 29, 2023",
          category: "Development",
          description: "MY ADMIN is an efficient website developed with HTML, CSS and JavaScript, designed to help users manage and monitor their expenses. Offers tools to record and categorize expenses and view detailed reports.",
          link: "https://myadm.netlify.app"
      },
      {
          img: "assets/img/scann.png",
          title: "Drawy Scanner",
          date: "July 1, 2023",
          category: "Development",
          description: "is a website developed with HTML, Bootstrap, and JavaScript, designed to help users view Wi-Fi passwords. It offers a simple and easy-to-use interface where users can scan and even generate a QR code.",
          link: "https://todli.netlify.app/?"
      },
      {
          img: "assets/img/CineTV.png",
          title: "Api-Movies",
          date: "September 13, 2023",
          category: "Development",
          description: "is an innovative application developed with HTML, CSS and JavaScript, designed for movie lovers who want to stay up to date with the latest released movies. Users can explore an up-to-date selection of the latest releases.",
          link: "https://cinemovietv.netlify.app"
      },
      {
          img: "assets/img/eco.png",
          title: "Eccomerce web",
          date: "December 12, 2023",
          category: "Development",
          description: "is a cutting-edge online store developed with HTML, CSS and JavaScript, designed to showcase the latest trends and styles. Offers an exceptional shopping experience where users can explore a wide selection of clothing items.",
          link: "https://ecomerce-main.netlify.app"
      },
      
      {
          img: "assets/img/aratech.png",
          title: "ARA TECHNOLOGY",
          date: "July 31, 2024",
          category: "Design",
          description: "It is an app developed with HTML, CSS and JavaScript, designed to display web page templates. It offers an exceptional shopping experience where users can explore a wide selection of web templates and also offer development services.",
          link: "https://aratech.netlify.app"
      }
  ];

  const projectsPerPage = 6;  // Mostrar 6 proyectos por página
  const totalPages = Math.ceil(projects.length / projectsPerPage);
  let currentPage = 1;

  function renderProjects() {
      const projectsContainer = document.getElementById('projects-container');
      projectsContainer.innerHTML = "";

      const start = (currentPage - 1) * projectsPerPage;
      const end = start + projectsPerPage;
      const projectsToShow = projects.slice(start, end);

      projectsToShow.forEach(project => {
          const projectElement = `
              <div class="col-lg-4 col-md-4 col-xs-12">
                  <div class="single_blog wow fadeInUp">
                      <div class="blog-thumb">
                          <div class="blog-image">
                             <img src="${project.img}" class="img-responsive" alt=""/>
                          </div>
                          <div class="blog-info">
                              <h4>${project.title}</h4>
                              <small><i class="fa fa-clock-o"></i> ${project.date}</small>
                              <span>| ${project.category}</span>                                            
                              <p>${project.description}</p>
                              <a href="${project.link}" target="_blank" class="btn blog_btn btn-secondary">watch online</a>
                          </div>
                      </div>
                  </div>
              </div>`;
          projectsContainer.innerHTML += projectElement;
      });
  }

  function renderPagination() {
      const paginationContainer = document.getElementById('pagination');
      paginationContainer.innerHTML = "";

      for (let i = 1; i <= totalPages; i++) {
          const pageButton = document.createElement('button');
          pageButton.textContent = i;
          pageButton.classList.add('btn', 'btn-secondary', 'pagination-btn');
          if (i === currentPage) {
              pageButton.classList.add('active');
          }
          pageButton.addEventListener('click', function() {
              currentPage = i;
              renderProjects();
              renderPagination();
          });
          paginationContainer.appendChild(pageButton);
      }
  }

  renderProjects();
  renderPagination();
});
