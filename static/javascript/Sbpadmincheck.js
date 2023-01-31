// ------------------------------sidenav function------------------------------
function sidenav() {
    document.getElementById("sidenav").style.width = "200px";
    document.getElementById("homepage").hidden = false;
    document.getElementById("report").hidden = false;
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
    document.getElementById("setting").hidden = true;
    document.getElementById("logout").hidden = true;
    document.getElementById("content").style.marginLeft = "5px";
    document.getElementById("navclose").hidden = true;
    document.getElementById("opennavs").hidden = false;
  }
// ------------------------------END sidenav function---------------------------
//   ----------------------------------- Data Set -----------------------------------------
var branch = [
    {
        bcode: "2119",
        bname : "สถานีรถไฟเชียงใหม่",
        sbpstatus : 1,
        accountstatus : 1,
        auditstatus : 1
    },
    {
        bcode: "2789",
        bname : "กาดอินทร",
        sbpstatus : 1,
        accountstatus : 0,
        auditstatus : 0
    },
    {
        bcode: "3119",
        bname : "ศิริมังคลาจารย์",
        sbpstatus : 1,
        accountstatus : 0,
        auditstatus : 0
    },
    {
        bcode: "3189",
        bname : "อบต.สุเทพ",
        sbpstatus : 1,
        accountstatus : 0,
        auditstatus : 0
    },
    {
        bcode: "4059",
        bname : "ไชยปราการ",
        sbpstatus : 1,
        accountstatus : 1,
        auditstatus : 1
    },
    {
        bcode: "40301",
        bname : "กาดอินทร 2",
        sbpstatus : 1,
        accountstatus : 0,
        auditstatus : 1
    },
    {
        bcode: "5093",
        bname : "ศรีปิงเมือง 2",
        sbpstatus : 1,
        accountstatus : 1,
        auditstatus : 0
    },
    {
        bcode: "5094",
        bname : "ศรีดอนไชย 1",
        sbpstatus : 1,
        accountstatus : 1,
        auditstatus : 1
    },
    {
        bcode: "5147",
        bname : "ตลาดแม่กวง",
        sbpstatus : 1,
        accountstatus : 0,
        auditstatus : 1
    },
    {
        bcode: "5285",
        bname : "บุญเรืองฤทธิ์",
        sbpstatus : 1,
        accountstatus : 0,
        auditstatus : 0
    },
    {
        bcode: "5463",
        bname : "บ้านต้นเกว๋น",
        sbpstatus : 1,
        accountstatus : 1,
        auditstatus : 0
    },
    {
        bcode: "5724",
        bname : "บ้านสันกลาง (อ.สันกำแพง)",
        sbpstatus : 1,
        accountstatus : 0,
        auditstatus : 0
    },
    {
        bcode: "5870",
        bname : "บ้านบวกครกเหนือ",
        sbpstatus : 0,
        accountstatus : 1,
        auditstatus : 1
    },
    {
        bcode: "6073",
        bname : "บ้านสันทรายทอง 2",
        sbpstatus : 1,
        accountstatus : 1,
        auditstatus : 1
    },
    {
        bcode: "6181",
        bname : "แม่เหี๊ยะ3",
        sbpstatus : 1,
        accountstatus : 0,
        auditstatus : 0
    },
    {
        bcode: "6200",
        bname : "เจ็ดยอดพลาซ่า",
        sbpstatus : 1,
        accountstatus : 1,
        auditstatus : 1
    },
    {
        bcode: "6236",
        bname : "บ้านสันต้นธง (จ.ลำพูน)",
        sbpstatus : 1,
        accountstatus : 0,
        auditstatus : 0
    },
    {
        bcode: "7192",
        bname : "แม่แจ่ม",
        sbpstatus : 0,
        accountstatus : 0,
        auditstatus : 0
    },
    {
        bcode: "7379",
        bname : "หารแก้ว",
        sbpstatus : 1,
        accountstatus : 1,
        auditstatus : 1
    },
    {
        bcode: "7395",
        bname : "ช่างเคี่ยน 2",
        sbpstatus : 0,
        accountstatus : 0,
        auditstatus : 0
    },
    {
        bcode: "7930",
        bname : "หน้ากาดเชิงดอย",
        sbpstatus : 0,
        accountstatus : 0,
        auditstatus : 0
    },
    {
        bcode: "8071",
        bname : "บ้านหลิ่งมื่น",
        sbpstatus : 1,
        accountstatus : 1,
        auditstatus : 1
    },
    {
        bcode: "8160",
        bname : "ไชยปราการ 2",
        sbpstatus : 1,
        accountstatus : 0,
        auditstatus : 0
    },
    {
        bcode: "8468",
        bname : "ซอยชมจันทร์",
        sbpstatus : 1,
        accountstatus : 0,
        auditstatus : 1
    },
    {
        bcode: "8898",
        bname : "8898 บิสสิเนสพาร์ค",
        sbpstatus : 0,
        accountstatus : 1,
        auditstatus : 1
    },
    {
        bcode: "8961",
        bname : "8961 บ้านสันทรายหลวง",
        sbpstatus : 0,
        accountstatus : 0,
        auditstatus : 0
    },
    {
        bcode: "8962",
        bname : "ถนนโพธาราม(เชียงใหม่)",
        sbpstatus : 1,
        accountstatus : 1,
        auditstatus : 1
    },
    {
        bcode: "9219",
        bname : "เชียงใหม่แลนด์ 1",
        sbpstatus : 1,
        accountstatus : 0,
        auditstatus : 0
    },
    {
        bcode: "9360",
        bname : "บ้านเอื้ออาทรสันผีเสื้อ",
        sbpstatus : 1,
        accountstatus : 1,
        auditstatus : 1
    },
    {
        bcode: "9548",
        bname : "หน้ารพ.สันทราย",
        sbpstatus : 1,
        accountstatus : 0,
        auditstatus : 0
    },
    {
        bcode: "9635",
        bname : "บ้านนิคมศรีสหกรณ์",
        sbpstatus : 1,
        accountstatus : 1,
        auditstatus : 1
    },
    {
        bcode: "9637",
        bname : "บ้านป่าข่อยใต้",
        sbpstatus : 0,
        accountstatus : 0,
        auditstatus : 0
    },
    {
        bcode: "10068",
        bname : "หนองฮ่อ",
        sbpstatus : 0,
        accountstatus : 0,
        auditstatus : 0
    },
    {
        bcode: "10693",
        bname : "ปาย 5",
        sbpstatus : 1,
        accountstatus : 0,
        auditstatus : 0
    },
    {
        bcode: "10737",
        bname : "เชียงใหม่บิสสิเนสพาร์ค 2",
        sbpstatus : 0,
        accountstatus : 0,
        auditstatus : 0
    },
    {
        bcode: "10995",
        bname : "ป่าแดด 4 (บ้านท่าใหม่อิ)",
        sbpstatus : 1,
        accountstatus : 1,
        auditstatus : 1
    },
    {
        bcode: "11103",
        bname : "หน้าม.ช.2",
        sbpstatus : 1,
        accountstatus : 0,
        auditstatus : 0
    },
    {
        bcode: "11543",
        bname : "โครงการเดอะฟิวชั่น(บ้านท่อ)",
        sbpstatus : 1,
        accountstatus : 0,
        auditstatus : 0
    },
    {
        bcode: "11656",
        bname : "บ้านเชิงดอย(ถ.สุเทพ)",
        sbpstatus : 1,
        accountstatus : 1,
        auditstatus : 1
    },
    {
        bcode: "11949",
        bname : "บ้านขอนตาล(อ.แม่ริม)",
        sbpstatus : 1,
        accountstatus : 1,
        auditstatus : 1
    },
    {
        bcode: "13239",
        bname : "ซอยวัดอุโมงค์ 3",
        sbpstatus : 1,
        accountstatus : 0,
        auditstatus : 0
    },
    {
        bcode: "13285",
        bname : "บ้านป่าแคโยง(อ.สารภี)",
        sbpstatus : 1,
        accountstatus : 0,
        auditstatus : 0
    },
    {
        bcode: "14120",
        bname : "บ่อสร้าง2",
        sbpstatus : 1,
        accountstatus : 0,
        auditstatus : 0
    },
    {
        bcode: "14121",
        bname : "บ้านหนองบัว(อ.ฝาง)",
        sbpstatus : 1,
        accountstatus : 0,
        auditstatus : 0
    },
    {
        bcode: "14154",
        bname : "บ้านปากทางสะลวง(อ.แม่ริม)",
        sbpstatus : 1,
        accountstatus : 0,
        auditstatus : 0
    },
    {
        bcode: "14369",
        bname : "บ้านป่าตัน 2",
        sbpstatus : 1,
        accountstatus : 0,
        auditstatus : 0
    },
    {
        bcode: "14861",
        bname : "บ้านท่าข้าม(ต.แม่เหียะ)",
        sbpstatus : 1,
        accountstatus : 1,
        auditstatus : 0
    },
    {
        bcode: "16162",
        bname : "บ้านช่างเคิ่งบน(อ.แม่แจ่ม)",
        sbpstatus : 1,
        accountstatus : 0,
        auditstatus : 0
    },
    {
        bcode: "16325",
        bname : "บ้านป่าลาน(อ.สันทราย)",
        sbpstatus : 0,
        accountstatus : 0,
        auditstatus : 0
    },
    {
        bcode: "16685",
        bname : "บ้านดอนชัย (ต.ป่าแดด)",
        sbpstatus : 1,
        accountstatus : 1,
        auditstatus : 1
    },
    {
        bcode: "17819",
        bname : "บ้านดอนแก้ว(อ.สารภี)",
        sbpstatus : 1,
        accountstatus : 1,
        auditstatus : 1
    },
];
// ------------------------------------- END Data Set--------------------------------------

