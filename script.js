function converter() {
    let metros = Number(window.prompt('Digite uma distância em metros (m)'));
    let res = document.querySelector('#resultado');

    let dm = metros / 1000;
    let cm = metros / 100;
    let mm = metros / 10;
    let dam = metros * 10;
    let hm = metros * 100;
    let km = metros * 1000;

    res.innerHTML = `<p>A distância de ${metros} metros equivale a:</p>`;
    res.innerHTML += `<p>Decímetros: ${dm}</p>`;
    res.innerHTML += `<p>Centímetro: ${cm}</p>`;
    res.innerHTML += `<p>Milímetros: ${mm}</p>`;
    res.innerHTML += `<p>Decâmetros: ${dam}</p>`;
    res.innerHTML += `<p>Hectômetro: ${hm}</p>`;
    res.innerHTML += `<p>Quilômetro: ${km}</p>`;
}