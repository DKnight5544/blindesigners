

function begin() {

    let id = getUrlParam("id");


    if (id === null) {
        window.location.replace("index.html?id=Cartman");
    }

    if (id === null) {id = "Cartman";}

    if (id === "DWK_Mobster") {  }

    const image = document.getElementById("CardImage");
    image.src = `Customers/${id}.png`;

    const htmlBody = document.body.innerHTML;
    const updatedHtmlBody = htmlBody
        .replace(/{cost}/g, "<b>$40</b>")
        .replace(/{payout}/g, "<b>$20</b>")
        .replace(/{id}/g, id)
        ;
    document.body.innerHTML = updatedHtmlBody;


}

// Function to get a specific URL parameter
function getUrlParam(param) {
    const params = new URLSearchParams(window.location.search);
    return params.get(param);
}
