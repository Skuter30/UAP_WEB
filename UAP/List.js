let Barang = [
  {
    kode: "001",
    nama: "Barang A",
    harga: "10.000",
  },
  {
    kode: "002",
    nama: "Barang B",
    harga: "20.000",
  },
  {
    kode: "003",
    nama: "Barang C",
    harga: "30.000",
  },
];

function searchBarang(kode) {
  for (let i = 0; i < data.length; i++)
    if (data[i].kode == kode) {
      return data[i];
    }
}

function proses() {
    
    var kodeBarang = document.getElementById("kodeBarang").value;
    var banyakBarang = document.getElementById("banyakBarang").value;

    alert("Kode Barang: " + kodeBarang + "\nBanyak Barang: " + banyakBarang);
}

