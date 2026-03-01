const sum = document.querySelector('#sum'),
    usd = document.querySelector('#usd');

sum.addEventListener('input', () => {
    const request = new XMLHttpRequest();

    request.open('GET', './js/current.json');
    request.setRequestHeader('Content-Type', 'application/json');
    request.send();

    request.addEventListener('load', () => {
        if (request.status === 200) {
            const data = JSON.parse(request.response);
            usd.value = (+sum.value / data.current.usd).toFixed(2);
        } else {
            usd.value = 'Something went wrong';
        }
    });
});
