
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
    document.getElementById("projectname").innerHTML = 'ประเมินผล การบริหารร้าน'+'<br>'+' 7-Eleven'
    document.getElementById("projectname").style.fontSize= '1.2rem';
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
                  'รายละเอียดงาน , ภาพงานก่อสร้ง , วันที่ตรวจงานซ้ำ',
                  'error'
                )
          }

          form.classList.add('was-validated')
      }, false)
  })
})()
// ------------------------------------ DataSet --------------------------------
var FBP = [
  // 'ผลการดำเนินงานประจำเดือน(3 เดือน) (290  คะแนน)',
  // "1.1  ยอดขายเฉลี่ย/วัน (Ex.VAT.ไม่รวมบัตรโทรศัพท์  ……………………….",
  // "1.2  GP ( ไม่รวมบัตรโทรศัพท์ ) : บาท  ……………………….",
  // "1.3  % Audit (รวมบัตรโทรศัพท์)",
  // "1.4  QSSI - หมวด Process",
  // "1.5  QSSI - หมวด Service",
  // "1.6  QSSI - หมวด Assortment",
  // "1.7  QSSI - หมวด Value",
  // "1.8  QSSI - หมวด Environment",
  // "1.9  QSSI - หมวด Quality",
  // "1.10 QSSI- หมวด Cleanliness",
  // "1.11 QSSI - สินค้าหมดอายุ",
  // "1.12 QSSI - สินค้าขาดจากร้านเฉลี่ย/เดือน",
  // "1.13 QSSI - หมวด Follow Up",
  // "1.14 จำนวนCR เฉพาะหมวดบริการ",
  {
    name :'การบริหารงานบุคคล ( 130 คะแนน )',
    id : 'f1',
    range : 5
  },
  {
    name :"2.1  อัตรากำลังคนรวมครบตามโครงสร้าง",
    id : 'f2',
    range : 5
  }, 
  {
    name :"2.2  จำนวนผู้ช่วยผุ้จัดการร้านและ/หรือหัวหน้าผลัดที่ผ่านการอบรมหลักสูตรมาตรฐานผู้ช่วยผู้จัดการร้าน",
    id : 'f3',
    range : 3
  },
  {
    name :"2.3  จำนวนพนักงานร้านที่ได้รับการอบรมหลักสูตรมาตรฐานพนักงานร้าน",
    id : 'f4',
    range : 5
  },
  {
    name :"2.4  การบริหารจัดการและการดูแลทีมงานในร้าน",
    id : 'f5',
    range : 3
  },
  {
    name :"2.5  จ้างงานตามกฎหมายแรงงานและจัดทำสวัสดิการประกันสังคม",
    id : 'f6',
    range : 3
  },
  {
    name :"2.6  ไม่ออกกฎผิดเงื่อนไขที่บริษัทกำหนด และไม่จ้างงานตามกฎหมายแรงงาน",
    id : 'f7',
    range : 3
  },
  {
    name :"2.7  ส่งสำเนาทะเบียนลูกจ้าง",
    id : 'f8',
    range : 5
  },
  {
    name : 'ความร่วมมือและการเอาใจใส่บริหารที่ร้านสาขา (100 คะแนน)',
    id : 'f9',
    range : 5
  },
  {
    name : "3.1  การดูแลมาตราฐานร้านอย่างสม่ำเสมอ",
    id : 'f10',
    range : 3
  },
  {
    name : "3.2  การให้ความร่วมมือในการบริหารงานขายต่าง ๆ",
    id : 'f11',
    range : 5
  },
  {
    name : "3.3  การสั่งสินค้าผ่านระบบ Online",
    id : 'f12',
    range : 5
  },
  {
    name : "3.4  การให้ความร่วมมือกับโครงการต่างๆรวมถึงนโยบายใหม่ๆของบริษัท",
    id : 'f13',
    range : 5
  },
  {
    name : "3.5  ความร่วมมือในการประชุมกับทีม OPT",
    id : 'f14',
    range : 3
  },
  {
    name : "3.6  ไม่เคยได้รับหนังสือขอความร่วมมือ",
    id : 'f15',
    range : 3
  },
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

// FBP.map((FBPList, index) => {
//   var table = document.getElementById("FBPForm");
//   var row = table.insertRow(-1);
//   var cell1 = row.insertCell(0);
//   var cell2 = row.insertCell(1);
//   if(FBP[index].name == 'ผลการดำเนินงานประจำเดือน(3 เดือน) (290  คะแนน)'){
//     cell1.innerHTML = '<b>'+FBP[index].name+'</b>';
//   }
//   else if(FBP[index].name == 'การบริหารงานบุคคล ( 130 คะแนน )'){
//     cell1.innerHTML = '<b>'+FBP[index].name+'</b>';
//   }
//   else if(FBP[index].name == 'ความร่วมมือและการเอาใจใส่บริหารที่ร้านสาขา (100 คะแนน)'){
//     cell1.innerHTML = '<b>'+FBP[index].name+'</b>';
//   }
//   else{
//     cell1.innerHTML = FBP[index].name;
//     cell2.innerHTML =
//       '<div class="scoretag"><label id="' + FBP[index].id + '" class="range-value"></label></div><input type="range" class="form-range" min="1" max="' + FBP[index].range + '" id="' + FBP[index].name + '" onchange="showvalue('+'\''+FBP[index].id+'\''+', id , value)">';
//   }
// });

// ------------------------------------ END Show Form TD --------------------------------
function showvalue(id , name , value){
  console.log(value)
  const range = document.getElementById(name);
  const rangeValue = document.getElementById(id);
  var total = range.value
  rangeValue.innerHTML = total + " "+ "คะแนน";
}
