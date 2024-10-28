async function fetchDownloads() {
  try {
    console.log("Fetching download count...");
    const response = await fetch("https://crates.io/api/v1/crates/cryptify", {
      headers: {
        "User-Agent": "Pranav Dronavalli Website (dronavallipranav@gmail.com)",
      },
    });

    if (!response.ok) {
      throw new Error(`Error fetching data: ${response.statusText}`);
    }

    const data = await response.json();
    console.log("API Response:", data);
    const downloadCount = data.crate.downloads;

    const downloadCountElements = document.querySelectorAll(".download-count");
    downloadCountElements.forEach((element) => {
      element.textContent = `${downloadCount}`;
    });
    console.log("Download count updated:", downloadCount);
  } catch (error) {
    console.error("Error fetching live downloads:", error);
  }
}

document.addEventListener("DOMContentLoaded", fetchDownloads);
