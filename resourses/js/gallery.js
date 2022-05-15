const gallery = document.getElementsByClassName("gallery-img");
var info = document.getElementsByClassName("gallery-info");

console.log(gallery);
console.log(gallery.length);
console.log(info.length);

const cardInfo = [
    {
        title : "Title1",
        desc  : "lala",
        link  : "https://juliamoller.artstation.com/"
    },
    {
        title : "Title2",
        desc  : "lala",
        link  : "https://juliamoller.artstation.com/"
    }
];

for(var i = 0; i < gallery.length; i++){
    const index = i;

    const cardHtml = "<h5 class='card-title fw-bolder'>" + cardInfo[index].title + "</h5><p class='card-text fw-normal'>" + cardInfo[index].desc + "</p><a href='" + cardInfo[index].link + "' class='btn btn-link fw-bold'>...read more</a>";

    // this will be executed only once when the cursor moves over the card
    gallery[i].addEventListener('mouseenter', function(event) {
        info[index].classList.add("card-body");
        info[index].innerHTML = cardHtml;
    }, false);

    gallery[i].addEventListener('touchstart', function(event) {
        info[index].classList.add("card-body");
        info[index].innerHTML = cardHtml;
    }, false);

    // this will be executed only once when the cursor moves over the card
    gallery[i].addEventListener('mouseleave', function(event){
        info[index].classList.remove("card-body");
        info[index].innerHTML = ""; 
    }, false);
}