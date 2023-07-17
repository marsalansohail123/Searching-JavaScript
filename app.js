let mobiles = {
    iphones: {
        v13promax: {
            storage: "256gb",
            ram: "8gb",
            price: "400,000"
        },
        v13: {
            storage: "256gb",
            ram: "8gb",
            price: "370,000"

        },
        v12: {
            storage: "64gb",
            ram: "8gb",
            price: "175,000"


        }

    },
    samsung: {
        a13: {
            storage: "128gb",
            ram: "4gb",
            price: "40,000"
        },
        a32: {
            storage: "128gb",
            ram: "6gb",
            price: "46,000"

        },
        a73: {

            storage: "256gb",
            ram: "8gb",
            price: "115,000"
        }

    },
    infinix: {
        smart6: {
            storage: "64gb",
            ram: "3gb",
            price: "23,000"
        },
        note12g96: {
            storage: "128gb",
            ram: "8gb",
            price: "41,000"

        },
        zeroxpro: {

            storage: "128gb",
            ram: "8gb",
            price: "46,000"

        }

    },
    xiomi: {
        realme: {
            storage: "64gb",
            ram: "3gb",
            price: "23,000"
        },
        readme: {
            storage: "128gb",
            ram: "8gb",
            price: "41,000"

        },
        myme: {

            storage: "128gb",
            ram: "8gb",
            price: "46,000"

        }
    }
};

var mobComp = document.getElementById("comp");
var mobModel = document.getElementById("model");
var butt = document.getElementById("abc");
var para = document.getElementById("showDetail");

var comp = Object.keys(mobiles);

for (var i = 0; i < comp.length; i++) {
    var mobCompanies = comp[i];
    mobComp.innerHTML += `
    <option value="${mobCompanies}">${mobCompanies}</option>
    `
}

function fillModels() {
    var models = Object.keys(mobiles[mobComp.value])
    mobModel.disabled = false;
    mobModel.innerHTML = "";
    for (var i = 0; i < models.length; i++) {
        var mobModels = models[i];
        mobModel.innerHTML += `
        <option value="${mobModels}">${mobModels}</option>
        `
    }
    abc.disabled = false;
}

function search() {
    var search = mobiles[mobComp.value][mobModel.value]
    para.innerHTML = Object.values(search);
}

console.log(mobComp, mobModel, comp)