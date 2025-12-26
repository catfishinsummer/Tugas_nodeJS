const menuData = require("./data.js");

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  prompt: "",
});
const fs = require("fs");

if (fs.existsSync("pesanan.json")) {
  const bakar = fs.readFileSync("pesanan.json", "utf-8");
  menuData.pesanan = JSON.parse(bakar);
}

function tampilMenu() {
  menuData.menu.forEach((element) => {
    // const rupiahRed = element.harga.reduce((acc, curr) => acc + curr, 0);
    const rupiahFix = element.harga / (1000).toFixed(0);

    console.log(`- (${element.kode}) ${element.nama_menu} - ${rupiahFix}.000`);
  });
}
console.log();
console.log(`--=( Warung BABA CHAN )=--`);
console.log();
console.log(`Daftar Menu :`);

tampilMenu();

console.log();
console.log(`Opsi :`);
console.log(`1. Pesan`);
console.log(`2. Daftar pesanan saya`);
console.log(`3. Keluar`);

rl.question("Pilih (1/2/3): ", (pesan) => {
  rl.prompt();
  // console.log(pesan);

  if (pesan == "1") {
    rl.question(`Masukan kode makanan : `, (jawab) => {
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

        console.log();
        console.log(`Opsi :`);
        console.log(`1. Pesan`);
        console.log(`2. Daftar pesanan saya`);
        console.log(`3. Keluar`);
      } else {
        console.log("Data tidak ditemukan");
      }
      rl.setPrompt("Pilih (1/2/3): ");
      rl.prompt();
      rl.on("line", (pesan) => {
        rl.prompt;
        if (pesan == "1") {
          rl.question(`Masukan kode makanan : `, (jawab) => {
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

              console.log();
              console.log(`Opsi :`);
              console.log(`1. Pesan`);
              console.log(`2. Daftar pesanan saya`);
              console.log(`3. Keluar`);
            } else {
              console.log("Data tidak ditemukan");
            }
            rl.prompt();
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
              console.log();
              console.log(" Daftar Pesanan");
              parse.forEach((element, i) => {
                if (element.kode === "ET") {
                  console.log(`${i + 1}. ${"Es Teh"} - ${element.harga}`);
                } else {
                  console.log(
                    `${i + 1}. ${element.nama_menu} - ${element.harga}`
                  );
                }
              });
              console.log();

              console.log(`Total Bayar : Rp${totalFixBGT},000`);

              console.log();
              console.log(`Opsi :`);
              console.log(`1. Pesan`);
              console.log(`2. Daftar pesanan saya`);
              console.log(`3. Keluar`);
            }
            asing();
            rl.prompt();
          } else {
            console.log();

            console.log("===========================");
            console.log("Anda belum memesan apapun");
            console.log("===========================");

            rl.prompt();
          }
        } else if (pesan == "3") {
          fs.unlink("pesanan.json", (err) => {
            if (err) {
              console.log("Terima kasih sudah berkunjung ke warung kami ..");
              rl.close();
            } else {
              console.log("Terima kasih sudah berkunjung ke warung kami ..");
              rl.close();
            }
          });
        }
      });
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
        console.log();
        console.log(" Daftar Pesanan");

        parse.forEach((element, i) => {
          if (element.kode === "ET") {
            console.log(`${i + 1}. ${" Es Teh"} - ${element.harga}`);
          } else {
            console.log(`${i + 1}. ${element.nama_menu} - ${element.harga}`);
          }
        });
        console.log();

        console.log(`Total Bayar : Rp${totalFixBGT},000`);

        console.log();
        console.log(`Opsi :`);
        console.log(`1. Pesan`);
        console.log(`2. Daftar pesanan saya`);
        console.log(`3. Keluar`);
      }
      asing();

      rl.setPrompt("Pilih (1/2/3): ");
      rl.prompt();
      rl.on("line", (pesan) => {
        rl.prompt;
        if (pesan == "1") {
          rl.question(`Masukan kode makanan : `, (jawab) => {
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

              console.log();
              console.log(`Opsi :`);
              console.log(`1. Pesan`);
              console.log(`2. Daftar pesanan saya`);
              console.log(`3. Keluar`);
            } else {
              console.log("Data tidak ditemukan");
            }
            rl.prompt();
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
              console.log();
              console.log(" Daftar Pesanan");

              parse.forEach((element, i) => {
                if (element.kode === "ET") {
                  console.log(`${i + 1}. ${" Es Teh"} - ${element.harga}`);
                } else {
                  console.log(
                    `${i + 1}. ${element.nama_menu} - ${element.harga}`
                  );
                }
              });
              console.log();

              console.log(`Total Bayar : Rp${totalFixBGT},000`);

              console.log();
              console.log(`Opsi :`);
              console.log(`1. Pesan`);
              console.log(`2. Daftar pesanan saya`);
              console.log(`3. Keluar`);
            }
            asing();
            rl.prompt();
          } else {
            console.log();

            console.log("===========================");
            console.log("Anda belum memesan apapun");
            console.log("===========================");

            console.log();
            console.log(`Opsi :`);
            console.log(`1. Pesan`);
            console.log(`2. Daftar pesanan saya`);
            console.log(`3. Keluar`);

            rl.prompt();
          }
        } else if (pesan == "3") {
          fs.unlink("pesanan.json", (err) => {
            if (err) {
              console.log("Terima kasih sudah berkunjung ke warung kami ..");
              rl.close();
            } else {
              console.log("Terima kasih sudah berkunjung ke warung kami ..");
              rl.close();
            }
          });
        }
      });
    } else {
      console.log();

      console.log("===========================");
      console.log("Anda belum memesan apapun");
      console.log("===========================");

      console.log();
      console.log(`Opsi :`);
      console.log(`1. Pesan`);
      console.log(`2. Daftar pesanan saya`);
      console.log(`3. Keluar`);

      rl.setPrompt("Pilih (1/2/3): ");
      rl.prompt();
      rl.on("line", (pesan) => {
        rl.prompt;
        if (pesan == "1") {
          rl.question(`Masukan kode makanan : `, (jawab) => {
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

              console.log();
              console.log(`Opsi :`);
              console.log(`1. Pesan`);
              console.log(`2. Daftar pesanan saya`);
              console.log(`3. Keluar`);
            } else {
              console.log("Data tidak ditemukan");
            }
            rl.prompt();
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
              console.log();
              console.log(" Daftar Pesanan");

              parse.forEach((element, i) => {
                if (element.kode === "ET") {
                  console.log(`${i + 1}. ${" Es Teh"} - ${element.harga}`);
                } else {
                  console.log(
                    `${i + 1}. ${element.nama_menu} - ${element.harga}`
                  );
                }
              });
              console.log();

              console.log(`Total Bayar : Rp${totalFixBGT},000`);

              console.log();
              console.log(`Opsi :`);
              console.log(`1. Pesan`);
              console.log(`2. Daftar pesanan saya`);
              console.log(`3. Keluar`);
            }
            asing();
            rl.prompt();
          } else {
            console.log();

            console.log("===========================");
            console.log("Anda belum memesan apapun");
            console.log("===========================");

            console.log();
            console.log(`Opsi :`);
            console.log(`1. Pesan`);
            console.log(`2. Daftar pesanan saya`);
            console.log(`3. Keluar`);

            rl.prompt();
          }
        } else if (pesan == "3") {
          fs.unlink("pesanan.json", (err) => {
            if (err) {
              console.log("Terima kasih sudah berkunjung ke warung kami ..");
              rl.close();
            } else {
              console.log("Terima kasih sudah berkunjung ke warung kami ..");
              rl.close();
            }
          });
        }
      });
    }
  } else if (pesan == "3") {
    fs.unlink("pesanan.json", (err) => {
      if (err) {
        rl.close();
        console.log("Terima kasih sudah berkunjung ke warung kami ..");
      } else {
        console.log("Terima kasih sudah berkunjung ke warung kami ..");
        rl.close();
      }
    });
  }
});
