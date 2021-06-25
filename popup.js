document.addEventListener('DOMContentLoaded', function (){
    const textbox = document.getElementById("selectedinput");
    document.addEventListener('click', function(e) {

        if (e.target && e.target.matches(".char")) {
            const textToCopy = e.target.innerHTML;
            console.log(textToCopy);
            console.log(textbox);
            textbox.value += textToCopy;
        }
        if (e.target && e.target.matches(".copyinput")){
            textbox.select();
            document.execCommand("copy");
        }
        if (e.target && e.target.matches(".clearinput")) {
            textbox.value = "";
        }
    } )



})