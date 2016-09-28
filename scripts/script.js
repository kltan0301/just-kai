$(document).ready(function(){

  //for fullpage scrolling
  $('.fullpage').fullpage({
    anchors:['main','about','work','contact'],
    sectionsColor: ['#000000','#403F4C','#F15025','#5B85AA']
  });
  //typing effect on main page
  $('.typing').typed({ strings: ["<h1 class='headerText'>Kai Lin<br><span style='font-size:70%'>Fullstack Web Developer</span></h1>"] });

});
