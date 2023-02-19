const wordflick = () => {
  const words = [
    'Web Developer',
    'Software Engineer',
    'UI / UX Designer',
    'Fucking Legend',
  ];
  const len = words.length;
  const skipDelay = 15;
  const speed = 70;
  let part;
  let i = 0;
  let offset = 0;
  let forwards = true;
  let skipCount = 0;
  setInterval(() => {
    if (forwards) {
      if (offset >= words[i].length) {
        skipCount += 1;
        if (skipCount === skipDelay) {
          forwards = false;
          skipCount = 0;
        }
      }
    } else if (offset === 0) {
      forwards = true;
      i += 1;
      offset = 0;
      if (i >= len) {
        i = 0;
      }
    }
    part = words[i].substr(0, offset);
    if (skipCount === 0) {
      if (forwards) {
        offset += 1;
      } else {
        offset -= 1;
      }
    }
    document.getElementsByClassName('word')[0].innerHTML = part;
  }, speed);
};

export default wordflick;
