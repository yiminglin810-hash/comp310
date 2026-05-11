const state = {
  categoryIndex: 0,
  openCards: new Set(),
  search: "",
};

const categories = window.COMP310_DATA || [];

const categoryList = document.querySelector("#categoryList");
const cards = document.querySelector("#cards");
const categoryTitle = document.querySelector("#categoryTitle");
const frequencyLabel = document.querySelector("#frequencyLabel");
const searchInput = document.querySelector("#searchInput");
const showAllButton = document.querySelector("#showAllButton");
const hideAllButton = document.querySelector("#hideAllButton");
const topicCount = document.querySelector("#topicCount");
const visibleCount = document.querySelector("#visibleCount");
const answerCount = document.querySelector("#answerCount");

function normalise(value) {
  return value.toLowerCase().trim();
}

function matchesSearch(item) {
  if (!state.search) return true;
  const haystack = [
    item.title,
    item.englishQuestion,
    item.chineseQuestion,
    item.englishAnswer,
    item.chineseAnswer,
  ].join(" ").toLowerCase();
  return haystack.includes(state.search);
}

function renderCategories() {
  categoryList.innerHTML = categories
    .map((category, index) => {
      const active = index === state.categoryIndex ? " active" : "";
      return `
        <button class="category-button${active}" type="button" data-category="${index}">
          <strong>${category.title}</strong>
          <span><em>${category.frequency}</em><em>${category.items.length} 题</em></span>
        </button>
      `;
    })
    .join("");
}

function renderCards() {
  const category = categories[state.categoryIndex];
  const visibleItems = category.items.filter(matchesSearch);

  categoryTitle.textContent = category.title;
  frequencyLabel.textContent = category.frequency;
  topicCount.textContent = category.items.length;
  visibleCount.textContent = visibleItems.length;
  answerCount.textContent = visibleItems.filter((item) => state.openCards.has(item.id)).length;

  if (!visibleItems.length) {
    cards.innerHTML = `<div class="empty">这个分类里没有匹配的题目。</div>`;
    return;
  }

  cards.innerHTML = visibleItems
    .map((item) => {
      const isOpen = state.openCards.has(item.id);
      return `
        <article class="question-card${isOpen ? " open" : ""}" data-id="${item.id}">
          <div class="card-header">
            <div class="card-title">
              <h3>${item.title}</h3>
              <p>${category.title}</p>
            </div>
            <button class="answer-toggle" type="button" aria-expanded="${isOpen}">
              ${isOpen ? "隐藏答案" : "显示答案"}
            </button>
          </div>
          <div class="card-body">
            <div class="qa-line">
              <span class="label">English question</span>
              <p class="text">${item.englishQuestion}</p>
            </div>
            <div class="qa-line">
              <span class="label">中文问题</span>
              <p class="text">${item.chineseQuestion}</p>
            </div>
            <div class="answer-wrap">
              <div class="qa-line answer">
                <span class="label">English answer</span>
                <p class="text">${item.englishAnswer}</p>
              </div>
              <div class="qa-line answer">
                <span class="label">中文答案</span>
                <p class="text">${item.chineseAnswer}</p>
              </div>
            </div>
          </div>
        </article>
      `;
    })
    .join("");
}

function render() {
  renderCategories();
  renderCards();
}

categoryList.addEventListener("click", (event) => {
  const button = event.target.closest("[data-category]");
  if (!button) return;
  state.categoryIndex = Number(button.dataset.category);
  state.openCards.clear();
  render();
});

cards.addEventListener("click", (event) => {
  const button = event.target.closest(".answer-toggle");
  if (!button) return;
  const card = button.closest(".question-card");
  const id = card.dataset.id;
  if (state.openCards.has(id)) {
    state.openCards.delete(id);
  } else {
    state.openCards.add(id);
  }
  renderCards();
});

searchInput.addEventListener("input", (event) => {
  state.search = normalise(event.target.value);
  renderCards();
});

showAllButton.addEventListener("click", () => {
  categories[state.categoryIndex].items.filter(matchesSearch).forEach((item) => state.openCards.add(item.id));
  renderCards();
});

hideAllButton.addEventListener("click", () => {
  categories[state.categoryIndex].items.forEach((item) => state.openCards.delete(item.id));
  renderCards();
});

render();
