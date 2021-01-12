const inputElt = document.querySelector(".form__input")

        console.log(inputElt)

        const formElt = document.querySelector(".form")
        const ulElt = document.querySelector(".note")

        function addNote(event){

        event.preventDefault()
        const note = inputElt.value
        const liElt = document.createElement("li")
        liElt.textContent = note
        ulElt.appendChild(liElt)
        inputElt.value = ""

        }
        
        formElt.addEventListener("submit", addNote)