
    // Open modal
    document.querySelectorAll('.open-modal').forEach(link => {
      link.addEventListener('click', function (e) {
        e.preventDefault();
        const modal = document.querySelector(this.getAttribute('href'));
        if (modal) modal.showModal();
      });
    });

    // Close modal
    document.querySelectorAll('.modal-close').forEach(button => {
      button.addEventListener('click', function () {
        const modal = this.closest('dialog');
        if (modal) modal.close();
      });
    });
