$("input[type='date']").keydown(function (event) { event.preventDefault(); });
// ------------------------------sidenav function------------------------------
function sidenav() {
  document.getElementById("sidenav").style.width = "200px";
  document.getElementById("homepage").hidden = false;
  document.getElementById("report").hidden = false;
  document.getElementById("noti").hidden = false;
  document.getElementById("score").hidden = false;
  document.getElementById('empname').hidden = false;
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
  document.getElementById("noti").hidden = true;
  document.getElementById("score").hidden = true;
  document.getElementById('empname').hidden = true;
  document.getElementById("setting").hidden = true;
  document.getElementById("logout").hidden = true;
  document.getElementById("content").style.marginLeft = "5px";
  document.getElementById("navclose").hidden = true;
  document.getElementById("opennavs").hidden = false;
}
// ------------------------------END sidenav function---------------------------
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
                  'กรุณาตรวจสอบข้อมูลให้ครบถ้วน',
                  'error'
                )
          }

          form.classList.add('was-validated')
      }, false)
  })
})()

// ------------------------------------ DataSet --------------------------------
var FBP = [
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
    name : "2.1 อัตรากำลังคนรวมครบตามโครงสร้าง",
    score : 40 
  },
  {
    name : "2.2 จำนวนผู้ช่วยผุ้จัดการร้านและ/หรือหัวหน้าผลัดที่ผ่านการอบรมหลักสูตรมาตรฐานผู้ช่วยผู้จัดการร้าน",
    score : 20
  },
  {
    name : "2.3 จำนวนพนักงานร้านที่ได้รับการอบรมหลักสูตรมาตรฐานพนักงานร้าน",
    score : 20
  },
  {
    name : "2.4 การบริหารจัดการและการดูแลทีมงานในร้าน",
    score : 20
  },
  {
    name : "2.5 จ้างงานตามกฎหมายแรงงานและจัดทำสวัสดิการประกันสังคม",
    score : 10
  },
  {
    name : "2.6 ไม่ออกกฎผิดเงื่อนไขที่บริษัทกำหนด และไม่จ้างงานตามกฎหมายแรงงาน",
    score : 15
  },
  {
    name : "2.7 ส่งสำเนาทะเบียนลูกจ้าง",
    score : 10
  },
  {
    name : "3.1 การดูแลมาตราฐานร้านอย่างสม่ำเสมอ",
    score : 15
  },
  {
    name : "3.2 การให้ความร่วมมือในการบริหารงานขายต่าง ๆ",
    score : 15
  },
  {
    name : "3.3 การสั่งสินค้าผ่านระบบ Online",
    score : 10
  },
  {
    name : "3.4 การให้ความร่วมมือกับโครงการต่างๆรวมถึงนโยบายใหม่ๆของบริษัท",
    score : 10
  },
  {
    name : "3.5 ความร่วมมือในการประชุมกับทีม OPT",
    score : 20
  },
  {
    name : "3.6 ไม่เคยได้รับหนังสือขอความร่วมมือ",
    score : 30
  },
  
];
var Account = [
  {
    name : "1.1 การ Online  Receiving log",
    score : 5
  },
  {
    name : "1.2 การ Online Cash Report",
    score : 5
  },
  {
    name : "1.3 การจัดส่งเอกสาร Receiving Log",
    score : 5
  },
  {
    name : "1.4 การคีย์ข้อมูล Receiving Log",
    score : 5
  },
  {
    name : "1.5 การคีย์ข้อมูล Mark up / Down",
    score : 5
  },
  {
    name : "2.1 ความร่วมมือในการตรวจนับเงินสด",
    score : 5
  },
  {
    name : "2.2 ปฎิบัติตามกฎระเบียบการตรวจนับเงินสด",
    score : 5
  },
  {
    name : "2.3 ความร่วมมือในการตรวจนับสินค้า",
    score : 15
  },
  {
    name : "3.1 นำฝากธนาคารครบถ้วน / ถูกต้อง ภายในเวลาที่กำหนด 12.00 น.",
    score : 10
  },
];
var Audit = [
  {
    name : "ความร่วมมือในการเข้าร่วมกิจกรรมต่าง ๆ ของบริษัท",
    score : 10
  }
];
// ------------------------------------ END DataSet --------------------------------

// ------------------------------------ Show Form TD --------------------------------
// runfbp();
// runaccount();
// runaudit();

// function runfbp(){
//   FBP.map((FBPList, index) => {
//       var table = document.getElementById("FBPConfig");
//     var row = table.insertRow(-1);
//     var cell1 = row.insertCell(0);
//     var cell2 = row.insertCell(1);
//     var cell3 = row.insertCell(2);
//     var cell4 = row.insertCell(3);
//     cell1.innerHTML = FBP[index].name;
//     cell2.innerHTML =
//       ' <input class="form-check-input" type="checkbox" value="" name="' +
//       FBP[index].name +
//       '" id="' +
//       FBP[index].name +
//       '">';
//     cell3.innerHTML = FBP[index].score; 
//     cell4.innerHTML = '<button type="button" class="btn btn-warning" onclick="scoreedit('+'\''+FBP[index].name+'\''+')" data-bs-toggle="modal" data-bs-target="#editscore">แก้ไขคะแนน</button>';
//   });
// }

