/* JavaScript DOM Exercises 02 Tutorial: https://youtu.be/Ky1rr9hEoLM */
/* 
  Exercise 01
  -----------
  A new feature has been added to the Pro plan: '24/7 Phone support'.
  Add this using JavaScript to the list features of the Pro plan.
*/
document.addEventListener('DOMContentLoaded', () => {
  const proPlan = document.getElementById('pro-plan');

  // Exercise 01
  // Add '24/7 Phone support' to Pro plan features list
  const proFeaturesList = proPlan.querySelector('ul.list-unstyled');
  const phoneSupportLi = document.createElement('li');
  phoneSupportLi.textContent = '24/7 Phone support';
  proFeaturesList.appendChild(phoneSupportLi);
});

/* 
  Exercise 02
  -----------
  To make the ordering of the plans more logical, using JavaScript, move the basic plan to be before (to the left) of the pro plan.
*/
document.addEventListener('DOMContentLoaded', () => {
  const cardDeck = document.querySelector('.card-deck');
  const proPlan = document.getElementById('pro-plan');
  const basicPlan = document.getElementById('basic-plan');

  // Exercise 02
  // Move Basic plan before Pro plan
  cardDeck.insertBefore(basicPlan, proPlan);
});


/* 
  Exercise 03
  -----------
  To make the Pro plan have a stronger call to action, update the current 'Get started' button to be blue (#007bff) with white text and have the text 'Buy Now' 
*/
document.addEventListener('DOMContentLoaded', () => {
  const proPlan = document.getElementById('pro-plan');
  const proButton = proPlan.querySelector('button');

  // Exercise 03
  proButton.textContent = 'Buy Now';
  proButton.style.backgroundColor = '#007bff';  // blue background
  proButton.style.color = '#ffffff';             // white text
  proButton.style.border = 'none';               // remove border to match solid button look
});


/* 
  Exercise 04
  -----------
  There is a special offer on at the moment offering 50% more storage on the Basic plan and 25% more on the Pro plan.
  Update the basic and pro plan cards to reflect the new storage amount being offered. 
*/
document.addEventListener('DOMContentLoaded', () => {
  const basicPlan = document.getElementById('basic-plan');
  const proPlan = document.getElementById('pro-plan');

  // Exercise 04
  // Update Basic plan storage: 50% more
  const basicStorageSpan = basicPlan.querySelector('.storage-amount');
  let basicStorage = parseFloat(basicStorageSpan.textContent);
  basicStorage = basicStorage + basicStorage * 0.5; // 50% increase
  basicStorageSpan.textContent = basicStorage;

  // Update Pro plan storage: 25% more
  const proStorageSpan = proPlan.querySelector('.storage-amount');
  let proStorage = parseFloat(proStorageSpan.textContent);
  proStorage = proStorage + proStorage * 0.25; // 25% increase
  proStorageSpan.textContent = proStorage;
});



/* 
  Exercise 05
  -----------
  You have been asked to add ask a toggle / radio box for annual and monthly payments for the basic and pro plans.
  Add a radio button to toggle between monthly and annual payment options and adjust the prices shown for both plans if the annual option is selected (give two months free if customers pay annually).
*/
document.addEventListener('DOMContentLoaded', () => {
  const basicPlan = document.getElementById('basic-plan');
  const proPlan = document.getElementById('pro-plan');

  // Get the pricing spans
  const basicPriceSpan = basicPlan.querySelector('.pricing');
  const proPriceSpan = proPlan.querySelector('.pricing');

  // Store original monthly prices (numbers only)
  const basicMonthlyPrice = 10;
  const proMonthlyPrice = 30;

  // Create container div for radio buttons
  const toggleContainer = document.createElement('div');
  toggleContainer.style.margin = '1rem 0';
  toggleContainer.innerHTML = `
    <label>
      <input type="radio" name="payment" value="monthly" checked> Monthly
    </label>
    <label style="margin-left: 1rem;">
      <input type="radio" name="payment" value="annual"> Annual
    </label>
  `;

  // Insert toggle container above plans
  const container = document.querySelector('.container');
  container.insertBefore(toggleContainer, container.firstChild);

  // Function to update prices based on selected payment
  function updatePrices(paymentType) {
    if (paymentType === 'monthly') {
      basicPriceSpan.textContent = `${basicMonthlyPrice} / month`;
      proPriceSpan.textContent = `${proMonthlyPrice} / month`;
    } else if (paymentType === 'annual') {
      // Annual price = monthly price * 10 (2 months free)
      const basicAnnualPrice = basicMonthlyPrice * 10;
      const proAnnualPrice = proMonthlyPrice * 10;
      basicPriceSpan.textContent = `${basicAnnualPrice} / year`;
      proPriceSpan.textContent = `${proAnnualPrice} / year`;
    }
  }

  // Add event listener to radio buttons
  toggleContainer.querySelectorAll('input[name="payment"]').forEach(radio => {
    radio.addEventListener('change', (e) => {
      updatePrices(e.target.value);
    });
  });

  // Initial price setup
  updatePrices('monthly');
});

