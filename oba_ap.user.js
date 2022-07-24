// ==UserScript==
// @name        ÖBA otomatik oynatım
// @namespace   ni
// @homepage    https://github.com/yiitbrak/OBA_autoplay/blob/main/README.md
// @match       *://www.oba.gov.tr/egitim/oynatma/*
// @grant       none
// @version     1.1.2
// @author      ybrak
// @description Öğretmen Bilişim Ağı için video bitiminde otomatik olarak sonraki videoya geçer
// @icon data:image/png;base64,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
// ==/UserScript==
(function () {
  'use-strict';
  /* Bu oynatıcının  ayarlanacağı ses seviyesini belirler, 0.0 ile 1.0 
   *arasındaki bir değer ile değiştirmekte serbestsin, eğer bunu görürsen */
  const SES_SEVIYESI = 0.5
  /***************************/

  let m_vPlayer = document.querySelector("#video_html5_api");
  let m_arr = document.querySelector("#course-player-section-list-wrapper").getElementsByClassName("course-player-object-list-item")
  let m_current;
  let m_index;
  let m_lastKnownPos;
  console.log(":^)");


  function worker() {
    if (m_vPlayer.currentTime < m_lastKnownPos && m_vPlayer.currentTime < 60) {
      console.log("Başa alındı!");
      vid_end();
    }
    m_lastKnownPos = m_vPlayer.currentTime;
  }


  for (const i in m_arr) {
    let is_current = m_arr[i].getElementsByClassName("progress-icon");
    if (is_current.length) {
      console.log("Found current!");
      console.log(`İndex: ${i}, Title: ${m_arr[i].getElementsByClassName("course-player-video-link").item(0).innerText}`);
      m_index = i;
      m_current = m_arr[i];
      break;
    }
  }

  function vid_start() {
    m_vPlayer.muted = true;
    m_vPlayer.play()
    m_vPlayer.muted = false;
    m_vPlayer.volume = SES_SEVIYESI;

    console.log("tık!");
  }

  /* Siteye yüklenmesi için zaman ver, eğer 5 saniyeden fazla sürüyorsa kullanıcı hatasıdır */
  setTimeout(() => vid_start(), 5000);
  m_vPlayer.muted = false;
  console.log("Video başlatıldı");

  let intervID = setInterval(() => worker(), 5000);

  function vid_end() {
    clearInterval(intervID);
    m_curr = m_arr[++m_index];
    console.log("Sonrakine geçiliyor...");
    console.log(`İndex: ${i}, Title: ${m_arr[i].getElementsByClassName("course-player-video-link").item(0).innerText}`);

    // list_item-> <a href=...></a>
    m_curr.children.item(0).click();
    console.log("Sonrakine tıklanıyor");
  }
})();