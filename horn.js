<html lang="ja">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>クラクション試聴</title>
  <link rel="stylesheet" href="style.css" />
</head>
<body>
  <header>
    <h1>クラクション試聴</h1>
    <nav>
      <a href="index.html">🏠 ホイールカタログへ戻る</a>
    </nav>

    <div id="horn-toolbar" style="margin-top:.5rem;display:flex;align-items:center;gap:1rem;flex-wrap:wrap;">
      <label style="display:flex;align-items:center;gap:.4rem;">
        音量 <input id="horn-volume" type="range" min="0" max="1" step="0.01" value="0.7">
      </label>
      <button id="horn-stop">⏹ 停止</button>
    </div>
  </header>

  <main id="horn-container"></main>

  <script>
    // ===== データ一覧 =====
    const HORNS = [
      { id: "horn01", name: "クラクション01", file: "./sounds/stock.m4a" },
      { id: "horn02", name: "クラクション02", file: "./sounds/truck.m4a" },
      { id: "horn03", name: "クラクション03", file: "./sounds/cop.m4a" },
      // …ここに最大50個まで同じ形式で追加
    ];

    // ===== 再生用オーディオ =====
    const player = new Audio();
    player.preload = "auto";
    player.volume = 0.7;
    let currentId = null;

    const container = document.getElementById("horn-container");
    const volume = document.getElementById("horn-volume");
    const stopBtn = document.getElementById("horn-stop");

    volume.addEventListener("input", () => { player.volume = Number(volume.value); });
    stopBtn.addEventListener("click", () => { player.pause(); player.currentTime = 0; currentId = null; syncButtons(); });

    // ===== カード生成 =====
    function render(){
      container.innerHTML = "";
      HORNS.forEach(h => {
        const card = document.createElement("div");
        card.className = "horn-card";
        card.innerHTML = `
          <h3>${h.name}</h3>
          <button class="play-btn" data-id="${h.id}">▶ 再生</button>
        `;
        container.appendChild(card);
      });

      container.querySelectorAll(".play-btn").forEach(btn => {
        btn.addEventListener("click", async (e) => {
          const id = e.currentTarget.dataset.id;
          const horn = HORNS.find(x => x.id === id);
          if (!horn) return;

          if (currentId === id && !player.paused) {
            player.pause();
            currentId = null;
            syncButtons();
            return;
          }

          player.src = horn.file;
          currentId = id;
          try { await player.play(); }
          catch(err){ console.error("再生エラー:", err); }
          syncButtons();
        });
      });
    }

    // ===== ボタン状態同期 =====
    function syncButtons(){
      document.querySelectorAll(".play-btn").forEach(btn => {
        const isActive = (btn.dataset.id === currentId && !player.paused);
        btn.textContent = isActive ? "⏸ 停止" : "▶ 再生";
      });
    }

    player.addEventListener("ended", () => { currentId = null; syncButtons(); });
    player.addEventListener("pause", () => { if (player.currentTime === 0) currentId = null; syncButtons(); });

    render();
  </script>
</body>
</html>
