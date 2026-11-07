const WEB3FORMS_ENDPOINT = "https://api.web3forms.com/submit";

// Each access key is tied to the inbox it was created with on web3forms.com
export const WEB3FORMS_KEYS = {
  apply: import.meta.env.VITE_WEB3FORMS_APPLY_KEY,
  contact: import.meta.env.VITE_WEB3FORMS_CONTACT_KEY,
};

export async function submitToWeb3Forms(accessKey, fields) {
  if (!accessKey) {
    throw new Error("Web3Forms access key is missing. Check your .env file.");
  }

  const response = await fetch(WEB3FORMS_ENDPOINT, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({ access_key: accessKey, ...fields }),
  });

  const result = await response.json();
  if (!response.ok || !result.success) {
    throw new Error(result.message || "Submission failed");
  }
  return result;
}
