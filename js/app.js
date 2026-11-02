import { dailyContent as defaultContent } from "./questions.js";
import { applyTheme } from "./themes.js";
import { renderQuiz, gradeQuiz } from "./quiz.js";

const $ = selector => document.querySelector(selector);
let selectedMood = "";
let selectedRating = "";
let selectedTopic = "";
let quizScore = null;
const contentKey = "littleClubAdminContent";
const params = new URLSearchParams(window.location.hash.slice(1));
const shared = params.get("challenge");
const settings = shared ? decodeContent(shared) : JSON.parse(localStorage.getItem(contentKey) || "null");
const dailyContent = { ...defaultContent, ...(settings || {}), exercise: { ...defaultContent.exercise, ...(settings?.exercise || {}) }, question: { ...defaultContent.question, ...(settings?.question || {}) } };
const submissionKey = "littleClubResponses";

function showScreen(screenId) {
  document.querySelectorAll(".screen").forEach(screen => screen.classList.remove("active"));
  $(`#${screenId}`).classList.add("active");
  window.scrollTo({ top: 0, behavior: "smooth" });
}
function setupCheckin() {
  $("#welcomePrompt").textContent = dailyContent.welcomePrompt;
  $("#introTitle").textContent = dailyContent.introTitle || "Hey, how are you?";
  $("#introCopy").textContent = dailyContent.introCopy || "First, a little check-in. No right answers here — just you being you.";
  $("#exerciseTitle").textContent = dailyContent.exercise.title;
  $("#exerciseDescription").textContent = dailyContent.exercise.description;
  document.querySelectorAll(".mood-choice").forEach(button => {
    button.addEventListener("click", () => {
      document.querySelectorAll(".mood-choice").forEach(item => item.classList.remove("selected"));
      button.classList.add("selected");
      selectedMood = button.dataset.mood;
    });
  });
  $("#continueBtn").addEventListener("click", () => {
    if (!selectedMood) {
      $("#checkinMessage").textContent = "Choose the mood that feels closest today 💛";
      return;
    }
    // This stays on this device only. No database or server is used.
    localStorage.setItem("littleClubCheckin", JSON.stringify({
      mood: selectedMood, breakfast: $("#breakfastInput").value, date: new Date().toDateString()
    }));
    showScreen("challengeScreen");
  });
}
function setupChallenge() {
  const q = dailyContent.question;
  $("#questionTitle").textContent = q.title;
  $("#difficultyTag").textContent = q.difficulty;
  $("#topicLabel").textContent = q.topic;
  $("#questionDescription").textContent = q.description;
  $("#questionExample").textContent = q.example;
  $("#leetcodeLink").href = q.url;
  renderQuiz(dailyContent.mcqs);
  $("#submitQuizBtn").addEventListener("click", () => {
    quizScore = gradeQuiz(dailyContent.mcqs);
    $("#quizResult").textContent = `You got ${quizScore} out of ${dailyContent.mcqs.length} correct! ${quizScore === dailyContent.mcqs.length ? "Perfect score! 🌟" : "Every attempt makes you stronger 💪"}`;
  });
  $("#toFeedbackBtn").addEventListener("click", () => showScreen("feedbackScreen"));
}
function setupFeedback() {
  document.querySelectorAll(".rating-choice").forEach(button => button.addEventListener("click", () => {
    document.querySelectorAll(".rating-choice").forEach(item => item.classList.remove("selected"));
    button.classList.add("selected");
    selectedRating = button.dataset.rating;
  }));
  $("#topicGrid").innerHTML = dailyContent.tomorrowTopics.map(topic =>
    `<button class="topic-choice" data-topic="${escapeHtml(topic)}">${topic === "Arrays" ? "🧩" : topic === "Strings" ? "🔤" : topic === "Trees" ? "🌳" : topic === "Graphs" ? "🕸️" : topic === "Dynamic Programming" ? "🧠" : "🎁"} ${escapeHtml(topic)}</button>`
  ).join("");
  document.querySelectorAll(".topic-choice").forEach(button => button.addEventListener("click", () => {
    document.querySelectorAll(".topic-choice").forEach(item => item.classList.remove("selected"));
    button.classList.add("selected");
    selectedTopic = button.dataset.topic;
  }));
  $("#sendFeedbackBtn").addEventListener("click", () => {
    if (!selectedRating || !selectedTopic) {
      $("#feedbackMessage").textContent = "Choose a rating and tomorrow's topic first 💗";
      return;
    }
    const feedback = {
      rating: selectedRating, comment: $("#feedbackText").value, tomorrowTopic: selectedTopic,
      quizScore, mood: selectedMood, breakfast: $("#breakfastInput").value, answer: $("#answerInput").value,
      answers: dailyContent.mcqs.map((q, i) => ({ question: q.question, answer: document.querySelector(`input[name="q${i}"]:checked`)?.closest("label")?.innerText.trim() || "Not answered" })),
      date: new Date().toISOString()
    };
    const text = `Little Coding Club response\nDate: ${new Date(feedback.date).toLocaleString()}\nMood: ${feedback.mood}\nBreakfast: ${feedback.breakfast || "Not entered"}\nChallenge answer/approach: ${feedback.answer || "Not entered"}\nRating: ${feedback.rating}/3\nTomorrow's topic: ${feedback.tomorrowTopic}\nQuiz score: ${feedback.quizScore ?? "Not submitted"}\nAnswers:\n${feedback.answers.map((a, i) => `${i + 1}. ${a.question}\n   ${a.answer}`).join("\n")}\nComment: ${feedback.comment || "No comment"}`;
    localStorage.setItem("littleClubLastFeedback", JSON.stringify(feedback));
    const responses = JSON.parse(localStorage.getItem(submissionKey) || "[]");
    responses.push(feedback); localStorage.setItem(submissionKey, JSON.stringify(responses));
    const email = "gargaarzoo24@gmail.com";
    window.location.href = `mailto:${encodeURIComponent(email)}?subject=${encodeURIComponent("Little Coding Club response")}&body=${encodeURIComponent(text)}`;
    $("#feedbackMessage").textContent = `Your response is ready to email ${email}. Tap Send to deliver it 💌`;
  });
}
async function copyFeedback(text) {
  try { await navigator.clipboard.writeText(text); }
  catch { window.prompt("Copy your feedback and send it to your challenge buddy:", text); }
}

