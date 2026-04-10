$(document).ready(function() {
  // 1. Initialize Bootstrap Components
  $('[data-bs-toggle="tooltip"]').each(function() { new bootstrap.Tooltip(this); });
  $('.popover-trigger').each(function() { new bootstrap.Popover(this); });

  // 2. jQuery Animations & Events
  $('#toggleBtn').click(function() { 
      $('#hiddenDiv').slideToggle('fast'); 
      // Add toggling animation for button
      $(this).toggleClass('btn-warning btn-danger').text($(this).text() == 'Reveal Secret' ? 'Hide Secret' : 'Reveal Secret');
  });

  // 3. Dynamic Modal Triggering with Bootstrap API
  $('.modal-trigger').click(function() {
    $('#mTit').text('Exclusive Project Insights');
    var myModalEl = document.getElementById('prjModal');
    var modal = bootstrap.Modal.getOrCreateInstance(myModalEl);
    modal.show();
  });

  // 4. Form Validation with interactive UI Update
  $('#myForm').submit(function(e) {
    e.preventDefault(); 
    if (!this.checkValidity()) { 
        e.stopPropagation(); 
    } else { 
        // Interactively remove the form and show success using jQuery html()
        $(this).html('<div class="text-center py-5"><i class="bi bi-check-circle-fill text-success" style="font-size: 5rem;"></i><h3 class="text-dark fw-bold mt-4">Message Sent Successfully!</h3><p class="text-muted">I will get back to you as soon as possible.</p></div>'); 
    }
    $(this).addClass('was-validated');
  });
});