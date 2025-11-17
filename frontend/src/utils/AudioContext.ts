const clickSound = new Audio("./click.mp3");
clickSound.volume = 0.4;

export const playClickSound = () => {
  try {
    clickSound.currentTime = 0;
    clickSound.play();
  } catch (error) {
    console.error("Error play sound", error);
  }
};
