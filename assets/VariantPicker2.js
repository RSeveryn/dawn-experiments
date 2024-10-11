class VariantPicker2 extends HTMLElement {
  connectedCallback() {
    this.addEventListener('change', this.onChange);
    this.variantsByOptions = window._variantsByOptions;
    this.variantPrice = document.querySelector('[data-variant-price]');
    this.submitButton = document.querySelector('[data-submit]');

    this.colorLabel = this.querySelector('[data-color-label]');
  }

  onChange(event) {
    event.stopPropagation();
    const value = event.target.value;
    const option = event.target.getAttribute('name');
    if (option === 'color') {
      this.setCurrentColor(value);
    }
    this.setCurrentVariant(value);
    this.updateVariantImage();
    this.updateVariantPrice();
    this.updateAvailability();
  }

  setCurrentVariant(value) {
    this.setAttribute('data-current-variant', this.variantsByOptions[this.getCurrentColor()].id);
  }

  getCurrentVariant() {
    return this.getAttribute('data-current-variant');
  }

  setCurrentColor(value) {
    this.setAttribute('data-current-color', value);
    this.updateColorLabel();
  }

  getCurrentColor() {
    return this.getAttribute('data-current-color');
  }

  updateColorLabel() {
    this.colorLabel.textContent = this.getCurrentColor();
  }

  updateVariantImage() {
    document.querySelectorAll(`[data-image-for-variant]`).forEach((image) => {
      image.hidden = image.dataset.imageForVariant !== this.getCurrentVariant();
    })
  }

  updateVariantPrice() {
    this.variantPrice.textContent = `$${this.variantsByOptions[this.getCurrentColor()].price}`;
  }

  updateAvailability() {
    const variant = this.variantsByOptions[this.getCurrentColor()];
    if (variant.available) {
      this.submitButton.removeAttribute('disabled');
      return
    }
    this.submitButton.setAttribute('disabled', 'disabled');
  }
}

customElements.define('variant-picker2', VariantPicker2);