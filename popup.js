document.addEventListener('DOMContentLoaded', function (){
    const textBox = document.getElementById("selectedinput");
    const clipBox = document.getElementById("clipbox");
    const optionBox = document.getElementsByClassName("charoptions")[0];
    
    document.addEventListener('click', function(e) {

        if (e.target && e.target.matches(".char")) {
            const textToCopy = e.target.innerHTML;
            // console.log(textToCopy);
            // console.log(textBox);
            textBox.value += textToCopy;
        }
        if (e.target && e.target.matches(".copyinput")){
            textBox.select();
            document.execCommand("copy");
        }
        if (e.target && e.target.matches(".clearinput")) {
            textBox.value = "";
        }

        if (e.target && e.target.matches(".clipstorage")) {
            //console.log(clipBox);
            clipBox.select();
            document.execCommand("paste");
            const clipText = navigator.clipboard.read();
            clipBox.innerHTML = clipText; 
            //console.log(clipBox);
        }
    })

    //console.log(optionBox);

    data.forEach(type => {

        let categoryDiv = document.createElement("div");
        let categoryName = document.createElement("h4");
        categoryDiv.classList.add("symbol-category");
        categoryDiv.setAttribute("name", type.name);
        categoryName.innerHTML = type.name;

        categoryDiv.append(categoryName);
        optionBox.append(categoryDiv);

        type.symbols.forEach(symbol => {
            //console.log(symbol);
            console.log(symbol.value);
            categoryDiv.innerHTML += `
            <button class=char>${symbol.value}</button>
            `
        });
    });
    
})

