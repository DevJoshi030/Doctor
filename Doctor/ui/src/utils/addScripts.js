import scriptUrls from "./scriptUrls";

import postscribe from "postscribe";

export default () => {
  let appendScripts = "";
  scriptUrls.map((script) => {
    appendScripts += `<script src="${script}" class="script-tag"></script>`;
  });
  postscribe("#mainBody", appendScripts);
};