applyTheme(dailyContent.theme);
setupCheckin();
setupChallenge();
setupFeedback();

function setupAdmin() {
  const panel = $("#adminPanel");
  if (shared) $("#adminToggle").hidden = true;
  const fields = {
    adminTheme: dailyContent.theme, adminIntroTitle: dailyContent.introTitle || "Hey, how are you?",
    adminIntroCopy: dailyContent.introCopy || "First, a little check-in. No right answers here — just you being you.",
    adminPrompt: dailyContent.welcomePrompt, adminExerciseTitle: dailyContent.exercise.title,
    adminExerciseDescription: dailyContent.exercise.description, adminTitle: dailyContent.question.title,
    adminDifficulty: dailyContent.question.difficulty, adminTopic: dailyContent.question.topic,
    adminDescription: dailyContent.question.description, adminExample: dailyContent.question.example,
    adminUrl: dailyContent.question.url, adminTopics: dailyContent.tomorrowTopics.join("\n")
  };
  Object.entries(fields).forEach(([id, value]) => { $(`#${id}`).value = value ?? ""; });
  let editorMcqs = structuredClone(dailyContent.mcqs);
  const drawMcqs = () => {
    $("#adminMcqs").innerHTML = editorMcqs.map((mcq, index) => `<section class="quiz-question admin-mcq" data-index="${index}"><div class="section-heading"><b>MCQ ${index + 1}</b><button type="button" class="admin-toggle remove-mcq" data-index="${index}">Remove</button></div><label class="field-label">Question</label><textarea class="text-input textarea mcq-question">${escapeHtml(mcq.question)}</textarea><label class="field-label">Answer choices (one per line)</label><textarea class="text-input textarea mcq-options">${escapeHtml(mcq.options.join("\n"))}</textarea><label class="field-label">Correct choice number (starting at 1)</label><input type="number" min="1" class="text-input mcq-answer" value="${Number(mcq.answer) + 1}"><label class="field-label">Explanation</label><textarea class="text-input textarea mcq-explanation">${escapeHtml(mcq.explanation || "")}</textarea></section>`).join("");
  };
  drawMcqs();
  const captureMcqs = () => {
    const cards = [...document.querySelectorAll(".admin-mcq")];
    if (!cards.length) return;
    editorMcqs = cards.map(card => ({
      question: card.querySelector(".mcq-question").value,
      options: card.querySelector(".mcq-options").value.split("\n"),
      answer: Math.max(0, Number(card.querySelector(".mcq-answer").value || 1) - 1),
      explanation: card.querySelector(".mcq-explanation").value
    }));
  };
  const redrawAfterEdit = (operation) => { captureMcqs(); operation(); drawMcqs(); };
  const attachRemoveHandlers = () => document.querySelectorAll(".remove-mcq").forEach(button => button.addEventListener("click", () => {
    const index = Number(button.dataset.index);
    redrawAfterEdit(() => editorMcqs.splice(index, 1));
    attachRemoveHandlers();
  }));
  attachRemoveHandlers();
  const renderResponses = () => {
    const items = JSON.parse(localStorage.getItem(submissionKey) || "[]");
    $("#adminResponses").innerHTML = items.length ? items.slice().reverse().map(item => `<div class="response-item"><strong>${new Date(item.date).toLocaleString()} · ${escapeHtml(item.tomorrowTopic)} · ${escapeHtml(item.rating)}/3</strong><p><b>Challenge answer:</b> ${escapeHtml(item.answer || "Not entered")}</p><p><b>Feedback:</b> ${escapeHtml(item.comment || "No written feedback")}</p><p><b>Quiz:</b> ${escapeHtml(item.quizScore ?? "Not submitted")}/${dailyContent.mcqs.length}</p><p>${(item.answers || []).map((a, i) => `${i + 1}. ${escapeHtml(a.answer)}`).join("<br>")}</p><small>Mood: ${escapeHtml(item.mood)} · Breakfast: ${escapeHtml(item.breakfast || "Not entered")}</small></div>`).join("") : "<p class='muted-copy'>No responses saved in this browser yet.</p>";
  };
  $("#adminToggle").addEventListener("click", () => { panel.hidden = false; renderResponses(); panel.scrollIntoView({ behavior: "smooth" }); });
  $("#adminClose").addEventListener("click", () => { panel.hidden = true; });
  $("#addMcq").addEventListener("click", () => { redrawAfterEdit(() => editorMcqs.push({ question: "", options: ["", ""], answer: 0, explanation: "" })); attachRemoveHandlers(); });
  $("#adminSave").addEventListener("click", () => {
    editorMcqs = [...document.querySelectorAll(".admin-mcq")].map(card => ({
      question: card.querySelector(".mcq-question").value.trim(),
      options: card.querySelector(".mcq-options").value.split("\n").map(x => x.trim()).filter(Boolean),
      answer: Math.max(0, Number(card.querySelector(".mcq-answer").value || 1) - 1),
      explanation: card.querySelector(".mcq-explanation").value.trim()
    }));
    const next = {
      theme: $("#adminTheme").value, introTitle: $("#adminIntroTitle").value.trim(),
      introCopy: $("#adminIntroCopy").value.trim(), welcomePrompt: $("#adminPrompt").value.trim(),
      exercise: { title: $("#adminExerciseTitle").value.trim(), description: $("#adminExerciseDescription").value.trim() },
      question: { title: $("#adminTitle").value.trim(), difficulty: $("#adminDifficulty").value.trim(), topic: $("#adminTopic").value.trim(), description: $("#adminDescription").value.trim(), example: $("#adminExample").value.trim(), url: $("#adminUrl").value.trim() },
      mcqs: editorMcqs, tomorrowTopics: $("#adminTopics").value.split("\n").map(x => x.trim()).filter(Boolean)
    };
    if (!next.question.title || !next.question.description || !next.mcqs.length || next.mcqs.some(q => !q.question || q.options.length < 2 || q.answer >= q.options.length) || !next.tomorrowTopics.length) {
      $("#adminMessage").textContent = "Add a question, at least one valid MCQ with two choices, and a next-topic choice."; return;
    }
    localStorage.setItem(contentKey, JSON.stringify(next));
    const encoded = encodeContent(next);
    const shareUrl = `${window.location.href.split("#")[0]}#challenge=${encoded}`;
    $("#shareLink").value = shareUrl;
    $("#shareLinkBox").hidden = false;
    $("#adminMessage").textContent = "Challenge link created. Copy and send it to your friend.";
    $("#copyShareLink").onclick = async () => { try { await navigator.clipboard.writeText(shareUrl); $("#adminMessage").textContent = "Link copied. Send it to your friend ✨"; } catch { $("#shareLink").select(); document.execCommand("copy"); } };
  });
}
function escapeHtml(value) { return String(value ?? "").replace(/[&<>"']/g, c => ({ "&":"&amp;", "<":"&lt;", ">":"&gt;", '"':"&quot;", "'":"&#039;" }[c])); }
function encodeContent(content) { return btoa(unescape(encodeURIComponent(JSON.stringify(content)))).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, ""); }
function decodeContent(content) { try { const base64 = content.replace(/-/g, "+").replace(/_/g, "/"); return JSON.parse(decodeURIComponent(escape(atob(base64.padEnd(Math.ceil(base64.length / 4) * 4, "="))))); } catch { return null; } }
setupAdmin();
