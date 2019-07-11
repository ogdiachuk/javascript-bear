const getXCoordinate = event => {
  return event.clientX;
};

const getYCoordinate = event => {
  return event.clientY;
};

const getViewportDivBy2 = () => {
  return {
    height: window.visualViewport.height / 2,
    width: window.visualViewport.width / 2
  };
};

const animateEyes = event => {
  let xNum = (getXCoordinate(event) - getViewportDivBy2().width) / 22.5;
  let yNum = (getYCoordinate(event) - getViewportDivBy2().height) / 10.38;

  const pupils = document.querySelectorAll(".pupil");

  pupils.forEach(pupil => {
    pupil.style.transform = `translate(${xNum}px, ${yNum}px)`;
  });
};

const animateTongue = event => {
  const tongue = document.querySelector(".tongue");
  const xNum = (getXCoordinate(event) - getViewportDivBy2().width) / 1.5;
  const yNum = (getYCoordinate(event) - getViewportDivBy2().height) / 5;

  tongue.style.transform = `translate(${xNum}px, ${yNum}px)`;
};

const resetTongue = event => {
  const tongue = document.querySelector(".tongue");
  tongue.style.transform = `translate(0px, 0px)`;
};
