document.addEventListener('DOMContentLoaded', () => {
    const contentDiv = document.getElementById('content');
    const zastapBtn = document.getElementById('zastap');
    const doklejBtn = document.getElementById('doklej');
    const pokazBtn = document.getElementById('pokaz');
    const resetBtn = document.getElementById('reset');
    const showNameBtn = document.getElementById('show-name');
    const nameSpan = document.getElementById('name');

    const jsonData = [
        "Treść pierwsza",
        "Treść druga",
        "Treść trzecia",
        "Treść czwarta",
        "Treść piąta",
        "Treść szósta"
    ];

    let usedContent = [];

    const getRandomContent = () => {
        let availableContent = jsonData.filter(item => !usedContent.includes(item));
        if (availableContent.length === 0) {
            alert("Brak dostępnych nowych treści.");
            return null;
        }
        let randomIndex = Math.floor(Math.random() * availableContent.length);
        return availableContent[randomIndex];
    };

    const replaceContent = () => {
        let selectedOption = document.querySelector('input[name="option"]:checked');
        if (!selectedOption) return;

        let newContent;
        if (selectedOption.value === "1") {
            newContent = jsonData[0];
        } else if (selectedOption.value === "2") {
            newContent = jsonData[1];
        } else if (selectedOption.value === "random") {
            newContent = getRandomContent();
        }

        if (newContent) {
            usedContent = [newContent];
            contentDiv.innerHTML = `<p>${newContent}</p>`;
        }
    };

    const appendContent = () => {
        let selectedOption = document.querySelector('input[name="option"]:checked');
        if (!selectedOption) return;

        let newContent;
        if (selectedOption.value === "1") {
            newContent = jsonData[0];
        } else if (selectedOption.value === "2") {
            newContent = jsonData[1];
        } else if (selectedOption.value === "random") {
            newContent = getRandomContent();
        }

        if (newContent && !usedContent.includes(newContent)) {
            usedContent.push(newContent);
            let newParagraph = document.createElement('p');
            newParagraph.textContent = newContent;
            contentDiv.appendChild(newParagraph);
        }
    };

    const toggleFooterOptions = () => {
        let footerOptions = document.getElementById('footer-options');
        footerOptions.style.display = footerOptions.style.display === 'block' ? 'none' : 'block';
    };

    const resetPage = () => {
        contentDiv.innerHTML = '';
        usedContent = [];
        nameSpan.textContent = '';
    };

    const showName = () => {
        nameSpan.textContent = ' Daniel Zieliński';
    };

    zastapBtn.addEventListener('click', replaceContent);
    doklejBtn.addEventListener('click', appendContent);
    pokazBtn.addEventListener('click', toggleFooterOptions);
    resetBtn.addEventListener('click', resetPage);
    showNameBtn.addEventListener('click', showName);
});