// ------------------------------------ ScreenCheck --------------------------------
checkscreen();
function checkscreen() {
  var w = window.innerWidth;
  if (w <= 576) {
    document.getElementById("bodystyle").style.paddingTop = "100px";
    document.getElementById("bodystyle").style.paddingLeft = "0px";
    document.getElementById("bodystyle").style.paddingRight = "0px";
    document.getElementById("bodystyle").style.width = '100%';   
    document.getElementById("projectname").hidden = true;
    document.getElementById("projectname").innerHTML =
      "ประเมินผล การบริหารร้าน" + "<br>" + " 7-Eleven";
    document.getElementById("projectname").style.fontSize = "1.2rem";
  }
  if (w > 576 && w <=820) {
    document.getElementById("sidenav").style.paddingTop = "140px";
    document.getElementById("bodystyle").style.paddingTop = "140px";
    document.getElementById("bodystyle").style.paddingLeft = "70px";
    document.getElementById("bodystyle").style.paddingRight = "10px";
    document.getElementById("bodystyle").style.width = '100%';   
    document.getElementById("projectname").innerHTML = "ประเมินผล การบริหารร้าน 7-Eleven";
    document.getElementById("projectname").style.fontSize = "1.8rem";
  }
  
}
// ------------------------------------ END ScreenCheck --------------------------------

