// var btnNavi = document.getElementById('btnNavi');
// var links = btnNavi.querySelectorAll('li a');

// for (var i = 0; i < links.length;i++) {
//     links[i].computedStyleMap.fontSize = '20px';
//     links[i].computedStyleMap.fontSize = '20px';
// }

// const carousel = document.querySelector(".carousel");
// const images = carousel.querySelectorAll("img");
// const imageWidth = images[0].clientWidth;

// let index = 0;

// function validateForm() {
//     let x = document.forms["myForm"]["fname"].value;
//     if (x == "") {
//       alert("Name must be filled out");
//       return false;
//     }
//   }

// function slideNext () {
//     index + (index + 1) % images.length;
//     carousel.style.transform = `translateX({index * imagesWidth}px)`;
//     setInterval(slideNext, 4000);
// }



// button.addEventListener('submit', (e) => {
    
    //     let password = document.getElementById("fname");
    
    //     if (password.length <= 10){
        //         let errorMsg = document.getElementById("errorMsg");
        
        //         errorMsg.textContent = "First name is required!"
        //         return 
        //     } setInterval(() => {
            
            //     }, 5000);
            // })
            

const button = document.getElementById("id");
const validateForm = 0;

            function validateForm() {
    let form = document.forms['myForm']['fname'].value;
    if (form === '') {
        alert('Please no omission!');
        return false;
    }
}

button.addEventListener('submit', (e) => {
    
    let password = document.getElementById("fname");

    if (password.length <= 12){
        let errorMsg = document.getElementById("errorMsg");

        errorMsg.textContent = "First name is required!"
        return
    } setInterval(() => {
        
    }, 5000);
})