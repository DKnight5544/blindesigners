
const INIT_WIDTH = "125px";
function begin() {

    let id = getUrlParam("id");

    if (id === null) {
        window.location.replace("Cards/Cards.html?id=Cartman");
    }

    if (id === "DWK_Mobster") { id = "Rocko"; }
    else if (id === "DWK_MobsterM01") { id = "Rocko"; }
    else if (id === "ScanMe_0001") { id = "Rocko"; }

    const image = document.getElementById("BannerImage");
    image.src = `customers/${id}.png`;
    id = id.split("_")[0];

    const htmlBody = document.body.innerHTML;
    const updatedHtmlBody = htmlBody
        .replace(/{cost}/g, "<b>$40</b>")
        .replace(/{payout}/g, "<b>$20</b>")
        .replace(/{id}/g, id)
        ;
    document.body.innerHTML = updatedHtmlBody;


    // Add event listener to each sample avatar.
    var squares = document.querySelectorAll('.square');

    squares.forEach(function (square) {
        square.style.width = INIT_WIDTH;
        square.addEventListener('click', toggleExpand);
    });


}

// Function to get a specific URL parameter
function getUrlParam(param) {
    const params = new URLSearchParams(window.location.search);
    return params.get(param);
}


function toggleExpand(event) {
    this.style.width = (this.style.width === INIT_WIDTH) ? '80%' : INIT_WIDTH;
}