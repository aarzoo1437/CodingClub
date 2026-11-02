// Each theme pairs a palette with an original mini illustration and a playful line.
const themeViews = {
  web: {
    art: `<svg viewBox="0 0 260 180" role="img" aria-label="Spider-Man swinging in on a web"><path d="M9 21 69 42M0 61l47 5M16 105l45-12M227 30l25-17M226 76l29-5M217 125l31 16" stroke="#fa4558" stroke-width="3" stroke-linecap="round" opacity=".6"/><path class="web-net" d="M178 9 248 51M216 0v58m-22-53 22 53 22-53M178 24q38 21 70 0m-57-13q29 16 45 0" fill="none" stroke="#9bdcf4" stroke-width="1.5"/><path class="swing-web" d="M163 3Q174 29 154 60" fill="none" stroke="#fff" stroke-width="3" stroke-dasharray="150" stroke-dashoffset="150"/><g class="hero-spidey" stroke="#14283d" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"><path d="M108 82 76 62 56 69" fill="none" stroke="#1254a4" stroke-width="13"/><path d="m56 69-14-12" fill="none" stroke="#db3145" stroke-width="11"/><path d="M126 78 148 61 162 59" fill="none" stroke="#1254a4" stroke-width="13"/><path d="m148 61 14-2" fill="none" stroke="#d92b42" stroke-width="10"/><path d="M105 107 85 129 69 145" fill="none" stroke="#1254a4" stroke-width="15"/><path d="m69 145-13 7" fill="none" stroke="#d92b42" stroke-width="12"/><path d="m125 105 29 14 18 22" fill="none" stroke="#1254a4" stroke-width="15"/><path d="m172 141 13 5" fill="none" stroke="#d92b42" stroke-width="11"/><path d="m95 77 35-8 20 30-37 23-25-20z" fill="#dc3045"/><path d="m99 84 16 8m-9-17 16 10m-2 28 19-22m-34 32 25-28" fill="none" stroke="#ff7a78" stroke-width="2"/><ellipse cx="111" cy="56" rx="25" ry="22" fill="#df3046" transform="rotate(-16 111 56)"/><path d="m93 50 15-5-4 13zM117 44l15 1-11 11z" fill="#fff" stroke="#182d43" stroke-width="3"/><path d="M93 56q18-25 38-24m-40 16q19-20 40-19m-42 29q18-16 39-17M101 36q-3 13-3 25m12-28q-1 12-1 25m13-23q2 11 1 22" fill="none" stroke="#842535" stroke-width="1.6"/><path d="m113 87 4 7 7-4-3 8 5 5-8-1-4 7-2-8-8 1 6-6-3-7z" fill="#17293d" stroke="none"/></g><path d="M161 59q18-1 24-15" fill="none" stroke="#fff" stroke-width="2" opacity=".75"/></svg>`,
    line: "Your friendly neighborhood coding hero swings in for today's challenge.", interaction: "Tap Spider-Man or the web-shooter to swing into action.", action: "🕸️", done: "Web deployed! Swing into the challenge, Spider-Man!"
  },
  green: {
    art: `<svg viewBox="0 0 220 145" role="img" aria-label="A round-eyed green cartoon girl superhero flying forward"><circle cx="110" cy="72" r="66" fill="#baff64"/><path d="M68 48Q55 18 91 16q45-5 61 27l-10 37-27-22-36 18z" fill="#152018"/><ellipse cx="110" cy="67" rx="45" ry="39" fill="#ffe2cf" stroke="#1b231b" stroke-width="4"/><path d="M68 56q3-42 43-42 36 0 46 38-19-15-42-14-21 0-47 18" fill="#16221c"/><ellipse cx="93" cy="69" rx="10" ry="13" fill="#fff" stroke="#18251a" stroke-width="3"/><ellipse cx="128" cy="69" rx="10" ry="13" fill="#fff" stroke="#18251a" stroke-width="3"/><circle cx="96" cy="72" r="5" fill="#39b83f"/><circle cx="125" cy="72" r="5" fill="#39b83f"/><path d="M101 88q10 8 19 0" fill="none" stroke="#b94b45" stroke-width="3" stroke-linecap="round"/><path d="M76 106Q110 91 144 106l12 29H64z" fill="#42cb43" stroke="#17251b" stroke-width="4"/><path d="M67 111 24 85l-9 15 47 24m91-12 44-28 9 15-47 24" fill="#39b83f" stroke="#17251b" stroke-width="4" stroke-linejoin="round"/><path d="M65 112 32 132l25-2 20-10m78-8 33 20-25-2-20-10" fill="#2da43a"/><path d="M87 107h46v8H87z" fill="#1b241c"/></svg>`,
    line: "Big eyes, bold punch, and a green-cape kind of day.", interaction: "Tap your flying heroine to power up.", action: "⭐", done: "Hero energy: fully charged!"
  },
  hearts: {
    art: `<svg viewBox="0 0 220 145" role="img" aria-label="A cheerful cluster of pink hearts"><path d="M110 121S40 79 44 48c3-26 36-31 66 0 30-31 63-26 66 0 4 31-66 73-66 73" fill="#f38ab8"/><path d="M74 48q8-16 23-8" fill="none" stroke="#fff5fa" stroke-width="6" stroke-linecap="round"/><path d="m44 25 4 9 9 4-9 4-4 9-4-9-9-4 9-4zM173 88l3 7 7 3-7 3-3 7-3-7-7-3 7-3z" fill="#e65c9d"/><circle cx="174" cy="34" r="9" fill="#ffcb54"/></svg>`,
    line: "A little kindness is a superpower, too.", interaction: "Tap the heart to send yourself a little love.", action: "💗", done: "A little kindness unlocked. You deserve it."
  },
  taco: {
    art: `<svg viewBox="0 0 220 145" role="img" aria-label="A delicious illustrated taco"><path d="M35 105Q40 29 110 28t75 77z" fill="#f6bd4f" stroke="#c87521" stroke-width="5"/><path d="M43 91q24-34 43-19 20-22 42-3 23-17 48 22z" fill="#76af4e"/><circle cx="73" cy="66" r="8" fill="#ee5f4e"/><circle cx="112" cy="55" r="8" fill="#ee5f4e"/><circle cx="148" cy="70" r="8" fill="#ee5f4e"/><path d="M50 99q31 23 61 9 30 15 59-4" fill="none" stroke="#f8e6bd" stroke-width="6" stroke-linecap="round"/><path d="m68 39 7-9m32 4 1-12m37 19 8-8" stroke="#83bd55" stroke-width="6" stroke-linecap="round"/></svg>`,
    line: "Taco 'bout a brain boost. Let's crunch this challenge!", interaction: "Pick a topping for your tiny taco:", action: "🌮", done: "Perfect topping choice!", toppings: ["🥑 Avocado", "🧀 Cheese", "🌶️ Chilli"]
  },
  purple: {
    art: `<svg viewBox="0 0 220 145" role="img" aria-label="A purple planet surrounded by stars"><circle cx="110" cy="73" r="48" fill="#8e68dc"/><path d="M68 78q42-42 84 0-42 34-84 0" fill="#b998ff"/><ellipse cx="110" cy="73" rx="88" ry="23" fill="none" stroke="#f2d2ff" stroke-width="7" transform="rotate(-16 110 73)"/><circle cx="90" cy="61" r="5" fill="#fff5cf"/><path d="m35 30 4 9 9 4-9 4-4 9-4-9-9-4 9-4zm150 78 3 7 7 3-7 3-3 7-3-7-7-3 7-3z" fill="#ffdb72"/><circle cx="176" cy="33" r="5" fill="#fff"/><circle cx="49" cy="111" r="4" fill="#fff"/></svg>`,
    line: "Make your own kind of magic, one problem at a time.", interaction: "Tap a star to make a wish for today's challenge.", action: "✨", done: "Wish granted: you've got this!"
  },
  berries: {
    art: `<svg viewBox="0 0 220 145" role="img" aria-label="A leafy branch of vivid purple beautyberry clusters"><path d="M29 112Q101 77 191 35" fill="none" stroke="#73533d" stroke-width="7" stroke-linecap="round"/><path d="M60 96Q24 83 37 53q36-7 48 21Q79 91 60 96zm55-30q-8-41 26-50 28 24 9 47-17 10-35 3zm18-1q36-32 61-9-4 37-40 34-17-6-21-25zM93 82Q78 51 101 38q29 17 19 41-11 10-27 3z" fill="#36aa55" stroke="#1e7c42" stroke-width="3" stroke-linejoin="round"/><path d="M42 59 72 83m83-62-17 35m62-3-43 23M99 44l11 33" stroke="#a3e96f" stroke-width="2"/><path d="M67 92 57 76m39 5 1-19m43-11 15 13m-26 7-11-16m34 17 20-11" stroke="#a3e96f" stroke-width="2"/><g fill="#962cff" stroke="#6714bb" stroke-width="2"><circle cx="52" cy="107" r="9"/><circle cx="66" cy="103" r="9"/><circle cx="80" cy="99" r="9"/><circle cx="60" cy="118" r="9"/><circle cx="74" cy="114" r="9"/><circle cx="88" cy="109" r="9"/><circle cx="107" cy="81" r="9"/><circle cx="121" cy="77" r="9"/><circle cx="135" cy="73" r="9"/><circle cx="115" cy="92" r="9"/><circle cx="129" cy="88" r="9"/><circle cx="143" cy="83" r="9"/><circle cx="157" cy="53" r="9"/><circle cx="171" cy="49" r="9"/><circle cx="185" cy="45" r="9"/><circle cx="165" cy="64" r="9"/><circle cx="179" cy="60" r="9"/><circle cx="193" cy="55" r="9"/></g><g fill="#d99aff"><circle cx="49" cy="104" r="3"/><circle cx="63" cy="100" r="3"/><circle cx="104" cy="78" r="3"/><circle cx="118" cy="74" r="3"/><circle cx="154" cy="50" r="3"/><circle cx="168" cy="46" r="3"/></g></svg>`,
    line: "Small bites, big brain energy. Berry good work starts here!", interaction: "Tap a berry to add a little sparkle.", action: "🍓", done: "Berry boost activated!"
  },
  valorant: {
    art: `<div class="valorant-agent-art"><figure><img src="https://media.valorant-api.com/agents/add6443a-41bd-e414-f6ad-e58d267f4e95/fullportrait.png" alt="VALORANT agent Jett"><figcaption>JETT</figcaption></figure><figure><img src="https://media.valorant-api.com/agents/eb93336a-449b-9c1b-0a54-a891f7921d69/fullportrait.png" alt="VALORANT agent Phoenix"><figcaption>PHOENIX</figcaption></figure><figure><img src="https://media.valorant-api.com/agents/569fdd95-4d10-43ab-ca70-79becc718b46/fullportrait.png" alt="VALORANT agent Sage"><figcaption>SAGE</figcaption></figure><figure><img src="https://media.valorant-api.com/agents/a3bfb853-43b2-7238-a4f1-ad90e9e46bcc/fullportrait.png" alt="VALORANT agent Reyna"><figcaption>REYNA</figcaption></figure></div>`,
    line: "Jett's speed. Phoenix's fire. Your next round starts here.", interaction: "Tap the spike to start your round.", action: "◈", done: "Round won. Nice work, Agent."
  },
  immortal2: {
    art: `<div class="immortal-rank-art"><img src="https://media.valorant-api.com/competitivetiers/03621f52-342b-cf4e-4f86-9350a49c6d04/25/largeicon.png" alt="Official VALORANT Immortal 2 rank badge"></div>`,
    line: "IMMORTAL II · Earn every point. Own every round.", interaction: "Tap the rank badge to queue up for the challenge.", action: "Ⅱ", done: "Immortal mindset: locked in."
  }
};

