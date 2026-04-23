// STEP 1 - Pull all Accordion items
const accordionItems = document.querySelectorAll(".accordion-item");

// STEP 2 - we are answering the question, "What happens when we click the accordion header"
    // first we need to separate the accordio items. We do that by looping through each.
        // get the header in the item
        // now we can add a click event to it

accordionItems.forEach((item) => {
    const header = item.querySelector(".accordion-header");
    const content = item.querySelector(".accordion-content");

    header.addEventListener("click", () => {
        const isActive = item.classList.contains("active");

        accordionItems.forEach((otherItem) => {
            otherItem.classList.remove("active");

            const otherContent = otherItem.querySelector(".accordion-content");
            otherContent.style.maxHeight = null;

        });

        if(!isActive) {
            item.classList.add("active");
            content.style.maxHeight = content.scrollHeight + "px";
        }
    })
})

