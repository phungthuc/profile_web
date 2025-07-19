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
      "strongoldcompany"    : "Old Company:",
      "strongcurrentcompany"    : "Current Company:",
      "strongcareer"    : "Career Objective:",
      "strongdownload"  : "Download CV",
      "h4location"      : "Location",
      "h4call"          : "Call",
      "about_description": `"Hi! I'm a Game Developer with 2 years of experience in both product development and outsourcing.

              I have developed Unity games with over 1M+ downloads and have extensive experience in H5 game development using PlayCanvas and PixiJS. I have also created playable ads for well-known titles like Alien Invasion, Angry Birds Dream Blast, and MARVEL Strike Force.
              
              In addition, I have experience in project management, independent development, and publishing games on both iOS and Android platforms. Passionate about delivering high-quality gaming experiences, I always strive to improve and optimize my work. "`,
      "first_carrer" : "Develop and contribute to high-quality game productions that enhance user experience.",
      "second_carrer" : "Continuously improve my skills by writing clean, efficient, and high-performance code.",
      "third_carrer" : "Stay up to date with new technologies and apply them to create innovative and engaging games.",
      "strongtotalproject" : "Total Projects Completed:",
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
    $('#old-company').text(arrayLang.strongoldcompany)
    $('#current-company').text(arrayLang.strongcurrentcompany)
    $('#total-project').text(arrayLang.strongtotalproject)
    $('#career').text(arrayLang.strongcareer)
    $('#status').text(arrayLang.strongstatus)
    $('button#download').text(arrayLang.strongdownload)
    
    $('#h4location').text(arrayLang.h4location)
    $('#h4call').text(arrayLang.h4call)
    $('#about-desc').html(arrayLang.about_description)
    $('#first-carrer').text(arrayLang.first_carrer)
    $('#second-carrer').text(arrayLang.second_carrer)
    $('#third-carrer').text(arrayLang.third_carrer)
    return arrayLang;
}