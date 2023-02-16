$(function () {
    $(() => {
        $(document).ready(function() {
        //[id^='hour-'] chooses every id with the name that matches hour-
        //when the id is clicked it scans down the children to the child with the class description
        //takes the value that is inputted and saves it to local storage
            $("[id^='hour-'] .saveBtn").on('click', function() { 
                let textarea =  $(this).siblings('.description'); 
                let key = textarea.parent().attr('id');
                let value = textarea.val();
                localStorage.setItem(key, value) 
            });

        //when the page is reloaded the sections previously saved text is shown in the section that represents the 'description' class
            $("[id^='hour-'] .description").each(function() { 
                let key = $(this).parent().attr('id');
                let value = localStorage.getItem(key);
                $(this).val(value);
            }) 
        })})


    $(() => {
        //loops through each of the columns id values
        //the id number is then converted to usable data to compare against
        $(document).ready(function() {  
          for (var i = 9; i <= 17; i++) {
            $("#hour-" + i).data("value", i);
          }
      

        //the data value of the id is then compared against the current hour of the day
        //comapring the two data points then decides what class to apply to the corresponding id
        //utlizes dayjs to fetch the current hour of the day
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
      //fetches the current day of the week, the month, and the calendar date using the web api dayjs
    $(() => {
        let currentDate = dayjs().format('dddd, MMMM, DD') + ('th');
        $("#currentDay").text(currentDate);
    });}) 
    