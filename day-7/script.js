// Pull all accordion items
// everything happens after we click on the header
//pull the headers from each item
// see about the click
//set the active class

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
        });

        if(!isActive) {
            item.classList.add("active");
            content.style.maxHeight = content.scrollHeight + "px";
        }

    });
});