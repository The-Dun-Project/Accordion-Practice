// pull all accordion items
// loop throgh them to get the header and content
// click the header to activate fanction
    // check if others have active
    // remove them
    // loop to get the header again "i think"

const allAccordionItems = document.querySelectorAll(".accordion-item");

allAccordionItems.forEach((item) => {

    const header = item.querySelector(".accordion-header");
    const content = item.querySelector(".accordion-content");

    header.addEventListener("click", () => {
        const isActive = item.classList.contains("active");

        allAccordionItems.forEach((otherItem) => {
            otherItem.classList.remove("active");

            const otherContent = otherItem.querySelector(".accordion-content");
            otherContent.style.maxHeight = null;
        });

        if(!isActive){
            item.classList.add("active");
            content.style.maxHeight = content.scrollHeight + "px";
        }

    })




})