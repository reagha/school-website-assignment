
var fullimgbox = document.getElementById("fullimgbox");
var fullimg = document.getElementById("fullimg");

function openfullimg(pic){
    fullimgbox.style.display = "flex";
    fullimg.src=pic;
}
function closefullimg(){
    fullimgbox.style.display = "none";

}


/*
let fullimgbox = document.getElementById("gallery");
        let fullimg = document.querySelectorAll(".gallery div");

        function openfullimg(pic){
            fullimgbox.style.display = "flex";
            fullimg.src=pic;
        }
        function closefullimg(){
            fullimgbox.style.display = "none";

        }*/
