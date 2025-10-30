(function(){
  var y = new Date().getFullYear();
  ['year','year2','year3','year4'].forEach(id=>{
    var el=document.getElementById(id);
    if(el) el.textContent=y;
  });

  document.querySelectorAll('.nav-toggle').forEach(btn=>{
    btn.addEventListener('click',()=>{
      var target=btn.nextElementSibling;
      if(!target)return;
      target.style.display=(target.style.display==='flex')?'':'flex';
    });
  });

  window.handleForm=function(e){
    e.preventDefault();
    var status=document.getElementById('formStatus');
    if(status) status.textContent='Thanks — message sent (demo).';
    return false;
  };
})();
