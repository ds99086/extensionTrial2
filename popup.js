document.addEventListener('DOMContentLoaded', async function () {
    const textBox = document.getElementById("selectedinput");
    const clipBox = document.getElementById("clearboard");
    const optionBox = document.getElementsByClassName("charoptions")[0];

    document.addEventListener('click', async function (e) {

        if (e.target && e.target.matches(".char")) {
            const textToCopy = e.target.innerHTML;
            // console.log(textToCopy);
            // console.log(textBox);
            textBox.value += textToCopy;
        }
        if (e.target && e.target.matches(".copyinput")) {
            textBox.select();
            document.execCommand("copy");
        }
        if (e.target && e.target.matches(".clearinput")) {
            textBox.value = "";
        }

        if (e.target && e.target.matches(".clipbutton")) {
            clipBox.select();
            document.execCommand("copy");
            // console.log(clipBox);
            // //console.log(navigator.clipboard.readText());
            // const response = await readClipboard();
            // console.log(response);
            // clipBox.innerHTML = response;
            //navigator.clipboard.readText().then(text => clipBox.innerText = text);
            
            // clipBox.select();
            // document.execCommand("paste");
            // const clipText = navigator.clipboard.read();
            // clipBox.innerHTML = clipText;
            //console.log(clipBox);
        }
    })

    //  async function readClipboard() {
    //     const clearboard = document.getElementById("clearboard");
    //     // if (navigator.clipboard) {
    //     //     
        
    //     try {
    //         console.log(clearboard);

    //         const copied = await navigator.clipboard.read();
    //         console.log(copied);


    //         // clearboard.focus();
    //         // clearboard.select();
    //         // clearboard.setSelectionRange(0, 99999);
    //         // document.execCommand('paste');
    //         // console.log(document.execCommand('paste'))
            
    //         // const content = clearboard.value;
    //         // console.log("i' got content");
            
    //         // console.log(content);
    //         return content;
    //     } catch (err) {
    //         console.error('failed to read clipboard');
    //         console.error(err);
    //     }
    // //}
    // }
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

