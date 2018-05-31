$(document).ready(()=>{
  $('.div2').hide();

  $('.div1').click(()=>{

      $('.div2').fadeIn({height: "100px"});

  });

  $('.div2 span').click(()=>{

      $('.div2').fadeOut({height: ""});

  });
});
