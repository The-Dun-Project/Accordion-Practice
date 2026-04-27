// pull all items
// loop to get the children
// add a click event on header child
    // check if any item has a active class.
    // loop for another funtion to remove all active.

const accordionItems = document.querySelectorAll(".accordion-item");

accordionItems.forEach((item) => {
    const header = item.querySelector(".accordion-header");
    const content = item.querySelector(".accordion-content");

    header.addEventListener("click", () => {
        const isActive = item.classList.contains("active");

        accordionItems.forEach((otherItem) => {
            otherItem.classList.remove("active");

            const otherContent = otherItem.querySelector(".accordion-content");

            otherContent.style.maxHeight = null;
        })

        if(!isActive) {
            item.classList.add("active");
            content.style.maxHeight = content.scrollHeight + "px";
        }
        
    })
})