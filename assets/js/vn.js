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
      "strongoldcompany"    : "Nơi làm việc cũ:",
      "strongcurrentcompany"    : "Nơi làm việc hiện tại:",
      "strongcareer"    : "Mục tiêu nghề nghiệp:",
      "strongdownload"  : "Tải CV",
      "h4location"      : "Địa chỉ",
      "h4call"          : "Điện thoại",
      "about_description": "Xin chào! Tôi là Nhà phát triển trò chơi với 2 năm kinh nghiệm trong cả phát triển sản phẩm và gia công phần mềm. Tôi đã phát triển các trò chơi Unity với hơn 1 triệu lượt tải xuống và có kinh nghiệm sâu rộng trong phát triển trò chơi H5 bằng PlayCanvas và PixiJS. Tôi cũng đã tạo quảng cáo có thể chơi được cho các tựa game nổi tiếng như Alien Invasion, Angry Birds Dream Blast và MARVEL Strike Force. Ngoài ra, tôi có kinh nghiệm trong quản lý dự án, phát triển độc lập và xuất bản trò chơi trên cả nền tảng iOS và Android. Với niềm đam mê mang đến trải nghiệm chơi game chất lượng cao, tôi luôn nỗ lực cải thiện và tối ưu hóa công việc của mình.",
      "first_carrer" : "Phát triển và đóng góp vào các sản phẩm trò chơi chất lượng cao nhằm nâng cao trải nghiệm người dùng.",
      "second_carrer" : "Liên tục cải thiện kỹ năng của mình bằng cách viết mã sạch, hiệu quả và hiệu suất cao.",
      "third_carrer" : "Cập nhật với công nghệ mới và áp dụng chúng để tạo ra những trò chơi sáng tạo và hấp dẫn.",
      "strongtotalproject" : "Tổng số dự án đã hoàn thành:",
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