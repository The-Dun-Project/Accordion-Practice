const allAccordionItems = document.querySelector(".accordion-item");

allAccordionItems.forEach((item) => {
    const header = item.querySelector(".accordion-header");
    const content = item.querySelector(".accordion-content");

    header.addEventListener("click", () => {
        const isActive = item.classList.contains("active");

        allAccordionItems.forEach((otherItem) => {
            otherItem.classList.remove("active");

            const otherContent = querySelector(".accordion-content");
            otherContent.style.maxHeight = null;
        })
    });
})