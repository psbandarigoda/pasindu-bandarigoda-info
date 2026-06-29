const articleBody = document.querySelector(".article-body");
const tocNav = document.querySelector("#article-toc");
const readingTimeEl = document.querySelector("#reading-time");

const slugify = (value) =>
    value
        .toLowerCase()
        .trim()
        .replace(/[^\w\s-]/g, "")
        .replace(/\s+/g, "-");

const setReadingTime = () => {
    if (!articleBody || !readingTimeEl) {
        return;
    }

    const words = articleBody.textContent.trim().split(/\s+/).length;
    const minutes = Math.max(1, Math.ceil(words / 220));
    readingTimeEl.textContent = minutes + " min read";
};

const buildToc = () => {
    if (!articleBody || !tocNav) {
        return;
    }

    const headings = [...articleBody.querySelectorAll("h2, h3")];
    if (!headings.length) {
        tocNav.closest(".article-toc-wrap")?.setAttribute("hidden", "");
        return;
    }

    const list = document.createElement("ol");
    list.className = "article-toc-list";

    headings.forEach((heading, index) => {
        if (!heading.id) {
            heading.id = slugify(heading.textContent) || "section-" + (index + 1);
        }

        const item = document.createElement("li");
        if (heading.tagName === "H3") {
            item.className = "article-toc-sub";
        }

        const link = document.createElement("a");
        link.href = "#" + heading.id;
        link.textContent = heading.textContent;
        item.appendChild(link);
        list.appendChild(item);
    });

    tocNav.appendChild(list);
};

setReadingTime();
buildToc();