// ------------------------------------- Show Table --------------------------------------
rundata()
function rundata(){
    // var table = document.getElementById("");
    var myTbody = document.querySelector("#totalcheck>tbody");
    for(var i = 0; i < branch.length; i++){
        var row = myTbody.insertRow(-1);
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        var cell3 = row.insertCell(2);
        var cell4 = row.insertCell(3);
        var cell5 = row.insertCell(4);
        var cell6 = row.insertCell(5);
        cell1.innerHTML += branch[i].bcode;
        cell2.innerHTML += branch[i].bname;
        if(branch[i].sbpstatus == 1){
            cell3.innerHTML += '<span class="material-symbols-outlined" style="color: green;font-size:2rem;">task_alt</span>'
        }
        else{
            cell3.innerHTML += '<span class="material-symbols-outlined" style=" color: red;font-size:2rem;">cancel</span>'
        }
        if(branch[i].accountstatus == 1){
            cell4.innerHTML += '<span class="material-symbols-outlined" style="color: green;font-size:2rem;">task_alt</span>'
        }
        else{
            cell4.innerHTML += '<span class="material-symbols-outlined" style=" color: red;font-size:2rem;">cancel</span>'
        }
        if(branch[i].auditstatus == 1){
            cell5.innerHTML += '<span class="material-symbols-outlined" style="color: green;font-size:2rem;">task_alt</span>'
        }
        else{
            cell5.innerHTML += '<span class="material-symbols-outlined" style=" color: red;font-size:2rem;">cancel</span>'
        }
        if(branch[i].sbpstatus == 1&& branch[i].accountstatus == 1 && branch[i].auditstatus == 1){
            cell6.innerHTML += '<a href="./evaluate1.html" target="_blank"><button type="button" class="btn btn-primary d-flex justify-content-center"><span class="material-symbols-outlined">summarize</span>ดูรายงาน</button></a>'
        }
        else{
            cell6.innerHTML += '<button type="button" class="btn btn-outline-secondary d-flex justify-content-center"><span class="material-symbols-outlined">summarize</span>ดูรายงาน</button>'
        }
    }
    $(document).ready(function () {
        $('#totalcheck').DataTable();
    });
  }

// ------------------------------------- END Show Table ----------------------------------

// -------------------------------------- Opensubmit--------------------------------------
function opensubmit(){
    document.getElementById('submittime').disabled = false;
}
// -------------------------------------- END Opensubmit ---------------------------------