document.getElementById("btn").addEventListener("click", handleBtnClick);

function handleBtnClick() {
    // const URL = "https://api.kanye.rest/";
    const URL = "http://localhost:9901";
    fetch(URL)
        .then((response)=>response.json())
        .then(({quote})=>{
            let quotePh=document.createElement("p");
                quotePh.innerHTML = quote;
                document.getElementById("quoteHolder").appendChild(quotePh);
        })
}