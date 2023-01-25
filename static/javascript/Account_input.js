// ------------------------------sidenav function------------------------------
function sidenav() {
  document.getElementById("sidenav").style.width = "200px";
  document.getElementById("homepage").hidden = false;
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

// ------------------------------------ DataSet --------------------------------
var Account = [
  "ความร่วมมือในการส่งข้อมูล (25 คะแนน)",
  "1.1 การ Online  Receiving log",
  "1.2 การ Online Cash Report",
  "1.3 การจัดส่งเอกสาร Receiving Log",
  "1.4 การคีย์ข้อมูล Receiving Log",
  "1.5 การคีย์ข้อมูล Mark up / Down",
  "ความร่วมมือกับเจ้าหน้าที่ตรวจนับ(25 คะแนน)",
  "2.1 ความร่วมมือในการตรวจนับเงินสด",
  "2.2 ปฎิบัติตามกฎระเบียบการตรวจนับเงินสด",
  "2.3 ความร่วมมือในการตรวจนับสินค้า",
  "ความร่วมมือในการนำเงินฝาก(10 คะแนน)",
  "3.1 นำฝากธนาคารครบถ้วน / ถูกต้อง ภายในเวลาที่กำหนด 12.00 น.",
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
Account.map((AccountListList, index) => {
  var table = document.getElementById("AccountForm");
  var row = table.insertRow(-1);
  var cell1 = row.insertCell(0);
  var cell2 = row.insertCell(1);
  if (AccountListList == "ความร่วมมือในการส่งข้อมูล (25 คะแนน)") {
    cell1.innerHTML = "<b>" + AccountListList + "</b>";
  } else if (AccountListList == "ความร่วมมือกับเจ้าหน้าที่ตรวจนับ(25 คะแนน)") {
    cell1.innerHTML = "<b>" + AccountListList + "</b>";
  } else if (AccountListList == "ความร่วมมือในการนำเงินฝาก(10 คะแนน)") {
    cell1.innerHTML = "<b>" + AccountListList + "</b>";
  }else {
    cell1.innerHTML = AccountListList;
    cell2.innerHTML =
    '<input  class="form-check-input" type="radio" value="" style="font-size: 1.8rem; margin-right: 10%; border-color: black;" name="' + AccountListList +'" id="' +AccountListList +'"><input  class="form-check-input" type="radio" style="font-size: 1.8rem; margin-right: 10%; border-color: black;" value=""  name="' + AccountListList +'" id="' +AccountListList +'"><input  class="form-check-input" type="radio" style="font-size: 1.8rem; border-color: black;"  value=""  name="' + AccountListList +'" id="' +AccountListList +'">';
}
});

// ------------------------------------ END Show Form TD --------------------------------
