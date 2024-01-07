function changeEN(){
    arrayLang = {
      "h2about" : "About",
      "h2work"  : "Work Experience",
      "h2pro"   : "Programming Experience",
      "h2skill" : "Skills",
      "h2contact": "Contact",
      "strongfullname"  : "Full Name:",
      "strongbirthday"  : "Birthday:",
      "strongwebsite"   : "Website:",
      "strongphone"     : "Phone:",
      "strongstatus"    : "Marital status:",
      "strongcity"      : "City:",
      "strongdegree"    : "Degree:",
      "strongcareer"    : "Career Objective:",
      "strongdownload"  : "Download CV",
      "h4location"      : "Location",
      "h4call"          : "Call"
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