export function applyTheme(theme) {
  const selected = themeViews[theme] ? theme : "hearts";
  document.body.classList.remove(...Object.keys(themeViews).map(name => `theme-${name}`));
  document.body.classList.add(`theme-${selected}`);
  const host = document.querySelector("#themePlay");
  const view = themeViews[selected];
  host.innerHTML = `<div class="theme-illustration" role="button" tabindex="0" aria-label="${view.interaction}">${view.art}</div><strong>${view.line}</strong><p id="themeMessage" aria-live="polite">${view.interaction}</p>${view.toppings ? view.toppings.map(topping => `<button type="button" data-topping="${topping.split(" ").slice(1).join(" ")}">${topping}</button>`).join("") : ""}<button class="theme-action" id="themeAction" type="button" aria-label="Activate theme interaction">${view.action}</button>`;
  const action = host.querySelector("#themeAction");
  const activate = (message = view.done) => {
    host.querySelector("#themeMessage").textContent = message;
    host.classList.remove("theme-activated");
    void host.offsetWidth;
    host.classList.add("theme-activated");
    action.classList.add("celebrate");
    window.setTimeout(() => { action.classList.remove("celebrate"); host.classList.remove("theme-activated"); }, 1200);
  };
  action.addEventListener("click", () => activate());
  const illustration = host.querySelector(".theme-illustration");
  illustration.addEventListener("click", () => activate());
  illustration.addEventListener("keydown", event => { if (event.key === "Enter" || event.key === " ") { event.preventDefault(); activate(); } });
  host.querySelectorAll("[data-topping]").forEach(button => button.addEventListener("click", () => {
    activate(`${button.dataset.topping} added. ${view.done}`);
  }));
}
