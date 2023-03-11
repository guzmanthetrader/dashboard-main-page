const downloadButton = document.querySelector('#download-button');
downloadButton.addEventListener('click', function() {

  const fileUrl = 'http://example.com/file.pdf';
  const fileName = 'example.pdf';

  
  const link = document.createElement('a');
  link.href = fileUrl;
  link.download = fileName;
  link.click();
});

const sidebarIcons = document.querySelectorAll('.sidebar-icon');
sidebarIcons.forEach(function(icon) {
  icon.addEventListener('click', function(event) {
    event.preventDefault(); 

    const pageId = this.getAttribute('href');

    const pages = document.querySelectorAll('.page');

    const activePage = document.querySelector('.active-page');
    activePage.classList.remove('active-page');

    const targetPage = document.querySelector(pageId);
    targetPage.classList.add('active-page');
  });
});

const logOutButton = document.querySelector('#log-out-button');
logOutButton.addEventListener('click', function() {

  window.location.href = 'http://example.com/';
});

const cancelSubscriptionButton = document.querySelector('#cancel-subscription-button');
cancelSubscriptionButton.addEventListener('click', function() {
 
  window.location.href = 'http://example.com/';
});




