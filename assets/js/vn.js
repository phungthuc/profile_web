function changeVN(){
    arrayLang = {
      "h2about" : "Giới thiệu",
      "h2work"  : "Kinh nghiệm làm việc",
      "h2pro"   : "Kinh nghiệm lập trình",
      "h2skill" : "Kỹ năng mềm",
      "h2contact": "Liên hệ",
      "strongfullname"  : "Họ tên:",
      "strongbirthday"  : "Sinh nhật:",
      "strongwebsite"   : "Website:",
      "strongphone"     : "Điện thoại:",
      "strongstatus"    : "Tình trạng hôn nhân:",
      "strongcity"      : "Thành phố:",
      "strongdegree"    : "Bằng cấp:",
      "strongcareer"    : "Mục tiêu nghề nghiệp:",
      "strongdownload"  : "Tải CV",
      "h4location"      : "Địa chỉ",
      "h4call"          : "Điện thoại"
    };
    $('#spanabout').text(arrayLang.h2about)
    $('#spanwork').text(arrayLang.h2work)
    $('#spanpro').text(arrayLang.h2pro)
    $('#spanskill').text(arrayLang.h2skill)
    $('#spancontact').text(arrayLang.h2contact)
    
    $('#h2about').text(arrayLang.h2about)
    $('#h2work').text(arrayLang.h2work)
    $('#h2pro').text(arrayLang.h2pro)
    $('#h2skill').text(arrayLang.h2skill)
    $('#h2contact').text(arrayLang.h2contact)
    
    $('#fullname').text(arrayLang.strongfullname)
    $('#birthday').text(arrayLang.strongbirthday)
    $('#website').text(arrayLang.strongwebsite)
    $('#phone').text(arrayLang.strongphone)
    $('#city').text(arrayLang.strongcity)
    $('#degree').text(arrayLang.strongdegree)
    $('#career').text(arrayLang.strongcareer)
    $('#status').text(arrayLang.strongstatus)
    $('button#download').text(arrayLang.strongdownload)
    
    $('#h4location').text(arrayLang.h4location)
    $('#h4call').text(arrayLang.h4call)
    return arrayLang;
}