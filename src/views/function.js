export function zoomIn(event) {
  event.target.style.transform = "scale(1.3)";
}

export function zoomOut(event) {
  event.target.style.transform = "scale(1)";
}

export function checkInput(inputAlbum) {
  if (
    inputAlbum.value &&
    inputAlbum.value.name != "" &&
    inputAlbum.value.year >= "100" &&
    inputAlbum.value.year <= "2024" &&
    inputAlbum.value.year != "" &&
    inputAlbum.value.url != ""
  )
    return true;
  else {
    alert("Uncorrect input");
    return false;
  }
}
