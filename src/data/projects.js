const fetchCrateDownloads = async (crateName) => {
  const response = await fetch(`https://crates.io/api/v1/crates/${crateName}`, {
    headers: {
      "User-Agent": "Pranav Dronavalli's Website (dronavallipranav@gmail.com)",
    },
  });

  if (!response.ok) {
    throw new Error(`Error fetching crate data: ${response.statusText}`);
  }
  const data = await response.json();
  return data.crate.downloads;
};

let projects = [
  {
    title: "Rust Obfuscator",
    status: "",
    description:
      "open source automatic rust obfuscator and procedural macro library for fine-grained control",
    image: "/rustacean.jpg",
    link: "https://github.com/dronavallipranav/rust-obfuscator",
    liveData: async () => await fetchCrateDownloads("cryptify"),
  },
  {
    title: "Low Elo Chess",
    status: "",
    description:
      "a terribly mediocre attempt at a low elo chess engine written in Go",
    image: "/dumbChess.jpg",
    link: "https://github.com/dronavallipranav/dumb-chess",
  },
  {
    title: "Swapper",
    status: "",
    description:
      "platform for item exchange and reducing waste by connecting people with items they need -- 1st place at DeveloperWeek 2024 (2k+ particpants)",
    image: "/swap.png",
    link: "https://devpost.com/software/swapper-8u4rq0",
  },
  {
    title: "GameBoy Emulator - ",
    description: "Take a look at the current state of my Emulator",
    status: "IN PROGRESS",
    image: "/gameboy.jpeg",
    link: "https://github.com/dronavallipranav/GBEmulator",
  },
  {
    title: "MadHacks Website",
    status: "",
    description: "Our website currently in place for MadHacks",
    image: "/madhacks2.jpeg",
    link: "https://www.madhacks.io/",
  },
];

export default projects;
