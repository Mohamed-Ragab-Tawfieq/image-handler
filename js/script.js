const left = document.getElementById('left')
const name = document.getElementById('name')
const imgName = document.getElementById('imgName')
const copyright = document.getElementById('copyright')

function load() {
    // input border and check icon styling
    document.getElementById('name').classList.add('onload');
    document.querySelector('.nametxt span').classList.add('show');
    document.querySelector('.copyright').classList.add('show');
    // binding input value with img
    document.getElementById('imgName').innerHTML = document.getElementById('name').value

    html2canvas(left, {
        onrendered: function (canvas) {
            document.body.appendChild(canvas);
            // prepare download
            const a = document.createElement("a");
            document.body.appendChild(a);
            a.href = canvas.toDataURL();
            a.download = 'Greeting.png';
            a.click();
            // // remove what is appended
            document.body.removeChild(a);
            document.body.removeChild(canvas);
            canvas.classList.add('d-none');
            // hide info from original card
            imgName.classList.add('d-none')
            copyright.classList.add('d-none')
        }
    });

}