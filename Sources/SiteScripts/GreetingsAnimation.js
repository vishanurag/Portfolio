

/* -------------------------STARTS---------------------- */
/*/////////// ----------GREETINGS------ANIMATIONS//////////// */



let index = 0, greetCounter;
        
        let greetings = document.getElementById('greetingsDiffLanguages');
        async function greetAnimation() {
            setTimeout(() => {
                
                greetCounter = setInterval(greetingsAnimationText, 160);
            }, 1000);
        }
        function greetingsAnimationText() {
            if(index == 0){

                greetings.innerHTML = "नमस्ते";
            } else if(index == 1){

                greetings.innerHTML = "Hola";
            }
             else if(index == 2){

                greetings.innerHTML = "नमस्कार";
            }
             else if(index == 3){

                greetings.innerHTML = "Olá";
            }
             else if(index == 4){

                greetings.innerHTML = "Ciao";
            }
             else if(index == 5){

                greetings.innerHTML = "Goddag";
            }
             else if(index == 6){

                greetings.innerHTML = "Bonjour";
            }
             else if(index == 7){

                greetings.innerHTML = "வணக்கம்";
            }
             else if(index == 8){

                greetings.innerHTML = "Shikamoo";
            }
             else if(index == 9){

                greetings.innerHTML = "Konnichiwa";
            }
             else if(index == 10){

                greetings.innerHTML = "Привет";
            }
             else if(index == 11){

                greetings.innerHTML = "こんにちは";
            }
             else if(index == 12){

                greetings.innerHTML = "안녕하세요";
            }
             else if(index == 13){

                greetings.innerHTML = "Guten Tag";
            }
             else if(index == 14){

                greetings.innerHTML = "નમસ્તે";
            }
             else if(index == 15){

                greetings.innerHTML = "Sveiki";
            }
             else if(index == 16){

                greetings.innerHTML = "নমস্কাৰ";
            }
             else if(index == 17){

                greetings.innerHTML = "Welcome";
            } else {
                clearInterval(greetCounter)
            }
           
            index++;
        }
        greetAnimation();



/* -------------------------ENDS---------------------- */
/*/////////// ----------GREETINGS------ANIMATIONS//////////// */



// // -----------------For--Some--Time--Interval----Issues---------------//

// MainBody.style.position = "fixed";

// setInterval(() => {
    
//     MainBody.style.position = "sticky";
// }, 4000);

// // -----------------For--Some--Time--Interval----Issues---------------//