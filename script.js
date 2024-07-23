document.querySelector(".but").addEventListener('click', () => {
    const data = document.getElementById('input1').value;
    if (data === "") {
        alert("Please input some message");
    } else {
       
        let newdiv = document.createElement('div');
        newdiv.innerHTML = `
            <div class="button" id="button-${Date.now()}"></div>
            <div class="taskss">${data}</div>`;
        newdiv.className = "t";
        let tasks = document.getElementById("j");
        tasks.appendChild(newdiv);

       
        const newButton = newdiv.querySelector(".button");
        newButton.addEventListener('click', () => {
            newButton.style.backgroundColor = "#cca8e9";
            newdiv.className="t2"
            newdiv.style.order='1'
        });
    }
});

