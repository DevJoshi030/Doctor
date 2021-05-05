export default () => {
  let scripts = [...document.getElementsByClassName("script-tag")];
  scripts
    ? scripts.map((script) => {
        script.remove();
      })
    : null;
};
