
$(function () {
    $(() => {
        $(document).ready(function() {
            $("[id^='hour-'] .saveBtn").on('click', function() {
                let textarea =  $(this).siblings('.description'); 
                let key = textarea.parent().attr('id');
                let value = textarea.val();
                localStorage.setItem(key, value)
            });

            $("[id^='hour-'] .description").each(function() {
                let key = $(this).parent().attr('id');
                let value = localStorage.getItem(key);
                $(this).val(value);
            }) 
        })})


    $(() => {
        $(document).ready(function() {
          for (var i = 9; i <= 17; i++) {
            $("#hour-" + i).data("value", i);
          }
      
          $("[id^='hour-']").each(function() {
            var storedValue = $(this).data("value");
            var currentHour = dayjs().hour();
      
            if (storedValue > currentHour) {
              console.log(` scheduled hour: ${storedValue}, current hour: ${currentHour}`);
              $(this).addClass('future');
            } else if (storedValue < currentHour) {
                console.log(`scheduled hour: ${storedValue}, current hour: ${currentHour}`);
              $(this).addClass('past');
            } else if (storedValue === currentHour ) {
                console.log(`scheduled hour: ${storedValue}, current hour: ${currentHour}`);
              $(this).addClass('present');
            } else {
                return;
            }
          });
        });
      });
    $(() => {
        let currentDate = dayjs().format('dddd, MMMM, DD') + ('th');
        $("#currentDay").text(currentDate);
    });}) 
    