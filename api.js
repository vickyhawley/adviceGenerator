const request = new XMLHttpRequest();

request.open('GET', 'https://api.adviceslip.com/advice', true)

request.onload = function () {
    const data = JSON.parse(this.response)

    console.log(data.slip.advice)

    const advice = data.slip.advice
    const idNumber = data.slip.id

    let title = document.getElementById('advice')
    title.append(advice)

    let number = document.getElementById('numberstyle')
    number.append(idNumber)
}

request.send()



