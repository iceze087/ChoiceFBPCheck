
// ------------------------------sidenav function------------------------------
function sidenav() {
  document.getElementById("sidenav").style.width = "200px";
  document.getElementById("homepage").hidden = false;
  document.getElementById("report").hidden = false;
  document.getElementById("FPB").hidden = false;
  document.getElementById("account").hidden = false;
  document.getElementById("audit").hidden = false;
  document.getElementById("setting").hidden = false;
  document.getElementById("logout").hidden = false;
  document.getElementById("content").style.marginLeft = "200px";
  document.getElementById("navclose").hidden = false;
  document.getElementById("opennavs").hidden = true;
}
function closeNav() {
  document.getElementById("sidenav").style.width = "60px";
  document.getElementById("homepage").hidden = true;
  document.getElementById("report").hidden = true;
  document.getElementById("FPB").hidden = true;
  document.getElementById("account").hidden = true;
  document.getElementById("audit").hidden = true;
  document.getElementById("setting").hidden = true;
  document.getElementById("logout").hidden = true;
  document.getElementById("content").style.marginLeft = "5px";
  document.getElementById("navclose").hidden = true;
  document.getElementById("opennavs").hidden = false;
}
// ------------------------------END sidenav function---------------------------

// ------------------------------------ ScreenCheck --------------------------------
checkscreen();
function checkscreen() {
  var w = window.innerWidth;
  if (w <= 576) {
    document.getElementById("bodystyle").style.paddingLeft = "0px";
    document.getElementById("bodystyle").style.paddingRight = "0px";
    document.getElementById("projectname").hidden = true;
    document.getElementById("projectname").innerHTML =
      "ประเมินผล การบริหารร้าน" + "<br>" + " 7-Eleven";
    document.getElementById("projectname").style.fontSize = "1.2rem";
    document.getElementById("h1").style.width = '58%';
  }
  if (w > 576 && w <=820) {
    document.getElementById("sidenav").style.paddingTop = "125px";
    document.getElementById("bodystyle").style.paddingTop = "130px";
    document.getElementById("bodystyle").style.paddingLeft = "70px";
    document.getElementById("bodystyle").style.paddingRight = "10px";
    document.getElementById("bodystyle").style.width = '100%';   
    document.getElementById("projectname").innerHTML = "ประเมินผล การบริหารร้าน 7-Eleven";
    document.getElementById("projectname").style.fontSize = "1.8rem";
  }
}
// ------------------------------------ END ScreenCheck --------------------------------
(() => {
  'use strict'

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  const forms = document.querySelectorAll('.needs-validation')

  // Loop over them and prevent submission
  Array.from(forms).forEach(form => {
      form.addEventListener('submit', event => {
          if (!form.checkValidity()) {
              event.preventDefault()
              event.stopPropagation()
              Swal.fire(
                  'กรอกข้อมูลไม่ครบถ้วน',
                  'กรุณาตรวจสอบข้อมูลอีกครั้ง',
                  'error'
                )
          }
          form.classList.add('was-validated')
      }, false)
  })
})()
// ------------------------------------ DataSet --------------------------------
var Audit = [
  {
    name : "ความร่วมมือในการเข้าร่วมกิจกรรมต่าง ๆ ของบริษัท",
    id : 'a1',
    range : 5
  }
];
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
    status : 1
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
    status : 1
  },
]
// ------------------------------------ END DataSet --------------------------------

// ------------------------------------ Show Form TD --------------------------------
var bcheck = localStorage.getItem('bcheck')
for(var b = 0 ; b < branch.length; b++){
  if(bcheck == branch[b].id){
    document.getElementById('showbdetail').innerHTML = 'ร้านสาขาที่ : ' + branch[b].id + ' ' + branch[b].name
  }
}

// Audit.map((AuditList, index) => {
//   var table = document.getElementById("AccountForm");
//   var row = table.insertRow(-1);
//   var cell1 = row.insertCell(0);
//   var cell2 = row.insertCell(1);

//   cell1.innerHTML = Audit[index].name;
//   cell2.innerHTML = '<div class="scoretag"><label id="' +Audit[index].id + '" class="range-value"></label></div><input type="range" class="form-range" min="1" max="' + Audit[index].range + '" id="' + Audit[index].name + '" onchange="showvalue('+'\''+Audit[index].id+'\''+', id)">';
// });

// ------------------------------------ END Show Form TD --------------------------------
function showvalue(id , name){
  const range = document.getElementById(name);
  const rangeValue = document.getElementById(id);
  var total = range.value
  rangeValue.innerHTML = total + " "+ "คะแนน";

}

function signout(){
  Swal.fire({
      title: 'ออกจากระบบ',
      text: "ต้องการจะออกจากระบบหรือไม่?",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'ออกจากระบบ',
      cancelButtonText: 'ยกเลิก',
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
          'ออกจากระบบ',
          'ทำการออกจากระบบแล้ว',
          'success'
        ).then(() => {
          window.location = "./login";
      })
      }
    })
}