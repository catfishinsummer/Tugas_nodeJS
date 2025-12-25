const menuData = require("./data.js");

const readline = require("readline");
const rl = readline.createInterface(process.stdin, process.stdout);
const fs = require("fs");
const { json } = require("stream/consumers");

if (fs.existsSync("pesanan.json")) {
  const bakar = fs.readFileSync("pesanan.json", "utf-8");
  menuData.pesanan = JSON.parse(bakar);
}

rl.question("Pilih (1/2/3) : ", (pesan) => {
  // console.log(pesan);

  if (pesan == "1") {
    rl.question(`Masukan kode pesanan : `, (jawab) => {
      const up = jawab.toUpperCase();
      const newOrder = menuData.menu.find((data) => data.kode === up);

      if (newOrder) {
        menuData.pesanan.push(newOrder);

        fs.writeFileSync(
          "pesanan.json",
          JSON.stringify(menuData.pesanan, null, 2)
        );

        console.log();
        console.log("-----------------------------");
        console.log("Pesanan berhasil di tambahkan");
        console.log("-----------------------------");
      } else {
        console.log("Data tidak ditemukan");
      }
      rl.close();
    });
  } else if (pesan == "2") {
    if (fs.existsSync("pesanan.json")) {
      async function asing() {
        const res = fs.readFileSync("./pesanan.json", "utf-8");
        const parse = JSON.parse(res);
        // console.log(parse);
        const total = parse.map((data) => data.harga);
        const totalFix = total.reduce((acc, curr) => acc + curr, 0);
        const totalFixBGT = totalFix / (1000).toFixed(0);
        parse.forEach((element, i) => {
          console.log(`${i + 1}. ${element.nama_menu} - ${element.harga}`);
        });
        console.log(`Total Bayar : Rp${totalFixBGT},000`);
      }
      asing();
      rl.close();
    } else {
      console.log();

      console.log("=========================");
      console.log("Anda belum memesan apapun");
      console.log("=========================");

      rl.close();
    }
  } else if (pesan == "3") {
    fs.unlink("pesanan.json", (err) => {
      if (err) {
        console.error("Error deleting file:", err);
        return;
      }
      rl.close();
    });
  }
});
