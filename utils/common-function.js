export function formatDate(inputDate) {
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  const date = new Date(inputDate);
  return date.toLocaleDateString("en-US", options);
}

export function validatePhoneNumber(phoneNumber) {
  // Remove any non-digit characters
  const cleanedNumber = phoneNumber.replace(/\D/g, '');

  // Define the regular expression pattern
  const pattern = /^\d{10}$/; // Assumes 10 digits, modify as needed

  // Test the cleaned number against the pattern
  return pattern.test(cleanedNumber);
}

export const discountCalculation = (actualPrice, discountPrice) => {
  const discount = actualPrice - discountPrice
  const discountPercent = (discount * 100) / (actualPrice)
  return Number(discountPercent).toFixed(2)
}
