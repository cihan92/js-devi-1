let userName = prompt ("Adınızı yazınız")
let karsilama =  document.querySelector ("#karsilama")
karsilama.innerHTML = `${userName.toUpperCase()}` 
karsilama.innerHTML = `${userName.length>0 ? userName.toUpperCase() : alert ("kullanıcı bilginiz yok" ) }` 


function tarihSaat() {
    var date = new Date();
    var h = date.getHours();
    var m = date.getMinutes();
    var s = date.getSeconds();
    var dayName = date.getDay();
     switch (dayName) {
        case 1:
           dayName = "Pazartesi";
           break;
        case 2:
           dayName = "Salı";
           break;
        case 3:
            dayName = "Çarşamba";
            break;
        case 4:
            dayName = "Perşembe";
            break;
        case 5:
            dayName = "Cuma";
            break;
        case 6:
            dayName = "Cumartesi";
            break;
        case 7:
            dayName = "Pazar";
            break;           
     }

     h = h < 10 ? "0" + h : h; // two-digits için kullandık 
     m = m < 10 ? "0" + m : m;
     s = s < 10 ? "0" + s : s;
     
     var timer = ` ${h} : ${m} : ${s}  - ${dayName} `;
    document.querySelector('#zaman').innerHTML = timer ; 

    setInterval(tarihSaat, 1000); 
}
tarihSaat(); 
