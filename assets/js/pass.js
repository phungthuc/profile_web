$( document ).ready(function() {
            $('.shide').css("display","none")
            $('.sshow').on('click',function(){
                $("#exampleModal").modal("show");
            });
            $('#classmodal').on('click',function(){
                $("#exampleModal").modal("hide");
                $('#recipient-name').val("");
                $('.errorPass').css("display","none");
            });
            $('#submitpass').on('click',function(){
                var pass = $('#recipient-name').val()
                if(pass == "pass")
                {
                    $('.shide').css("display","block");
                    $('.sshow').css("display","none");
                    $("#exampleModal").modal("hide");
                    $('.errorPass').css("display","none");
                }
                else{
                    $('.errorPass').css("display","block");
                }
            });
        });