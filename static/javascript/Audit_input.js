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
var Audit = ["ความร่วมมือในการเข้าร่วมกิจกรรมต่าง ๆ ของบริษัท"];
// ------------------------------------ END DataSet --------------------------------

// ------------------------------------ Show Form TD --------------------------------
Audit.map((AuditList, index) => {
  var table = document.getElementById("AccountForm");
  var row = table.insertRow(-1);
  var cell1 = row.insertCell(0);
  var cell2 = row.insertCell(1);

  cell1.innerHTML = AuditList;
  cell2.innerHTML =
    '<input type="number" class="form-control" step="0.1" name="' +
    AuditList +
    '" id="' +
    AuditList +
    '">';
});

// ------------------------------------ END Show Form TD --------------------------------
