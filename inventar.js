class Produs {
    producator;
    denumire;
    pret;
    dotare ;
    

    constructor(prod, denm, prt, dot){
        this.producator = prod;
        this.denumire = denm;
        this.pret = prt;
        this.dotare = dot;
        // this.dotare = obiect;
    }   
    info(){

        let data = "Producator : " + this.producator + "Denumire :" 
        + this.denumire + " pret " +  this.pret + "\n";
        console.log(data);
    }
    setDotari(dotare){
        this.dotare = dotare;

    }
    // showDotari(){
    //     return thisdotari;
    // }
}

class Comparare{
   comparare = function (primulProdus, alDoileProdus){
    var msg = '';
    var pret;
    var dot;
    if(primulProdus.pret > alDoileProdus.pret){
        msg = 'primul produs este mai scump';
        pret = primulProdus.pret;
        dot = primulProdus.dotare;

    } else if (primulProdus.pret < alDoileProdus.pret){
        msg = 'al doilea produs este mai scump';
        pret = alDoileProdus.pret;
        dot = alDoileProdus.dotare;
    }
    else{
        msg = ' produsele au acelasi pret';
        pret = primulProdus.pret;
    }

    console.log(msg);
    console.log(`pretul in  este ${pret}` );
    console.log(`pretul in Euro este ${pret/5}` );
    console.log(`dotarile sunt ${dot.ram} si ${dot.cpu}`);
   }
   
   suporta = function(produs){
    if (produs.dotare.cpu > 100) {
           console.log('procesorul ii ok') 
    }

   }
}

class DotariHardware{
    ram = '';
    cpu = '';
    
    constructor (ram, cpu){
        this.ram = ram;
        this.cpu = cpu;
    }

}

class Telefon extends Produs{
    ecran;
    nrSim;
    nrCamere;
    pliabil;
    constructor(prod, denm, prt, dot, ecran, nrSim, nrCamere, pliabil)
    {
        super(prod, denm, prt, dot);
        this.ecarn = ecran;
        this.nrSim = nrSim;
        this.nrCamere = nrCamere;
        this.pliabil = pliabil;
    }

}


class Laptop extends Produs{
    ecran;
    placaVideo;
    hddDisk;
    cameraWeb;
    constructor(prod, denm, prt, dot, ecran, placaVideo, hddDisk, cameraWeb)
    {
        super(prod, denm, prt, dot);
        this.ecarn = ecran;
        this.placaVideo = placaVideo;
        this.hddDisk = hddDisk;
        this.cameraWeb = cameraWeb;
    }

}
const prod1 = new Produs("Electrolux", "aspirator", 1232,  {'ram':'5GB','cpu':'500MHz'});
// const produs2 = new Produs("Siemens", "aspirator", 1000,   {'ram':'2GB', 'cpu':'400MHz'});

const prod1_Dotari = new DotariHardware('1Gb', '200MHz');
const prod2_Dotari = new DotariHardware('2Gb', '400MHz');


var produs1 = new Produs("Electrolux", "aspirator", 1232, prod1_Dotari);
var produs2 = new Produs("Siemens", "aspirator", 1000, prod2_Dotari);

produs1.setDotari(prod1_Dotari);
produs2.setDotari(prod2_Dotari);
// console.log(produs1);
// console.log(produs2);
const verifPret = new Comparare();

// verifPret.comparare(produs1, produs2);
// verifPret.suporta(produs1);
// console.log(prod1);

const tel = new Telefon("Motorola", "telefon", 1232,  {'ram':'128GB','cpu':'1GHz'}, '7 inch', 2, 3, false);
const laptop = new Laptop("Lenovo", "laptop", 2899,  {'ram':'16GB','cpu':'i5'}, '15.6 inch', 'GeForce Experience', 'ssd', true);


console.log(tel);
console.log(laptop);

// var key = Object.keys(tel);
// key.forEach((key)=>{
//     console.log(key + ' -> ' + tel[key]);

// })

const list = [tel, laptop];
const tabel = document.getElementById("tabel-produse");
// for (i= 0; i< list.length; i++){
//     var key = Object.keys(list[i]);
//     console.log(' ============================= ');
//     key.forEach((key)=>{
//         if (key === 'dotare'){
//             console.log(list[i][key]['ram']);
//             console.log(list[i][key]['cpu']);
//         }

//         console.log(key + ' --> ' + list[i][key]);
    
//     })
    
// }

const adaugUnElemLaTabel = (produs) => {

    var rand_nou = tabel.insertRow();

    var cel_1 = rand_nou.insertCell(0);
    var cel_2 = rand_nou.insertCell(1);
    
    cel_1.innerHTML = produs.producator;
    cel_2.innerHTML = produs.pret;

};

const afisare = () => {

    adaugUnElemLaTabel({producator : "nume ", pret : "pret" })

    list.forEach((produs) => adaugUnElemLaTabel(produs));
    // console.log(list);

};

afisare();



document.getElementById("btnAdaugare")
    .addEventListener("click", (eveniment) => {

    eveniment.preventDefault();

        let flag = true;

        let name = document.getElementById("nume").value;

        let pret = document.getElementById("pret").value;

        const noulProdus = { producator: name, pret: pret};

        list.forEach( (produs) => {

            if (produs.producator === name){
                alert("Produsul exista deja");
                flag = false;
                return;
            }
        });


        if (flag === true){
            list.push(noulProdus);
            adaugUnElemLaTabel(noulProdus);
        }
    
    });