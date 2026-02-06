// Wait for DOM to load
document.addEventListener('DOMContentLoaded', () => {

  const form = document.getElementById('consultationForm');

  if (form) {
    form.addEventListener('submit', function(e) {
      e.preventDefault(); // prevent page reload

      // Collect form data
      const formData = new FormData(form);
      const data = Object.fromEntries(formData.entries());

      // Example: simple console log
      console.log('Consultation Request Submitted:', data);

      // Show confirmation (you can replace this with a nicer modal alert)
      alert('Thank you! Your consultation request has been submitted.');

      // Reset form
      form.reset();

      // Close modal
      const modalEl = document.getElementById('consultationModal');
      const modal = bootstrap.Modal.getInstance(modalEl);
      if (modal) {
        modal.hide();
      }

      // Optional: update notification badge
      const badge = document.querySelector('.navbar .bi-bell ~ .badge');
      if (badge) {
        let count = parseInt(badge.textContent) || 0;
        badge.textContent = count + 1;
      }
    });
  }

});
