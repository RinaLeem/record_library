export function zoomIn(event) {
  event.target.style.transform = "scale(1.3)";
}

export function zoomOut(event) {
  event.target.style.transform = "scale(1)";
}

export function checkInput(inputAlbum) {
  if (inputAlbum.value.name == "") {
    alert("Введите название");
    return false;
  }
  if (inputAlbum.value.url == "") {
    alert("Введите ссылку на картинку");
    return false;
  }
  if (
    inputAlbum.value.year < "100" ||
    inputAlbum.value.year > "2024" ||
    inputAlbum.value.year == ""
  ) {
    alert("Введите верный год");
    return false;
  }

  return true;
}
