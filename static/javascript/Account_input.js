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
}
// ------------------------------END sidenav function---------------------------

// ------------------------------------ ScreenCheck --------------------------------
checkscreen();
function checkscreen() {
  var w = window.innerWidth;
  if (w <= 576) {
    document.getElementById("bodystyle").style.paddingLeft = "0px";
    document.getElementById("bodystyle").style.paddingRight = "0px";
    document.getElementById("projectname").innerHTML =
      "ประเมินผล การบริหารร้าน" + "<br>" + " 7-Eleven";
    document.getElementById("projectname").style.fontSize = "1.2rem";
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
// ------------------------------------ END DataSet --------------------------------

// ------------------------------------ Show Form TD --------------------------------
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
      '<input type="number" class="form-control" step="0.1" name="' +
      AccountListList +
      '" id="' +
      AccountListList +
      '">';
  }
});

// ------------------------------------ END Show Form TD --------------------------------
