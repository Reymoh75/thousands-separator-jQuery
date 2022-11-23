let numbersArray, seperatorsNumber;
$("#myInput").on("keyup", function () {
  numbersArray = $(this).val().trim().replaceAll(",", "").split("");
  seperatorsNumber = 0;
  $.each(numbersArray, function (index) {
    if (index % 3 == 0 && index != 0) {
      numbersArray.splice(-(index + seperatorsNumber), 0, ",");
      seperatorsNumber++;
    }
  });
  $(this).val(numbersArray.join(""));
});
