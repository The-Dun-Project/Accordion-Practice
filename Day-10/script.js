const allAccordionItems = document.querySelectorAll(".accordion-item");

allAccordionItems.forEach((item) => {
    const accordionHeader = item.querySelector(".accordion-header");
    const accordionContent = item.querySelector(".accordion-content");

    accordionHeader.addEventListener("click", () => {
        const isActive = item.classList.contains("active");

        allAccordionItems.forEach((otherItem) => {
            otherItem.classList.remove("active");

            const otherContent = otherItem.querySelector(".accordion-content");

            otherContent.style.maxHeight = null;
        });

        if(!isActive){
            item.classList.add("active");
            accordionContent.style.maxHeight = item.scrollHeight + "px"
        }
    })
})