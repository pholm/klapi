import { PrismaClient, Prisma } from '@prisma/client';
const items = [{name: 'Avotulimajoite', amount: 14.0},{name: 'Bensakanisteri', amount: 2.0},{name: 'Dremel', amount: 1.0},{name: 'Eristevaahtomuovi 1m', amount: 60.0},{name: 'Hilleberg Nallo 3gt', amount: 1.0},{name: 'Hilleberg Nallo 4gt', amount: 1.0},{name: 'Husse', amount: 1.0},{name: 'Japaninsaha', amount: 1.0},{name: 'Jatkojohto Pieni valkoinen', amount: 2.0},{name: 'Jatkojohtoja (iso)', amount: 4.0},{name: 'Jatkokela', amount: 1.0},{name: 'Juomakanisteri', amount: 7.0},{name: 'Järeä kyltti', amount: 1.0},{name: 'Kaarisaha', amount: 8.0},{name: 'Kahvinkeitin ideale', amount: 1.0},{name: 'Kalusto pj', amount: 1.0},{name: 'Kalusto pj:n salkosarja', amount: 1.0},{name: 'Kamina Hawu', amount: 1.0},{name: 'Kamina iso pyöreä', amount: 1.0},{name: 'Kamina neliö', amount: 1.0},{name: 'Kamina pieni pyöreä', amount: 1.0},{name: 'Kattila iso', amount: 1.0},{name: 'Kattila keskikokoinen', amount: 1.0},{name: 'Kattila normaali', amount: 1.0},{name: 'Kattila tosi iso', amount: 1.0},{name: 'Kattila valtava', amount: 1.0},{name: 'Katuharja', amount: 1.0},{name: 'Kiilabox', amount: 1.0},{name: 'Kiintoavainsarja', amount: 1.0},{name: 'Kiipeilyköysi', amount: 4.0},{name: 'Kiipeilyvaljaat', amount: 5.0},{name: 'Kirves', amount: 12.0},{name: 'Kuulosuojaimet', amount: 8.0},{name: 'Kuumailmapuhallin', amount: 1.0},{name: 'Kympin salkosarja', amount: 1.0},{name: 'Kymppi', amount: 1.0},{name: 'Kärkisarja', amount: 1.0},{name: 'Käsisaha', amount: 10.0},{name: 'Köysiä ja naruja', amount: 666.0},{name: 'Laavun kepit', amount: 2.0},{name: 'Lapio', amount: 10.0},{name: 'Laskeutumisvaljaat', amount: 2.0},{name: 'Leimaisin', amount: 13.0},{name: 'Leka', amount: 2.0},{name: 'Leka pieni', amount: 1.0},{name: 'Lumilapio', amount: 2.0},{name: 'Mankka', amount: 1.0},{name: 'Marssitanko', amount: 1.0},{name: 'Metsurikypärä', amount: 2.0},{name: 'Metsäsuksien varasiteet (pari)', amount: 1.0},{name: 'Mitta', amount: 5.0},{name: 'Myrskylyhty', amount: 5.0},{name: 'Naiger keppi', amount: 666.0},{name: 'Naiger maavaate', amount: 4.0},{name: 'Naiger teltta', amount: 8.0},{name: 'Naulalaatikko', amount: 1.0},{name: 'Nokipannu', amount: 1.0},{name: 'Nuotiopannu', amount: 20.0},{name: 'Nuuskateltta', amount: 1.0},{name: 'Onki', amount: 1.0},{name: 'Partio Scout banneri', amount: 1.0},{name: 'Pelastusliivit', amount: 4.0},{name: 'Pelipaidat', amount: 25.0},{name: 'Piippurassi', amount: 1.0},{name: 'Pistosaha', amount: 3.0},{name: 'Pitva banneri iso', amount: 1.0},{name: 'Pitva banneri jalalla', amount: 1.0},{name: 'Pitva kyltti', amount: 2.0},{name: 'Pitva lippu', amount: 1.0},{name: 'Pj', amount: 4.0},{name: 'Pj salkosarja', amount: 4.0},{name: 'Pj:n maavaate', amount: 2.0},{name: 'Pocket rocket', amount: 2.0},{name: 'Porakone Bosch', amount: 1.0},{name: 'Porakone Makita', amount: 1.0},{name: 'Primus', amount: 1.0},{name: 'Pukkiasuja', amount: 5.0},{name: 'Pumppu', amount: 2.0},{name: 'Radiopuhelimet', amount: 1.0},{name: 'Rastilippu', amount: 46.0},{name: 'Rautakanki', amount: 4.0},{name: 'Rautasaha', amount: 4.0},{name: 'Rengaspoltin', amount: 3.0},{name: 'Retkisaha', amount: 4.0},{name: 'Retkituoli halpa', amount: 15.0},{name: 'Retkituoli laatu', amount: 2.0},{name: 'Ruuvilaatikko', amount: 1.0},{name: 'Siivilä', amount: 1.0},{name: 'Silja Line lippu', amount: 1.0},{name: 'Sirkkeli', amount: 1.0},{name: 'Sorkkarauta', amount: 3.0},{name: 'Suomen lippu', amount: 2.0},{name: 'Tavaraverkko', amount: 2.0},{name: 'Termospullo', amount: 1.0},{name: 'Teroituskivi', amount: 5.0},{name: 'Teroituskone', amount: 1.0},{name: 'Tikkataulu', amount: 3.0},{name: 'Tiskivati', amount: 8.0},{name: 'Tolppakengät', amount: 1.0},{name: 'Trangia', amount: 7.0},{name: 'Trangian multidisc', amount: 4.0},{name: 'Turvasaappaat', amount: 1.0},{name: 'Työkalubox harmaa', amount: 1.0},{name: 'Työkalubox musta salkku', amount: 1.0},{name: 'Työkalubox sinininen', amount: 1.0},{name: 'Töhö', amount: 1.0},{name: 'Töhöjakkara', amount: 1.0},{name: 'Valaisin', amount: 6.0},{name: 'Vasara', amount: 666.0},{name: 'Viiltosuojahousut', amount: 1.0},{name: 'Vintilä', amount: 5.0},{name: 'Ämpäri', amount: 15.0},]

console.log(items)
const prisma = new PrismaClient()


async function main() {
    await prisma.item.deleteMany()
    
    await prisma.item.createMany({
        data: items
    })
    console.log(`Seeding finished.`);
}

main()
    .catch((e) => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
