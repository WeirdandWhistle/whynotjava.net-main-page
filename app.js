const subdomainList = document.getElementById("subdomainTree");

async function init(){
    const res = await fetch("subdomains.txt");

    const text = await res.text();
    const lines = text.split("\r\n");
    for(let i = 0; i<lines.length;i++){
        console.log(lines[i]);
        subdomainList.insertAdjacentHTML("beforeend",`<li>${lines[i]}.whynotjava.net</li>`);

    }
}

init();