// all stars here
const one = document.getElementById("first")
const two = document.getElementById("second")
const three = document.getElementById("third")
const four = document.getElementById("fourth")
const five = document.getElementById("fifth")


const form = document.querySelector(".rate-form")
console.log(form);
const confirmBox = document.getElementById("confirm-box")

const csrf = document.getElementsByName("csrfmiddlewaretoken")

const handleChoose = (index) => {
    const children = form.children
    for (let i = 0; i < children.length; i++) {
        if (i <= index) {
            children[i].classList.add("checked")
        } else {
            children[i].classList.remove("checked")
        }
    }
}


const checkTrue = (selection) => {
    switch (selection) {
        case "first":
            {
                // one.classList.add("checked")
                // two.classList.remove("checked")
                // three.classList.remove("checked")
                // four.classList.remove("checked")
                // five.classList.remove("checked")
                handleChoose(1)
                return
            }
        case "second":
            {
                handleChoose(2)
                return
            }
        case "third":
            {
                handleChoose(3)
                return
            }
        case "fourth":
            {
                handleChoose(4)
                return
            }
        case "fifth":
            {
                handleChoose(5)
                return
            }
    }
}


const getNumericValue = (stringValue) => {
    let numericValue;
    if (stringValue === "first") {
        numericValue = 1
    }
    else if (stringValue === "second") {
        numericValue = 2
    }
    else if (stringValue === "third") {
        numericValue = 3
    }
    else if (stringValue === 'fourth') {
        numericValue = 4
    }
    else if (stringValue === 'fifth') {
        numericValue = 5
    }
    else {
        numericValue = 0
    }
    return numericValue
}


if (one) {
    const items = [one, two, three, four, five]

    items.forEach(item => item.addEventListener("mouseover", (event) => {
        checkTrue(event.target.id)
    }))

    items.forEach(item => item.addEventListener("click", (event) => {
        const val = event.target.id

        let isSubmit = false
        form.addEventListener("submit", e => {
            e.preventDefault()
            if (isSubmit) {
                return
            }
            isSubmit = true
            const id = e.target.id
            console.log(id)
            const val_num = getNumericValue(val)


            $.ajax({
                type: "POST",
                url: "/rate-image/",
                data: {
                    "csrfmiddlewaretoken": csrf[0].value,
                    "el_id": id,
                    "val": val_num,
                },
                success: function (response) {
                    console.log(response)
                    confirmBox.innerHTML = `<h1>Succesfully rated with ${response.score}</h1>`
                },
                error: function (error) {
                    console.log(error)
                    confirmBox.innerHTML = `<h1>Ooops, something went wrong!</h1>`
                },
            })
        })
    }))
}




const bir = document.getElementById("bir")
const ikki = document.getElementById("ikki")
const uch = document.getElementById("uch")
const tort = document.getElementById("tort")
const besh = document.getElementById("besh")
const avg = document.getElementById("avg")


