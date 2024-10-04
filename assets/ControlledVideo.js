class ControlledVideo extends HTMLElement {
  constructor() {
    super();
    this.button = this.querySelector('button[data-play]');
    this.video = this.querySelector('video');
  }

  connectedCallback() {
    this.init();
  }

  init() {
    const $video = this.video;

    if (!this.button || !$video) return;

    $video.addEventListener('pause', () => {
      this.button.style.display = 'block';
      $video.controls = false;
    });

    this.button.addEventListener('click', () => {
      $video.play().then(() => {
        this.button.style.display = 'none';
        $video.controls = true;
      });
    });
  }
}

customElements.define('controlled-video', ControlledVideo);
