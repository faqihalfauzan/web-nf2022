function imgPicker(){
    let picker = document.getElementById("selectImg").value;
    let images = document.getElementById("imgFigure");

    if (picker == "fire") {
        images.src ="messi.png"
        images.width = 700;
        images.alt = "Ini adalah gambar messi.png";
        alert("Pemain yang kamu pilih adalah messi");
    } else if (picker == "water") {
        images.src = "ronaldo.jpg";
        images.width = 700;
        images.alt = "Ini adalah gambar ronaldo.jpg";
        alert("Pemain yang kamu pilih adalah ronaldo");
    } else if (picker == "electric") {
        images.src = "neymar.jpg";
        images.width = 700;
        images.alt = "Ini adalah gambar neymar.jpg";
        alert("Pemain yang kamu pilih adalah neymar");
    } else if (picker == "dark") {
        images.src = "ronaldinho.jpg";
        images.width = 700;
        images.alt = "Ini adalah gambar ronaldinho.jpg";
        alert("Pemain yang kamu pilih adalah ronaldinho");
    } else if (picker == "psyhic") {
        images.src = "mohsalah.jpg";
        images.width = 700;
        images.alt = "Ini adalah gambar mohsalah.jpg";
        alert("Pemain yang kamu pilih adalah mohsalah");
    } else if (picker == "fairy") {
        images.src = "ibrahimmovic.jpg";
        images.width = 700;
        images.alt = "Ini adalah gambar ibrahimmovic.jpg";
        alert("Pemain yang kamu pilih adalah ibrahimmovic");
    } else if (picker == "grass") {
        images.src = "banbang pamungkas.jpg";
        images.width = 700;
        images.alt = "Ini adalah gambar banbang pamungkas.jpg";
        alert("Pemain yang kamu pilih adalah bambang pamungkas");
    } else {
        alert("Gagal");
    }
}