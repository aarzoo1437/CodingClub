export function renderQuiz(questions) {
  const host = document.querySelector("#quizContainer");
  host.innerHTML = questions.map((q, index) => `
    <section class="quiz-question" data-question="${index}">
      <h3>${index + 1}. ${escapeHtml(q.question)}</h3>
      ${q.options.map((option, optionIndex) => `
        <label class="quiz-option"><input type="radio" name="q${index}" value="${optionIndex}"><span>${escapeHtml(option)}</span></label>
      `).join("")}
      <p class="explanation hidden" id="explanation${index}"></p>
    </section>`).join("");
}
export function gradeQuiz(questions) {
  let score = 0;
  questions.forEach((q, index) => {
    const chosen = document.querySelector(`input[name="q${index}"]:checked`);
    const explanation = document.querySelector(`#explanation${index}`);
    if (chosen && Number(chosen.value) === q.answer) score++;
    explanation.textContent = `${chosen && Number(chosen.value) === q.answer ? "✓ Correct! " : "Not quite. "} ${q.explanation}`;
    explanation.classList.remove("hidden");
  });
  return score;
}
function escapeHtml(value) {
  return String(value).replace(/[&<>"']/g, char => ({ "&":"&amp;", "<":"&lt;", ">":"&gt;", '"':"&quot;", "'":"&#039;" }[char]));
}
