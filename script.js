<<script>
function hitung() {
  var nilai1 = parseInt(document.getElementById("nilai1").value);
  var nilai2 = parseInt(document.getElementById("nilai2").value);
  var nilai3 = parseInt(document.getElementById("nilai3").value);

  var nilai = [nilai1, nilai2, nilai3];
  var total = 0;
  var rata = 0;

  for (var i = 0; i < nilai.length; i++) {
    total += nilai[i];
  }

  rata = total / nilai.length;

  document.getElementById("hasil").innerHTML = "Nilai diinput adalah : " + nilai + "<br>" +
                          "Total nilai yang terinput adalah : " + total + "<br>" +
                          "Nilai Rata-rata yang diinput adalah " + rata;
}
</script>