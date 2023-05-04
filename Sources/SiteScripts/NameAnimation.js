

/* -------------------------STARTS---------------------- */
/*/////////// ANURAG's ----- NAME's------ANIMATIONS//////////// */


let myName = true;
let typingBox = document.getElementById('nameBox');
let string = "Anurag Vishwakarma";
let sizeName = string.length;
let x = sizeName;
let i = 0, j = (sizeName - 1);

let stringOccupation = "Software Engineer";
let sizeOccupation = stringOccupation.length;
let a = 0, z = sizeOccupation;


async function newfun() {
    
    
    setTimeout(() => {
        
        setInterval(task, 150);
    }, 5000);
    
}


function task() {
    
    
    if (myName) {
        
        if (i < sizeName) {
            
            typingBox.innerHTML = typingBox.innerHTML + string[i];
            i++;
            
        } else {
            let temp = "";
            for (let y = 0; y < x; y++) {
                
                temp = temp + string[y];

            }
            if (x >= 0) {
                x--;
                
                
                typingBox.innerHTML = temp;
            } else {
                x = sizeName;
                i = 0;

                myName = false;
            }
            
        }
    }
    else {

        if (a < sizeOccupation) {
            
            typingBox.innerHTML = typingBox.innerHTML + stringOccupation[a];
            a++;

        } else {
            let tempOccupation = "";
            for (let y = 0; y < z; y++) {
                
                tempOccupation = tempOccupation + stringOccupation[y];

            }
            if (z >= 0) {
                z--;
                
                
                typingBox.innerHTML = tempOccupation;
            } else {
                z = sizeOccupation;
                a = 0;
                
                myName = true;
            }

        }

    }
}


newfun();







/* -------------------------ENDS---------------------- */
/*/////////// ANURAG's ----- NAME's------ANIMATIONS//////////// */