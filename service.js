const menuData = require("./data.js")

const readline = require("readline")
const rl = readline.createInterface(process.stdin, process.stdout);
const fs = require('fs');

// ini kalo pesanan.json nya gak ada, nanti dia bakal nampil ges
if (fs.existsSync("pesanan.json")) {
    const bakar = fs.readFileSync("pesanan.json", "utf-8");
    menuData.pesanan = JSON.parse(bakar);
}


    rl.question("Pilih (1/2/3) : ", (pesan)=>{
        
        console.log(pesan);
        
        if (pesan == "1") {
            rl.question(`Masukan kode pesanan : `, (jawab)=>{
                const up = jawab.toUpperCase()
                const newOrder = menuData.menu.find((data) => data.kode === up);

                if (newOrder) {
                    menuData.pesanan.push(newOrder)

                    fs.writeFileSync("pesanan.json", JSON.stringify(menuData.pesanan, null, 2))
                    

                } else {
                    console.log("Data tidak ditemukan");
                    
                }
                rl.close()
            })
        }
    })



