// utilites function
function inputValueById(inputId) {
  const inputValue = parseFloat(document.getElementById(inputId).value);
  return inputValue;
}
function textValueById(textId) {
  const textValue = parseFloat(document.getElementById(textId).innerText);
  return textValue;
}

// noakhali donation
document
  .getElementById("btn-donate-noakhali")
  .addEventListener("click", function () {
    const mainBalance = parseFloat(
      document.getElementById("main-balance").innerText
    );
    const noakhalidonationAmount = inputValueById("noakhali-donation-amount");
    const noakhaliBalance = textValueById("noakhali-balance");
    if (
      mainBalance > noakhalidonationAmount &&
      !isNaN(noakhalidonationAmount) &&
      noakhalidonationAmount > 0
    ) {
      const newNoakhaliBalance = noakhaliBalance + noakhalidonationAmount;
      document.getElementById("noakhali-balance").innerText =
        newNoakhaliBalance;
      const newMainBalance = mainBalance - noakhalidonationAmount;
      document.getElementById("main-balance").innerText = newMainBalance;
      // history
      const date = new Date();
      const donationHistoryContainer =
        document.getElementById("donation-history");
      const noakhaliTitle = document.getElementById("noakhali-title").innerText;
      const div = document.createElement("div");
      div.innerHTML = `
            <div class="border border-gray-200 rounded-lg p-4 space-y-2">
                <h4 class="md:text-xl font-bold">${noakhalidonationAmount} Taka ${noakhaliTitle}</h4>
            <p class="text-[#111111B3] text-sm">Date: ${date}</p>
            </div>
        `;
      donationHistoryContainer.appendChild(div);
    } else {
      alert("Your Donation Failed");
    }
  });

// feni donation
document
  .getElementById("btn-donate-feni")
  .addEventListener("click", function () {
    const mainBalance = parseFloat(
      document.getElementById("main-balance").innerText
    );
    const feniDonationAmount = inputValueById("feni-donation-amount");
    const feniBalance = textValueById("feni-balance");
    if (
      mainBalance > feniDonationAmount &&
      !isNaN(feniDonationAmount) &&
      feniDonationAmount > 0
    ) {
      const newFeniBalance = feniBalance + feniDonationAmount;
      document.getElementById("feni-balance").innerText = newFeniBalance;
      const newMainBalance = mainBalance - feniDonationAmount;
      document.getElementById("main-balance").innerText = newMainBalance;
      // history
      const date = new Date();
      const donationHistoryContainer =
        document.getElementById("donation-history");
      const feniTitle = document.getElementById("feni-title").innerText;
      const div = document.createElement("div");
      div.innerHTML = `
            <div class="border border-gray-200 rounded-lg p-4 space-y-2">
                <h4 class="md:text-xl font-bold">${feniDonationAmount} Taka ${feniTitle}</h4>
            <p class="text-[#111111B3] text-sm">Date: ${date}</p>
            </div>
        `;
      donationHistoryContainer.appendChild(div);
    } else {
      alert("Your Donation Failed");
    }
  });

// quota donation
document
  .getElementById("btn-donate-quota")
  .addEventListener("click", function () {
    const mainBalance = parseFloat(
      document.getElementById("main-balance").innerText
    );
    const quotaDonationAmount = inputValueById("quota-donation-amount");
    const quotaBalance = textValueById("quota-balance");
    if (
      mainBalance > quotaDonationAmount &&
      !isNaN(quotaDonationAmount) &&
      quotaDonationAmount > 0
    ) {
      const newQuotaBalance = quotaBalance + quotaDonationAmount;
      document.getElementById("quota-balance").innerText = newQuotaBalance;
      const newMainBalance = mainBalance - quotaDonationAmount;
      document.getElementById("main-balance").innerText = newMainBalance;
      // history
      const date = new Date();
      const donationHistoryContainer =
        document.getElementById("donation-history");
      const quotaTitle = document.getElementById("quota-title").innerText;
      const div = document.createElement("div");
      div.innerHTML = `
            <div class="border border-gray-200 rounded-lg p-4 space-y-2">
                <h4 class="md:text-xl font-bold">${quotaDonationAmount} Taka ${quotaTitle}</h4>
            <p class="text-[#111111B3] text-sm">Date: ${date}</p>
            </div>
        `;
      donationHistoryContainer.appendChild(div);
    } else {
      alert("Your Donation Failed");
    }
  });

//   toggle button
document.getElementById("btn-history").addEventListener("click", function () {
  document.getElementById("donation-section").classList.add("hidden");
  document.getElementById("donation-history").classList.remove("hidden");
});

document.getElementById("btn-donation").addEventListener("click", function () {
  document.getElementById("donation-section").classList.remove("hidden");
  document.getElementById("donation-history").classList.add("hidden");
});

// blog page redirect
// document.getElementById("btn-blog").addEventListener('click', function () {
//   window.location.href = '/blog.html'
// })



