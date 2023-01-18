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
    document.getElementById("projectname").innerHTML =
      "ประเมินผล การบริหารร้าน" + "<br>" + " 7-Eleven";
    document.getElementById("projectname").style.fontSize = "1.2rem";
  }
}

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
  "2.1  อัตรากำลังคนรวมครบตามโครงสร้าง",
  "2.2  จำนวนผู้ช่วยผุ้จัดการร้านและ/หรือหัวหน้าผลัดที่ผ่านการอบรมหลักสูตรมาตรฐานผู้ช่วยผู้จัดการร้าน",
  "2.3  จำนวนพนักงานร้านที่ได้รับการอบรมหลักสูตรมาตรฐานพนักงานร้าน",
  "2.4  การบริหารจัดการและการดูแลทีมงานในร้าน",
  "2.5  จ้างงานตามกฎหมายแรงงานและจัดทำสวัสดิการประกันสังคม",
  "2.6  ไม่ออกกฎผิดเงื่อนไขที่บริษัทกำหนด และไม่จ้างงานตามกฎหมายแรงงาน",
  "2.7  ส่งสำเนาทะเบียนลูกจ้าง",
  "3.1  การดูแลมาตราฐานร้านอย่างสม่ำเสมอ",
  "3.2  การให้ความร่วมมือในการบริหารงานขายต่าง ๆ",
  "3.3  การสั่งสินค้าผ่านระบบ Online",
  "3.4  การให้ความร่วมมือกับโครงการต่างๆรวมถึงนโยบายใหม่ๆของบริษัท",
  "3.5  ความร่วมมือในการประชุมกับทีม OPT",
  "3.6  ไม่เคยได้รับหนังสือขอความร่วมมือ",
];
var Account = [
  "1.1 การ Online  Receiving log",
  "1.2 การ Online Cash Report",
  "1.3 การจัดส่งเอกสาร Receiving Log",
  "1.4 การคีย์ข้อมูล Receiving Log",
  "1.5 การคีย์ข้อมูล Mark up / Down",
  "2.1 ความร่วมมือในการตรวจนับเงินสด",
  "2.2 ปฎิบัติตามกฎระเบียบการตรวจนับเงินสด",
  "2.3 ความร่วมมือในการตรวจนับสินค้า",
  "3.1 นำฝากธนาคารครบถ้วน / ถูกต้อง ภายในเวลาที่กำหนด 12.00 น.",
];
var Audit = ["ความร่วมมือในการเข้าร่วมกิจกรรมต่าง ๆ ของบริษัท"];
// ------------------------------------ END DataSet --------------------------------

// ------------------------------------ Show Form TD --------------------------------
FBP.map((FBPList, index) => {
  var table = document.getElementById("FBPConfig");
  var row = table.insertRow(-1);
  var cell1 = row.insertCell(0);
  var cell2 = row.insertCell(1);
  var cell3 = row.insertCell(2);
  cell1.innerHTML = FBPList;
  cell2.innerHTML =
    ' <input class="form-check-input" type="checkbox" value="" name="' +
    FBPList +
    '" id="' +
    FBPList +
    '">';
  cell3.innerHTML =
    '<input type="number" class="form-control" step="0.1" name="' +
    FBPList +
    '" id="' +
    FBPList +
    '">';
});

Account.map((AccountList, index) => {
  var table = document.getElementById("AccountConfig");
  var row = table.insertRow(-1);
  var cell1 = row.insertCell(0);
  var cell2 = row.insertCell(1);
  var cell3 = row.insertCell(2);
  cell1.innerHTML = AccountList;
  cell2.innerHTML =
    ' <input class="form-check-input" type="checkbox" value="" name="' +
    AccountList +
    '" id="' +
    AccountList +
    '">';
  cell3.innerHTML =
    '<input type="number" class="form-control" step="0.1" name="' +
    AccountList +
    '" id="' +
    AccountList +
    '">';
});

Audit.map((AuditList, index) => {
  var table = document.getElementById("AuditConfig");
  var row = table.insertRow(-1);
  var cell1 = row.insertCell(0);
  var cell2 = row.insertCell(1);
  var cell3 = row.insertCell(2);
  cell1.innerHTML = AuditList;
  cell2.innerHTML =
    ' <input class="form-check-input" type="checkbox" value="" name="' +
    AuditList +
    '" id="' +
    AuditList +
    '">';
  cell3.innerHTML =
    '<input type="number" class="form-control" step="0.1" name="' +
    AuditList +
    '" id="' +
    AuditList +
    '">';
});

// ------------------------------------ END Show Form TD --------------------------------
