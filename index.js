const inputEl = document.getElementById('search-bar')
const filterEl = document.getElementById("filter-btn")

filterEl.addEventListener("click", () => {
    console.log(inputEl.value)
})