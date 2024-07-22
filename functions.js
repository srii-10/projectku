/* ini javascript */

const bmiText = document.getElementById("hasil");
const descText = document.getElementById("article");
const form = document.querySelector("form");

form.addEventListener('submit', onFormSubmit)

function onFormSubmit(e) {
    e.preventDefault();

    const weight = parseFloat(form.weight.value);
    const height = parseFloat(form.height.value);
    const age = parseFloat(form.age.value);

    if(isNaN(weight) || isNaN(height) || isNaN(age) || weight <= 0 || height <=0 || age <= 0) {
        alert("Inputan tidak boleh kosong!");
        return;
    }

    const heightInMeters = height / 100; // cm-> m
    const hasil = weight / Math.pow(heightInMeters, 2);
    const desc = interpretBMI(hasil);

    bmiText.textContent = hasil.toFixed(2);
    descText.innerHTML = `Berat badan kamu <strong>${desc}</strong>`;
}

function interpretBMI(hasil) {
    if (hasil<18.5) {
        return "Kurang";
    } else if (hasil>=18.5&&hasil<=24.9) {
        return "Ideal";
    } else if (hasil>=25.0&&hasil<=29.9) {
        return "Lebih";
    } else {
        return "Kegemukan";
    }
}