if (avg.innerHTML == 1.0) {
    bir.classList.add("checked")
}
if (avg.innerHTML == 1.5) {
    bir.classList.add("checked")
    ikki.classList.add("fa-solid")
    ikki.classList.add("fa-star-half-stroke")
    ikki.classList.add("checked")
}
if (avg.innerHTML == 1.25) {
    bir.classList.add("checked")
    ikki.classList.add("fa-solid")
    ikki.classList.add("fa-star-half-stroke")
    ikki.classList.add("checked")
}
if (avg.innerHTML == 1.75) {
    bir.classList.add("checked")
    ikki.classList.add("fa-solid")
    ikki.classList.add("fa-star-half-stroke")
    ikki.classList.add("checked")
}
if (avg.innerHTML == 2.0) {
    bir.classList.add("checked")
    ikki.classList.add("checked")
}
if (avg.innerHTML == 2.5) {
    bir.classList.add("checked")
    ikki.classList.add("checked")
    uch.classList.add("fa-solid")
    uch.classList.add("fa-star-half-stroke")
    uch.classList.add("checked")
}
if (avg.innerHTML == 2.25) {
    bir.classList.add("checked")
    ikki.classList.add("checked")
    uch.classList.add("fa-solid")
    uch.classList.add("fa-star-half-stroke")
    uch.classList.add("checked")
}
if (avg.innerHTML == 2.75) {
    bir.classList.add("checked")
    ikki.classList.add("checked")
    uch.classList.add("fa-solid")
    uch.classList.add("fa-star-half-stroke")
    uch.classList.add("checked")
}
if (avg.innerHTML == 3.0) {
    bir.classList.add("checked")
    ikki.classList.add("checked")
    uch.classList.add("checked")
}
if (avg.innerHTML == 3.5) {
    bir.classList.add("checked")
    ikki.classList.add("checked")
    uch.classList.add("checked")
    tort.classList.add("fa-solid")
    tort.classList.add("fa-star-half-stroke")
    tort.classList.add("checked")
}
if (avg.innerHTML == 3.25) {
    bir.classList.add("checked")
    ikki.classList.add("checked")
    uch.classList.add("checked")
    tort.classList.add("fa-solid")
    tort.classList.add("fa-star-half-stroke")
    tort.classList.add("checked")
}
if (avg.innerHTML == 3.75) {
    bir.classList.add("checked")
    ikki.classList.add("checked")
    uch.classList.add("checked")
    tort.classList.add("fa-solid")
    tort.classList.add("fa-star-half-stroke")
    tort.classList.add("checked")
}
if (avg.innerHTML == 4.0) {
    bir.classList.add("checked")
    ikki.classList.add("checked")
    uch.classList.add("checked")
    tort.classList.add("checked")
}
if (avg.innerHTML == 4.5) {
    bir.classList.add("checked")
    ikki.classList.add("checked")
    uch.classList.add("checked")
    tort.classList.add("checked")
    besh.classList.add("fa-solid")
    besh.classList.add("fa-star-half-stroke")
    besh.classList.add("checked")
}
if (avg.innerHTML == 4.25) {
    bir.classList.add("checked")
    ikki.classList.add("checked")
    uch.classList.add("checked")
    tort.classList.add("checked")
    besh.classList.add("fa-solid")
    besh.classList.add("fa-star-half-stroke")
    besh.classList.add("checked")
}
if (avg.innerHTML == 4.75) {
    bir.classList.add("checked")
    ikki.classList.add("checked")
    uch.classList.add("checked")
    tort.classList.add("checked")
    besh.classList.add("fa-solid")
    besh.classList.add("fa-star-half-stroke")
    besh.classList.add("checked")
}
if (avg.innerHTML == 5.0) {
    bir.classList.add("checked")
    ikki.classList.add("checked")
    uch.classList.add("checked")
    tort.classList.add("checked")
    besh.classList.add("checked")
}
if (avg.innerHTML > '1.0' & avg.innerHTML < '1.5') {
    bir.classList.add("checked")
    ikki.classList.add("fa-solid")
    ikki.classList.add("fa-star-half-stroke")
    ikki.classList.add("checked")
}
if (avg.innerHTML > '1.5' & avg.innerHTML < '2.0') {
    bir.classList.add("checked")
    ikki.classList.add("fa-solid")
    ikki.classList.add("fa-star-half-stroke")
    ikki.classList.add("checked")
}
if (avg.innerHTML > '2.0' & avg.innerHTML < '2.5') {
    bir.classList.add("checked")
    ikki.classList.add("checked")
    uch.classList.add("fa-solid")
    uch.classList.add("fa-star-half-stroke")
    uch.classList.add("checked")
}
if (avg.innerHTML > '2.5' & avg.innerHTML < '3.0') {
    bir.classList.add("checked")
    ikki.classList.add("checked")
    uch.classList.add("fa-solid")
    uch.classList.add("fa-star-half-stroke")
    uch.classList.add("checked")
}
if (avg.innerHTML > '3.0' & avg.innerHTML < '3.5') {
    bir.classList.add("checked")
    ikki.classList.add("checked")
    uch.classList.add("checked")
    tort.classList.add("fa-solid")
    tort.classList.add("fa-star-half-stroke")
    tort.classList.add("checked")
}
if (avg.innerHTML > '3.5' & avg.innerHTML < '4.0') {
    bir.classList.add("checked")
    ikki.classList.add("checked")
    uch.classList.add("checked")
    tort.classList.add("fa-solid")
    tort.classList.add("fa-star-half-stroke")
    tort.classList.add("checked")
}
if (avg.innerHTML > '4.0' & avg.innerHTML < '4.5') {
    bir.classList.add("checked")
    ikki.classList.add("checked")
    uch.classList.add("checked")
    tort.classList.add("checked")
    besh.classList.add("fa-solid")
    besh.classList.add("fa-star-half-stroke")
    besh.classList.add("checked")
}
if (avg.innerHTML > '4.5' & avg.innerHTML < '5.0') {
    bir.classList.add("checked")
    ikki.classList.add("checked")
    uch.classList.add("checked")
    tort.classList.add("checked")
    besh.classList.add("fa-solid")
    besh.classList.add("fa-star-half-stroke")
    besh.classList.add("checked")
}

