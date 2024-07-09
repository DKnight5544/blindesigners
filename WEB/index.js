
const INIT_WIDTH = "125px";

function begin() {

    const image = document.getElementById("BannerImage");
    image.src = `customers/${id}.png`;
    id = id.split("_")[0];

    const htmlBody = document.body.innerHTML;
    const updatedHtmlBody = htmlBody
        .replace(/{cost}/g, "<gold>$35</gold>")
        .replace(/{payout}/g, "<gold>$20</gold>")
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

function toggleExpand(event) {
    this.style.width = (this.style.width === INIT_WIDTH) ? '80%' : INIT_WIDTH;
}