// function runaccount(){
//   Account.map((AccountList, index) => {
//       var table = document.getElementById("AccountConfig");
//       var row = table.insertRow(-1);
//       var cell1 = row.insertCell(0);
//       var cell2 = row.insertCell(1);
//       var cell3 = row.insertCell(2);
//       var cell4 = row.insertCell(3);
//       cell1.innerHTML = Account[index].name;
//       cell2.innerHTML =
//         ' <input class="form-check-input" type="checkbox" value="" name="' +
//         Account[index].name +
//         '" id="' +
//         Account[index].name +
//         '">';
//       cell3.innerHTML = Account[index].score; 
//       cell4.innerHTML = '<button type="button" class="btn btn-warning" onclick="scoreedit('+'\''+Account[index].name+'\''+')" data-bs-toggle="modal" data-bs-target="#editscore">แก้ไขคะแนน</button>'
//   });
// }

// function runaudit(){
//   Audit.map((AuditList, index) => {
//     var table = document.getElementById("AuditConfig");
//     var row = table.insertRow(-1);
//     var cell1 = row.insertCell(0);
//     var cell2 = row.insertCell(1);
//     var cell3 = row.insertCell(2);
//     var cell4 = row.insertCell(3);
//     cell1.innerHTML = Audit[index].name;
//     cell2.innerHTML =
//       ' <input class="form-check-input" type="checkbox" value="" name="' +
//       Audit[index].name +
//       '" id="' +
//       Audit[index].name +
//       '">';
//     cell3.innerHTML = Audit[index].score; 
//     cell4.innerHTML = '<button type="button" class="btn btn-warning" onclick="scoreedit('+'\''+Audit[index].name+'\''+')" data-bs-toggle="modal" data-bs-target="#editscore">แก้ไขคะแนน</button>'
//   });
// }


// ------------------------------------ END Show Form TD --------------------------------

// --------------------------------------- Edit Score --------------------------------------
var newscore
var startdate
// function scoreedit(name){
//   console.log(name)
//   document.getElementById('scoreheader').innerHTML = name;
// }
function getnewscore(){
  newscore = document.getElementById('score').value;
  startdate = document.getElementById('startdate').value;
  console.log(newscore , startdate)
}
function commitedit(){
  var package = []
  
  package.push({newscore: newscore, startdate: startdate})
  const data = package[0]

  var myHeaders = new Headers();
  var sendpackage = JSON.stringify(data);
  console.log(sendpackage)

  var requestpackge = {
      method: 'POST',
      headers: myHeaders,
      body: sendpackage,
      redirect: 'follow'
  };
  fetch("#", requestpackge)
      .then(response => response.json())
      .then(result => {
          //console.log(result)
          if (result.status === 'ok') {
              Swal.fire(
                  'บันทึกเสร็จสิ้น',
                  'กลับสู่หน้าตรวจสอบงาน',
                  'success'
              ).then(() => {
                  window.location = "./Formconfix.html";
              })
          }
          else {
              Swal.fire(
                  'เกิดข้อผิดพลาด',
                  'กรุณาลองใหม่อีกครั้ง',
                  'error'
              )
          }
      })
}

// ------------------------------------ Addlist --------------------------------
var sectionselect
var adddetail
function addlist(){
  sectionselect = document.getElementById('sectionselect').value;
  adddetail = document.getElementById('adddetail').value;
  scoredetail = document.getElementById('scoredetail').value;
}
function commitadd(){
  if(sectionselect == 'SBP' && adddetail != ''){
    FBP.push({name :adddetail, score : scoredetail});
    document.getElementById('FBPConfig').innerHTML = '';
    runfbp();
    Swal.fire(
      'เพิ่มรายการสำเร็จ',
      '',
      'success'
    )
  }
  else if(sectionselect == 'Account' && adddetail != ''){
    Account.push({name :adddetail, score : scoredetail});
    document.getElementById('AccountConfig').innerHTML = '';
    runaccount();
    Swal.fire(
      'เพิ่มรายการสำเร็จ',
      '',
      'success'
    )
  }
  else if(sectionselect == 'Audit' && adddetail != ''){
    Audit.push({name :adddetail, score : scoredetail});
    document.getElementById('AuditConfig').innerHTML = '';
    runaudit();
    Swal.fire(
      'เพิ่มรายการสำเร็จ',
      '',
      'success'
    )
  }
  else{
    Swal.fire(
      'กรุณาเลือกหัวข้อ หรือเพิ่มรายละเอียด',
      '',
      'error'
    )
  }
}
// ------------------------------------ END Addlist --------------------------------
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