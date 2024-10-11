class ProductForm2 extends HTMLElement {
  connectedCallback() {
    this.variantPicker = this.querySelector('variant-picker2');
    this.submitButton = this.querySelector('[data-submit]');
    this.statusMessage = this.querySelector('[data-status-message]');
    this.loader = this.querySelector('[data-loader]');


    this.submitButton.addEventListener('click', async () => {
      this.submitButton.setAttribute('disabled', 'disabled');
      this.submitButton.querySelectorAll('span').forEach((span) => { span.style.visibility = 'hidden' });
      this.loader.dataset.loader = "on";
      await this.addToCart();
      this.loader.dataset.loader = "off";
      this.submitButton.querySelectorAll('span').forEach((span) => { span.style.visibility = 'visible' });
      this.submitButton.removeAttribute('disabled');
    });
  }

  async addToCart() {
    const variantId = this.variantPicker.dataset.currentVariant;
    const quantity = 1;

    try {
      const response = await fetch('/cart/add.js', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ items: [{ id: variantId, quantity: quantity }] }),
      })

      if (response.ok) {
        this.updateStatusMessage('Product added to cart!');
        return;
      }

      const error = await response.json();
      this.updateStatusMessage(error.description);
      console.error(error);
    } catch (error) {
      this.updateStatusMessage('Something went wrong. Please try again.');
      console.error(error);
    }
  }

  updateStatusMessage(message) {
    this.statusMessage.querySelector('span').textContent = message;
    this.statusMessage.hidden = false;

    setTimeout(() => {
      this.statusMessage.hidden = true;
    }, 3000);
  }
}

customElements.define('product-form2', ProductForm2);