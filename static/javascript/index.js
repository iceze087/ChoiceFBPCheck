// ------------------------------sidenav function------------------------------
function sidenav() {
  document.getElementById("sidenav").style.width = "200px";
  document.getElementById("homepage").hidden = false;
  document.getElementById("setting").hidden = false;
  document.getElementById("logout").hidden = false;
  document.getElementById("content").style.marginLeft = "200px";
  document.getElementById("navclose").hidden = false;
}
function closeNav() {
  document.getElementById("sidenav").style.width = "60px";
  document.getElementById("homepage").hidden = true;
  document.getElementById("setting").hidden = true;
  document.getElementById("logout").hidden = true;
  document.getElementById("content").style.marginLeft = "5px";
  document.getElementById("navclose").hidden = true;
}
// ------------------------------END sidenav function---------------------------

// ------------------------------------ ScreenCheck --------------------------------
checkscreen();
function checkscreen() {
  var w = window.innerWidth;
  if (w <= 576) {
    document.getElementById("bodystyle").style.paddingLeft = "0px";
    document.getElementById("bodystyle").style.paddingRight = "0px";
    document.getElementById("projectname").innerHTML = 'ประเมินผล การบริหารร้าน' + '<br>' + ' 7-Eleven'
    document.getElementById("projectname").style.fontSize = '1.2rem';
    document.getElementById("bname").style.fontSize = '1.2rem';
    document.getElementById("baction").style.fontSize = '1.2rem';
  }
}
// ------------------------------------ END ScreenCheck --------------------------------
// --------------------------------------- Data Set --------------------------------------
var branch = [
  {
    id : '2119',
    name :'สถานีรถไฟเชียงใหม',
    status : 1
  },
  {
    id : '2789',
    name :'กาดอินทร',
    status : 1
  },
  {
    id : '3119',
    name :'ศิริมังคลาจารย์',
    status : 0
  },
  {
    id : '3189',
    name :'อบต.สุเทพ',
    status : 0
  },
  {
    id : '4059',
    name :'ไชยปราการ',
    status : 0
  },
  {
    id : '4301',
    name :'กาดอินทร 2',
    status : 1
  },
  {
    id : '5093',
    name :'ศรีปิงเมือง 2',
    status : 0
  },
  {
    id : '5094',
    name :'ศรีดอนไชย1',
    status : 0
  },
  {
    id : '5147',
    name :'ตลาดแม่กวง',	
    status : 0
  },
]

for(i=0 ; i<branch.length; i++){
  console.log(branch[i].name)
  if(branch[i].status == 0){
    document.getElementById('branch').innerHTML += '<div class="branchshow"><div class="row justify-content-center align-items-center"><div class="col-6 col-sm-8 d-flex align-items-center" >'+branch[i].id+' '+branch[i].name+'</div>'+'<div class="col-6 col-sm-4 d-flex align-items-center"><a href="./FBP_input.html"><button type="button" class="btn btn-secondary" onclick="localStorage.setItem('+'\''+'bcheck'+'\''+' , '+branch[i].id+')">ประเมินผล</button></a>&nbsp;<span class="material-symbols-outlined" style="font-size: 2rem;">edit_square</span></div></div></div>'
  }
  else{
    document.getElementById('branch').innerHTML += '<div class="branchshow"><div class="row justify-content-center align-items-center"><div class="col-6 col-sm-8 d-flex align-items-center" >'+branch[i].id+' '+branch[i].name+'</div>'+'<div class="col-6 col-sm-4 d-flex align-items-center"><button type="button" class="btn btn-success">ประเมินผล</button>&nbsp;<span class="material-symbols-outlined" style="font-size: 2rem; color:green;">task_alt</span></div></div></div>'
  }
}

function setbcheck(id){
  console.log(id)
}