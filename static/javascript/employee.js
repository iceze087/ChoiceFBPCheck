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
  document.getElementById("content").style.marginLeft = "180px";
  document.getElementById('export').style.marginLeft = "180px";
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
  document.getElementById("export").style.marginLeft = "5px";
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
      document.getElementById("projectname").innerHTML = 'ประเมินผล การบริหารร้าน' + '<br>' + ' 7-Eleven'
      document.getElementById("projectname").style.fontSize = '1.2rem';
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
                    'กรุณากรอกข้อมูลให้ครบถถ้วน',
                    'error'
                  )
            }

            form.classList.add('was-validated')
        }, false)
    })
})()

$(document).ready(function () {
    $('#emplist').DataTable();
});