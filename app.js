const state = {
  categoryIndex: 0,
  openCards: new Set(),
  search: "",
  selectedYears: new Set(),
};

const categories = window.COMP310_DATA || [];
const filterYears = ["2015/16", "2016/17", "2017/18", "2018/19"];

const categoryList = document.querySelector("#categoryList");
const cards = document.querySelector("#cards");
const categoryTitle = document.querySelector("#categoryTitle");
const frequencyLabel = document.querySelector("#frequencyLabel");
const searchInput = document.querySelector("#searchInput");
const yearFilter = document.querySelector("#yearFilter");
const clearYearFilterButton = document.querySelector("#clearYearFilterButton");
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

function matchingYears(item) {
  const itemYears = item.years || [];
  if (!state.selectedYears.size) return itemYears;
  return itemYears.filter((year) => state.selectedYears.has(year));
}

function selectedYearCount(item) {
  return matchingYears(item).length;
}

function matchesYear(item) {
  return !state.selectedYears.size || selectedYearCount(item) > 0;
}

function matchesFilters(item) {
  return matchesSearch(item) && matchesYear(item);
}

function countAppearances(items) {
  return items.reduce((sum, item) => sum + (state.selectedYears.size ? selectedYearCount(item) : item.count || 0), 0);
}

function countBadgeText(item) {
  if (!state.selectedYears.size) return `考过 ${item.count || 0} 次`;
  return `选中 ${selectedYearCount(item)} 次 / 总 ${item.count || 0}`;
}

function yearSummary(item) {
  const years = item.years || [];
  if (!state.selectedYears.size) return years.join(", ");
  return `匹配: ${matchingYears(item).join(", ")} · 全部: ${years.join(", ")}`;
}

function renderYearFilter() {
  yearFilter.innerHTML = filterYears
    .map((year) => {
      const checked = state.selectedYears.has(year) ? " checked" : "";
      return `
        <label class="year-chip">
          <input type="checkbox" value="${year}"${checked}>
          <span>${year}</span>
        </label>
      `;
    })
    .join("");
  clearYearFilterButton.disabled = state.selectedYears.size === 0;
}

function renderCategories() {
  categoryList.innerHTML = categories
    .map((category, index) => {
      const active = index === state.categoryIndex ? " active" : "";
      const yearFilteredItems = category.items.filter(matchesYear);
      const totalAppearances = countAppearances(yearFilteredItems);
      return `
        <button class="category-button${active}" type="button" data-category="${index}">
          <strong>${category.title}</strong>
          <span><em>${category.frequency}</em><em>${yearFilteredItems.length} 题 / ${totalAppearances} 次</em></span>
        </button>
      `;
    })
    .join("");
}

function renderCards() {
  const category = categories[state.categoryIndex];
  const visibleItems = category.items.filter(matchesFilters);
  const yearFilteredItems = category.items.filter(matchesYear);
  const totalAppearances = countAppearances(yearFilteredItems);
  const yearLabel = state.selectedYears.size ? ` · 年份 ${Array.from(state.selectedYears).join(", ")}` : "";

  categoryTitle.textContent = category.title;
  frequencyLabel.textContent = `${category.frequency} · 累计 ${totalAppearances} 次${yearLabel}`;
  topicCount.textContent = yearFilteredItems.length;
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
              <h3>
                <span>${item.title}</span>
                <span class="count-badge" title="${item.years ? item.years.join(", ") : ""}">${countBadgeText(item)}</span>
              </h3>
              <p>${category.title}${item.years ? ` · ${yearSummary(item)}` : ""}</p>
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
  renderYearFilter();
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
  renderCategories();
  renderCards();
});

yearFilter.addEventListener("change", (event) => {
  const checkbox = event.target.closest("input[type='checkbox']");
  if (!checkbox) return;
  if (checkbox.checked) {
    state.selectedYears.add(checkbox.value);
  } else {
    state.selectedYears.delete(checkbox.value);
  }
  state.openCards.clear();
  render();
});

clearYearFilterButton.addEventListener("click", () => {
  state.selectedYears.clear();
  state.openCards.clear();
  render();
});

showAllButton.addEventListener("click", () => {
  categories[state.categoryIndex].items.filter(matchesFilters).forEach((item) => state.openCards.add(item.id));
  renderCards();
});

hideAllButton.addEventListener("click", () => {
  categories[state.categoryIndex].items.forEach((item) => state.openCards.delete(item.id));
  renderCards();
});

render();
