function mudaFoto(foto) {
    const elementos = document.getElementsByClassName("image");
    const image = elementos[0];
    image.src = foto;
}