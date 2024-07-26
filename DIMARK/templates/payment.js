// payment.js

document.addEventListener('DOMContentLoaded', () => {
    initializeSignUpButtons();
    initializeFAQ();
  });
  
  function initializeSignUpButtons() {
    const buttons = document.querySelectorAll('.plan button');
    
    buttons.forEach(button => {
      button.addEventListener('click', handleSignUpClick);
    });
  }
  
  function handleSignUpClick(event) {
    const planName = event.target.closest('.plan').querySelector('h2').textContent;
    showAlert(`You have selected the ${planName} plan.`);
  }
  
  function showAlert(message) {
    const alertBox = document.createElement('div');
    alertBox.className = 'alert-box';
    alertBox.textContent = message;
  
    document.body.appendChild(alertBox);
  
    setTimeout(() => {
      document.body.removeChild(alertBox);
    }, 3000);
  }
  
  function initializeFAQ() {
    const faqItems = document.querySelectorAll('.faq ul li');
  
    faqItems.forEach(item => {
      const question = item.querySelector('span');
      const answer = item.querySelector('p');
      
      question.style.cursor = 'pointer';
      answer.style.display = 'none';
      
      question.addEventListener('click', () => {
        const isVisible = answer.style.display === 'block';
        answer.style.display = isVisible ? 'none' : 'block';
      });
    });
  }
  