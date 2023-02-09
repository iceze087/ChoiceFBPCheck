var FBP = [
    {
        name: "หมวดที่ 1 : การบริหารงานร้านสาขา",
        score: '',
        target: ''
    },
    {
        name: "1. ผลการดำเนินงานประจำเดือน",
        score: '',
        target: ''
    },
    {
        name: "1.1  ยอดขายเฉลี่ย/วัน (Ex.VAT.ไม่รวมบัตรโทรศัพท์",
        score: 100,
        target: '>=90%'
    },
    {
        name: "1.2  GP ( ไม่รวมบัตรโทรศัพท์ ) : บาท",
        score: 60,
        target: '>=95%'
    },
    {
        name: "1.3  % Audit (รวมบัตรโทรศัพท์)",
        score: 40,
        target: '>=0.25%'
    },
    {
        name: "1.4  QSSI - หมวด Process",
        score: 20,
        target: '>=90%'
    },
    {
        name: "1.5  QSSI - หมวด Service",
        score: 30,
        target: '>=90%'
    },
    {
        name: "1.6  QSSI - หมวด Assortment",
        score: 40,
        target: '>=90%'
    },
    {
        name: "1.7  QSSI - หมวด Value",
        score: 20,
        target: '>=90%'
    },
    {
        name: "1.8  QSSI - หมวด Environment",
        score: 15,
        target: '>=90%'
    },
    {
        name: "1.9  QSSI - หมวด Quality",
        score: 30,
        target: '>=90%'
    },
    {
        name: "1.10 QSSI- หมวด Cleanliness",
        score: 15,
        target: '>=90%'
    },
    {
        name: "1.11 QSSI - สินค้าหมดอายุ",
        score: 30,
        target: 'ไม่พบ'
    },
    {
        name: "1.12 QSSI - สินค้าขาดจากร้านเฉลี่ย/เดือน",
        score: 50,
        target: '<=3sku'
    },
    {
        name: "1.13 QSSI - หมวด Follow Up",
        score: 10,
        target: 'ติดลบ<=2.5'
    },
    {
        name: "1.14 จำนวนCR เฉพาะหมวดบริการ",
        score: 0,
        target: 'ติดลบ<=2.5'
    },
    {
        name: "2. บริหารงานบุคคล",
        score: '',
        target: ''
    },
    {
        name: "2.1 อัตรากำลังคนรวมครบตามโครงสร้าง",
        score: 40,
        target: 80
    },
    {
        name: "2.2 จำนวนผู้ช่วยผุ้จัดการร้านและ/หรือหัวหน้าผลัดที่ผ่านการอบรมหลักสูตรมาตรฐานผู้ช่วยผู้จัดการร้าน",
        score: 20,
        target: 45
    },
    {
        name: "2.3 จำนวนพนักงานร้านที่ได้รับการอบรมหลักสูตรมาตรฐานพนักงานร้าน",
        score: 20,
        target: 45
    },
    {
        name: "2.4 การบริหารจัดการและการดูแลทีมงานในร้าน",
        score: 20,
        target: 20
    },
    {
        name: "2.5 จ้างงานตามกฎหมายแรงงานและจัดทำสวัสดิการประกันสังคม",
        score: 10,
        target: 10
    },
    {
        name: "2.6 ไม่ออกกฎผิดเงื่อนไขที่บริษัทกำหนด และไม่จ้างงานตามกฎหมายแรงงาน",
        score: 15,
        target: 20
    },
    {
        name: "2.7 ส่งสำเนาทะเบียนลูกจ้าง",
        score: 10,
        target: 20
    },
    {
        name: "3. ความร่วมมือและการเอาใจใส่บริหารที่ร้านสาขา",
        score: '',
        target: ''
    },
    {
        name: "3.1 การดูแลมาตราฐานร้านอย่างสม่ำเสมอ",
        score: 15,
        target: 20
    },
    {
        name: "3.2 การให้ความร่วมมือในการบริหารงานขายต่าง ๆ",
        score: 15,
        target: 20
    },
    {
        name: "3.3 การสั่งสินค้าผ่านระบบ Online",
        score: 10,
        target: 30
    },
    {
        name: "3.4 การให้ความร่วมมือกับโครงการต่างๆรวมถึงนโยบายใหม่ๆของบริษัท",
        score: 10,
        target: 30
    },
    {
        name: "3.5 ความร่วมมือในการประชุมกับทีม OPT",
        score: 20,
        target: 30
    },
    {
        name: "3.6 ไม่เคยได้รับหนังสือขอความร่วมมือ",
        score: 30,
        target: 30
    },

];
var Account = [
    {
        name: "หมวดที่ 2 : การบริหารการเงินบัญชี",
        score: '',
        target: ''
    },
    {
        name: "1. ความร่วมมือในการส่งข้อมูล",
        score: '',
        target: ''
    },
    {
        name: "1.1 การ Online  Receiving log",
        score: 5,
        target: 10
    },
    {
        name: "1.2 การ Online Cash Report",
        score: 5,
        target: 10
    },
    {
        name: "1.3 การจัดส่งเอกสาร Receiving Log",
        score: 5,
        target: 5
    },
    {
        name: "1.4 การคีย์ข้อมูล Receiving Log",
        score: 5,
        target: 8
    },
    {
        name: "1.5 การคีย์ข้อมูล Mark up / Down",
        score: 5,
        target: 10
    },
    {
        name: "2. ความร่วมมือกับเจ้าหน้าที่ตรวจนับ",
        score: '',
        target: ''
    },
    {
        name: "2.1 ความร่วมมือในการตรวจนับเงินสด",
        score: 5,
        target: 10
    },
    {
        name: "2.2 ปฎิบัติตามกฎระเบียบการตรวจนับเงินสด",
        score: 5,
        target: 20
    },
    {
        name: "2.3 ความร่วมมือในการตรวจนับสินค้า",
        score: 15,
        target: 20
    },
    {
        name: "3. ความร่วมมือในการนำเงินฝาก",
        score: '',
        target: ''
    },
    {
        name: "3.1 นำฝากธนาคารครบถ้วน / ถูกต้อง ภายในเวลาที่กำหนด 12.00 น.",
        score: 10,
        target: 10
    },
];
var Audit = [
    {
        name: "หมวดที่ 3 : การมีส่วนร่วมกับนโยบายบริษัท",
        score: '',
        target: ''
    },
    {
        name: "1 ความร่วมมือในการเข้าร่วมกิจกรรมต่าง ๆ ของบริษัท",
        score: '',
        target: ''
    },
    {
        name: "1.1 ความร่วมมือในการเข้าร่วมกิจกรรมต่าง ๆ ของบริษัท",
        score: 10,
        target: ''
    }
];
// showfbp();
// showAccount();
// showAudit();
// function showfbp() {
//     FBP.map((FBPList, index) => {
//         if (FBP[index].name == 'หมวดที่ 1 : การบริหารงานร้านสาขา') {
//             var table = document.getElementById("reportview").getElementsByTagName('tbody')[0];
//             var row = table.insertRow(-1);
//             var cell1 = row.insertCell(0);
//             var cell2 = row.insertCell(1);
//             var cell3 = row.insertCell(2);
//             var cell4 = row.insertCell(3);
//             var cell5 = row.insertCell(4);
//             cell1.innerHTML = '<b>' + FBP[index].name + '</b>';
//             cell2.innerHTML = '';
//             cell3.innerHTML = '';
//             cell4.innerHTML = '';
//             cell5.innerHTML = '';
//         }
//         else if (FBP[index].name == "1. ผลการดำเนินงานประจำเดือน") {
//             var table = document.getElementById("reportview").getElementsByTagName('tbody')[0];
//             var row = table.insertRow(-1);
//             var cell1 = row.insertCell(0);
//             var cell2 = row.insertCell(1);
//             var cell3 = row.insertCell(2);
//             var cell4 = row.insertCell(3);
//             var cell5 = row.insertCell(4);
//             cell1.innerHTML = '<b>' + FBP[index].name + '</b>';
//             cell2.innerHTML = '';
//             cell3.innerHTML = '';
//             cell4.innerHTML = '';
//             cell5.innerHTML = '';
//         }
//         else if (FBP[index].name == "1.1  ยอดขายเฉลี่ย/วัน (Ex.VAT.ไม่รวมบัตรโทรศัพท์") {
//             var table = document.getElementById("reportview").getElementsByTagName('tbody')[0];
//             var row = table.insertRow(-1);
//             var cell1 = row.insertCell(0);
//             var cell2 = row.insertCell(1);
//             var cell3 = row.insertCell(2);
//             var cell4 = row.insertCell(3);
//             var cell5 = row.insertCell(4);
//             cell1.innerHTML = FBP[index].name +' '+'เป้าหมาย'+' '+'<select aria-label="Default select example"><option selected>89666</option><option value="1">90000</option><option value="2">76000</option><option value="3">103000</option></select>'+' '+'ทำได้'+' '+'<select aria-label="Default select example"><option selected>95316</option><option value="1">97421</option><option value="2">88939</option><option value="3">99589</option></select>';
//             cell2.innerHTML = FBP[index].score;
//             cell3.innerHTML = FBP[index].target;
//             cell4.innerHTML = '';
//             cell5.innerHTML = '';
//         }
//         else if (FBP[index].name == "1.2  GP ( ไม่รวมบัตรโทรศัพท์ ) : บาท") {
//             var table = document.getElementById("reportview").getElementsByTagName('tbody')[0];
//             var row = table.insertRow(-1);
//             var cell1 = row.insertCell(0);
//             var cell2 = row.insertCell(1);
//             var cell3 = row.insertCell(2);
//             var cell4 = row.insertCell(3);
//             var cell5 = row.insertCell(4);
//             cell1.innerHTML = FBP[index].name +' '+'เป้าหมาย'+' '+'<select aria-label="Default select example"><option selected>24.41</option><option value="1">24.49</option><option value="2">24.61</option><option value="3">24.14</option></select>'+' '+'ทำได้'+' '+'<select aria-label="Default select example"><option selected>25.21</option><option value="1">25.07</option><option value="2">25.38</option><option value="3">25.17</option></select>';
//             cell2.innerHTML = FBP[index].score;
//             cell3.innerHTML = FBP[index].target;
//             cell4.innerHTML = '';
//             cell5.innerHTML = '';
//         }
//         else if (FBP[index].name == "1.3  % Audit (รวมบัตรโทรศัพท์)") {
//             var table = document.getElementById("reportview").getElementsByTagName('tbody')[0];
//             var row = table.insertRow(-1);
//             var cell1 = row.insertCell(0);
//             var cell2 = row.insertCell(1);
//             var cell3 = row.insertCell(2);
//             var cell4 = row.insertCell(3);
//             var cell5 = row.insertCell(4);
//             cell1.innerHTML = FBP[index].name +' '+'ยอดขาย'+' '+'<select aria-label="Default select example"><option selected>8767054</option><option value="1">2922651</option><option value="2">2757131</option><option value="3">3087271</option></select>'+' '+'ทำได้'+' '+'<select aria-label="Default select example"><option selected>-21584</option><option value="1">-8189</option><option value="2">-5731</option><option value="3">-7660</option></select>';
//             cell2.innerHTML = FBP[index].score;
//             cell3.innerHTML = FBP[index].target;
//             cell4.innerHTML = '';
//             cell5.innerHTML = '';
//         }
//         else if (FBP[index].name == "2. บริหารงานบุคคล") {
//             var table = document.getElementById("reportview").getElementsByTagName('tbody')[0];
//             var row = table.insertRow(-1);
//             var cell1 = row.insertCell(0);
//             var cell2 = row.insertCell(1);
//             var cell3 = row.insertCell(2);
//             var cell4 = row.insertCell(3);
//             var cell5 = row.insertCell(4);
//             cell1.innerHTML = '<b>' + FBP[index].name + '</b>';
//             cell2.innerHTML = FBP[index].score;
//             cell3.innerHTML = FBP[index].target;
//             cell4.innerHTML = '';
//             cell5.innerHTML = '';
//         }
//         else if (FBP[index].name == "3. ความร่วมมือและการเอาใจใส่บริหารที่ร้านสาขา") {
//             var table = document.getElementById("reportview").getElementsByTagName('tbody')[0];
//             var row = table.insertRow(-1);
//             var cell1 = row.insertCell(0);
//             var cell2 = row.insertCell(1);
//             var cell3 = row.insertCell(2);
//             var cell4 = row.insertCell(3);
//             var cell5 = row.insertCell(4);
//             cell1.innerHTML = '<b>' + FBP[index].name + '</b>';
//             cell2.innerHTML = FBP[index].score;
//             cell3.innerHTML = FBP[index].target;
//             cell4.innerHTML = '';
//             cell5.innerHTML = '';
//         }
//         else {
//             var table = document.getElementById("reportview").getElementsByTagName('tbody')[0];
//             var row = table.insertRow(-1);
//             var cell1 = row.insertCell(0);
//             var cell2 = row.insertCell(1);
//             var cell3 = row.insertCell(2);
//             var cell4 = row.insertCell(3);
//             var cell5 = row.insertCell(4);
//             cell1.innerHTML = FBP[index].name;
//             cell2.innerHTML = FBP[index].score;
//             cell3.innerHTML = FBP[index].target;
//             cell4.innerHTML = '';
//             cell5.innerHTML = '';
//         }
//     });
// }
// function showAccount() {
//     Account.map((AccountList, index) => {
//         if(Account[index].name == "หมวดที่ 2 : การบริหารการเงินบัญชี"){
//             var table = document.getElementById("reportview").getElementsByTagName('tbody')[0];
//             var row = table.insertRow(-1);
//             var cell1 = row.insertCell(0);
//             var cell2 = row.insertCell(1);
//             var cell3 = row.insertCell(2);
//             var cell4 = row.insertCell(3);
//             var cell5 = row.insertCell(4);
//             cell1.innerHTML = '<b>'+Account[index].name+'</b>';
//             cell2.innerHTML = Account[index].score;
//             cell3.innerHTML = Account[index].target;
//             cell4.innerHTML = ''
//             cell5.innerHTML = ''
//         }
//         else if(Account[index].name == "1. ความร่วมมือในการส่งข้อมูล"){
//             var table = document.getElementById("reportview").getElementsByTagName('tbody')[0];
//             var row = table.insertRow(-1);
//             var cell1 = row.insertCell(0);
//             var cell2 = row.insertCell(1);
//             var cell3 = row.insertCell(2);
//             var cell4 = row.insertCell(3);
//             var cell5 = row.insertCell(4);
//             cell1.innerHTML = '<b>'+Account[index].name+'</b>';
//             cell2.innerHTML = Account[index].score;
//             cell3.innerHTML = Account[index].target;
//             cell4.innerHTML = ''
//             cell5.innerHTML = ''
//         }
//         else if(Account[index].name == "2. ความร่วมมือกับเจ้าหน้าที่ตรวจนับ"){
//             var table = document.getElementById("reportview").getElementsByTagName('tbody')[0];
//             var row = table.insertRow(-1);
//             var cell1 = row.insertCell(0);
//             var cell2 = row.insertCell(1);
//             var cell3 = row.insertCell(2);
//             var cell4 = row.insertCell(3);
//             var cell5 = row.insertCell(4);
//             cell1.innerHTML = '<b>'+Account[index].name+'</b>';
//             cell2.innerHTML = Account[index].score;
//             cell3.innerHTML = Account[index].target;
//             cell4.innerHTML = ''
//             cell5.innerHTML = ''
//         }
//         else if(Account[index].name == "3. ความร่วมมือในการนำเงินฝาก"){
//             var table = document.getElementById("reportview").getElementsByTagName('tbody')[0];
//             var row = table.insertRow(-1);
//             var cell1 = row.insertCell(0);
//             var cell2 = row.insertCell(1);
//             var cell3 = row.insertCell(2);
//             var cell4 = row.insertCell(3);
//             var cell5 = row.insertCell(4);
//             cell1.innerHTML = '<b>'+Account[index].name+'</b>';
//             cell2.innerHTML = Account[index].score;
//             cell3.innerHTML = Account[index].target;
//             cell4.innerHTML = ''
//             cell5.innerHTML = ''
//         }
//         else {
//             var table = document.getElementById("reportview").getElementsByTagName('tbody')[0];
//             var row = table.insertRow(-1);
//             var cell1 = row.insertCell(0);
//             var cell2 = row.insertCell(1);
//             var cell3 = row.insertCell(2);
//             var cell4 = row.insertCell(3);
//             var cell5 = row.insertCell(4);
//             cell1.innerHTML = Account[index].name;
//             cell2.innerHTML = Account[index].score;
//             cell3.innerHTML = Account[index].target;
//             cell4.innerHTML = ''
//             cell5.innerHTML = ''
//         }
//     });
// }
// function showAudit() {
//     Audit.map((AuditList, index) => {
//         if(Audit[index].name == "หมวดที่ 3 : การมีส่วนร่วมกับนโยบายบริษัท"){
//             var table = document.getElementById("reportview").getElementsByTagName('tbody')[0];
//             var row = table.insertRow(-1);
//             var cell1 = row.insertCell(0);
//             var cell2 = row.insertCell(1);
//             var cell3 = row.insertCell(2);
//             var cell4 = row.insertCell(3);
//             var cell5 = row.insertCell(4);
//             cell1.innerHTML = '<b>'+Audit[index].name+'</b>';
//             cell2.innerHTML = Audit[index].score;
//             cell3.innerHTML = Audit[index].target;
//             cell4.innerHTML = ''
//             cell5.innerHTML = ''
//         }
//         else if(Audit[index].name == "1 ความร่วมมือในการเข้าร่วมกิจกรรมต่าง ๆ ของบริษัท"){
//             var table = document.getElementById("reportview").getElementsByTagName('tbody')[0];
//             var row = table.insertRow(-1);
//             var cell1 = row.insertCell(0);
//             var cell2 = row.insertCell(1);
//             var cell3 = row.insertCell(2);
//             var cell4 = row.insertCell(3);
//             var cell5 = row.insertCell(4);
//             cell1.innerHTML = '<b>'+Audit[index].name+'</b>';
//             cell2.innerHTML = Audit[index].score;
//             cell3.innerHTML = Audit[index].target;
//             cell4.innerHTML = ''
//             cell5.innerHTML = ''
//         }
//         else{
//             var table = document.getElementById("reportview").getElementsByTagName('tbody')[0];
//             var row = table.insertRow(-1);
//             var cell1 = row.insertCell(0);
//             var cell2 = row.insertCell(1);
//             var cell3 = row.insertCell(2);
//             var cell4 = row.insertCell(3);
//             var cell5 = row.insertCell(4);
//             cell1.innerHTML = Audit[index].name;
//             cell2.innerHTML = Audit[index].score;
//             cell3.innerHTML = Audit[index].target;
//             cell4.innerHTML = ''
//             cell5.innerHTML = ''
//         }
//     });
// }