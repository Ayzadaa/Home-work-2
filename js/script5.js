let card = prompt("Введите номер вашей карты: ", "1234567891232");

document.write(
  "Номер вашей карты: " + card.replace(card.slice(0, 9), "********")
);
