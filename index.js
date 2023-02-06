function handleSubmit(event) {
    event.preventDefault()
    const form = document.getElementById('form')
    const data = new FormData(form)
    const formData = Object.fromEntries(data.entries())
    const params = new URLSearchParams(document.location.search);
    const ref = params.get('ref')
    formData.ref = ref
    formData.date = new Date().toDateString()

    fetch("https://ipapi.co/json/")
    .then(res => res.json())
    .then(data => {
        formData.ip = data.ip
        sessionStorage.setItem('mydata', JSON.stringify(formData))
        const results = document.querySelector('.result pre');
        results.innerText = JSON.stringify(formData, null, 2);
    })

    setTimeout(function() {
        window.location.href = `/page2.html?ref=${ref}`
    }, 3000)


    
    
}

function myfunction() {

    const obj = JSON.parse(sessionStorage.getItem('mydata'))
    const results = document.querySelector('.results pre');
    results.textContent = JSON.stringify(obj, null, 2);
}
