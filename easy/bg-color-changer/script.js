const buttons = document.querySelectorAll("button");

buttons.forEach((button) => {
    button.addEventListener("click", () => {
        const id = button.id;

        if(id === "customButton"){
            const customColor = prompt("Enter a Color");
            document.body.style.backgroundColor = customColor;
        }else{
            const color = id.replace("Button", "").toLowerCase();
            document.body.style.backgroundColor = color;
        }
    })
})