/*search */
$(function(){
  
    var opened = false;
    
    $('.search-icon').click(function() {
      if (!opened) {
        $('.search-icon').addClass('open fa-times');
        $('.search-icon').removeClass('open fa-search');
        $('.navbar').addClass('disp');
        $('.search-part').removeClass('disp');
        $('.search-input').addClass('open');
        setTimeout(function() {
          $('.search-input').focus();
        }, 500);
      } else {
        $('.search-icon').removeClass('open fa-times');
        $('.search-icon').addClass('open fa-search');
        $('.search-part').addClass('disp');
        $('.navbar').removeClass('disp');
        $('.search-input').removeClass('open');
      }
      
      opened = !opened;
    })
    
  });

  const toastTrigger = document.getElementById('liveToastBtn')
const toastLiveExample = document.getElementById('liveToast')
if (toastTrigger) {
  toastTrigger.addEventListener('click', () => {
    const toast = new bootstrap.Toast(toastLiveExample)

    toast.show()
  })
}