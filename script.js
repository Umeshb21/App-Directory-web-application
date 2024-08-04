
const categoriesData = [
  { id: 1, name: "All" },
  { id: 2, name: "Social Media" },
  { id: 3, name: "Utility" },
  { id: 4, name: "Entertainment" },
  { id: 5, name: "Games" },
  { id: 6, name: "Travel" },
  { id: 7, name: "Food" },
  { id: 8, name: "Finance" },
  { id: 9, name: "Photo and Video"},
  { id: 10, name: "Shopping" },
];

const appsData = [
  { id: 10, name: "Amazon",category: "Shopping", imageUrl: "Amazon.png",appWebsite: "amazon.html" },
  { id: 2, name: "Netflix", category: "Entertainment", imageUrl: "Netflix1.png",appWebsite: "netflix.html" },
  { id: 7, name: "Swiggy", category: "Food", imageUrl: "Swiggy.png",appWebsite: "https://www.swiggy.com/" },
  { id: 3, name: "Zoom", category: "Utility", imageUrl: "zoom.png",appWebsite: "https://zoom.us/" },
  { id: 2, name: "Instagram", category: "Social Media", imageUrl: "Instagram.png",appWebsite: "https://www.instagram.com/" },
  { id: 1, name: "VSCO", category: "Photo and Video", imageUrl: "vsco.png",appWebsite: "https://www.vsco.co/"  },
  { id: 1, name: "Dropbox", category: "Utility", imageUrl: "Dropbox.png",appWebsite: "https://www.dropbox.com/" },
  { id: 4, name: "Amazon Prime Video", category: "Entertainment", imageUrl: "amazonprimevideo.png", appWebsite: "https://www.primevideo.com/" },
  { id: 1, name: "Disney+", category: "Entertainment", imageUrl: "Disney+.png", appWebsite: "https://www.hotstar.com/" },
  { id: 1, name: "Facebook", category: "Social Media", imageUrl: "facebook.png", appWebsite: "https://www.facebook.com/" },
  { id: 1, name: "Zomato", category: "Food", imageUrl: "zomato.png", appWebsite: "https://www.zomato.com/india" },
  { id: 1, name: "Spotify", category: "Entertainment", imageUrl: "Spotify.png", appWebsite: "https://open.spotify.com/" },
  { id: 1, name: "Among Us", category: "Games", imageUrl: "Among us.png", appWebsite: "https://amongusplay.online/" },
  { id: 1, name: "Fortnite", category: "Games", imageUrl: "Fortnite.png", appWebsite: "https://www.fortnite.com/?lang=en-US" },
  { id: 1, name: "YouTube", category: "Entertainment", imageUrl: "YouTube.png", appWebsite: "https://www.youtube.com/" },
  { id: 1, name: "Snapseed", category: "Photo and Video", imageUrl: "Snapseed.png", appWebsite: "https://snapseed.online/"  },
  { id: 1, name: "Free Fire", category: "Games", imageUrl: "Garena-Free-Fire.png", appWebsite: "https://ff.garena.com/" },
  { id: 1, name: "Call of Duty", category: "Games", imageUrl: "call-of-duty-mobile.png", appWebsite: "https://www.callofduty.com/hub" },
  { id: 1, name: "Snapchat", category: "Social Media", imageUrl: "Snapchat.png", appWebsite: "https://www.snapchat.com/" },
  { id: 1, name: "WhatsApp", category: "Social Media", imageUrl: "WhatsApp.png", appWebsite: "https://www.whatsapp.com/" },
  { id: 1, name: "Candy Crush Saga", category: "Games", imageUrl: "candycrush.png", appWebsite: "https://www.king.com/game/candycrush" },
  { id: 1, name: "Skype", category: "Social Media", imageUrl: "Skype.png", appWebsite: "https://www.skype.com/en/" },
  { id: 1, name: "Apple Music", category: "Entertainment", imageUrl: "Apple Music.png", appWebsite: "https://music.apple.com/us/browse" },
  { id: 1, name: "Adobe Photoshop Express", category: "Photo and Video", imageUrl: "Adobe Photoshop Express.png", appWebsite: "https://www.adobe.com/in/products/photoshop-express.html" },
  { id: 1, name: "Airbnb", category: "Travel", imageUrl: "Airbnb.png", appWebsite: "https://www.airbnb.co.in/" },
  { id: 1, name: "WeChat", category: "Social Media", imageUrl: "WeChat.png", appWebsite: "https://www.wechat.com/" },
  { id: 1, name: "Redbus", category: "Travel", imageUrl: "Redbus.png", appWebsite: "https://m.redbus.in/" },
  { id: 1, name: "PicsArt", category: "Photo and Video", imageUrl: "PicsArt.png", appWebsite: "https://picsart.com/" },
  { id: 1, name: "Domino's", category: "Food", imageUrl: "Domino's.png", appWebsite: "https://pizzaonline.dominos.co.in/" },
  { id: 8, name: "Paytm", category: "Finance", imageUrl: "Paytm.png", appWebsite: "https://paytm.com/" },
  { id: 1, name: "World of Warcraft", category: "Games", imageUrl: "World of Warcraft.png", appWebsite: "https://worldofwarcraft.blizzard.com/" },
  { id: 8, name: "PhonePe", category: "Finance", imageUrl: "PhonePe.png", appWebsite: "https://www.phonepe.com/" },
  { id: 1, name: "Google Drive", category: "Utility", imageUrl: "GoogleDrive.png", appWebsite: "https://www.google.com/intl/en_in/drive/" },
  { id: 1, name: "TikTok", category: "Entertainment", imageUrl: "TikTok.png", appWebsite: "https://www.tiktok.com/about" },
  { id: 8, name: "Google Pay", category: "Finance", imageUrl: "Gpay.png", appWebsite: "https://pay.google.com/about/" },
  { id: 1, name: "Pizza Hut", category: "Food", imageUrl: "pizzahut.png", appWebsite: "https://www.pizzahut.co.in/" },
  { id: 1, name: "Microsoft OneDrive ", category: "Utility", imageUrl: "Onedrive.png", appWebsite: "https://www.microsoft.com/en-in/microsoft-365/onedrive/online-cloud-storage" },
  { id: 1, name: "Overwatch", category: "Games", imageUrl: "Overwatch.png", appWebsite: "https://overwatch.blizzard.com/en-gb/" },
  { id: 1, name: "Orange", category: "Travel", imageUrl: "Orange.png", appWebsite: "https://www.orangetravels.in/" },
  { id: 1, name: "HBO Max", category: "Entertainment", imageUrl: "hbo.png", appWebsite: "https://www.max.com/geo-availability" },
  { id: 1, name: "Messenger", category: "Social Media", imageUrl: "Messenger.png", appWebsite: "https://www.messenger.com/" },
  { id: 1, name: "The Legend of Zelda: Breath of the Wild", imageUrl: "theWild.png", appWebsite: "https://zelda.nintendo.com/" },
  { id: 1, name: "Dunzo", category: "Food", imageUrl: "Dunzo.png", appWebsite: "https://www.dunzo.com/hyderabad" },
  { id: 8, name: "BHIM", category: "Finance", imageUrl: "bhim.png", appWebsite: "https://www.bhimupi.org.in/" },
  { id: 1, name: "Expedia", category: "Travel", imageUrl: "Expedia.png", appWebsite: "https://www.expedia.co.in/" },
  { id: 8, name: "Amazon Pay", category: "Finance", imageUrl: "amazonpay.png", appWebsite: "https://www.amazonpay.in/" },
  { id: 1, name: "Uber", category: "Travel", imageUrl: "Uber.png", appWebsite: "https://www.uber.com/in/en/" },
  { id: 1, name: "Steam", category: "Entertainment", imageUrl: "Steam.png", appWebsite: "https://store.steampowered.com/" },
  { id: 1, name: "JustEat", category: "Food", imageUrl: "JustEat.png", appWebsite: "https://www.just-eat.co.uk/" },
  { id: 8, name: "Groww", category: "Finance", imageUrl: "Groww.png", appWebsite: "https://groww.in/" },
  { id: 10, name: "Flipkart",category: "Shopping", imageUrl: "Flipkart.png", appWebsite: "https://www.flipkart.com/" },
  { id: 1, name: "LinkedIn", category: "Social Media", imageUrl: "Linked.png", appWebsite: "https://in.linkedin.com/" },
  { id: 1, name: "Pinterest", category: "Social Media", imageUrl: "Pinterest.png", appWebsite: "https://in.pinterest.com/" },
  { id: 10, name: "Nykaa",category: "Shopping", imageUrl: "Nykaa.png", appWebsite: "https://www.nykaa.com/" },
  { id: 1, name: "Kayak", category: "Travel", imageUrl: "Kayak.png", appWebsite: "https://www.kayak.co.in/" },
  { id: 1, name: "TouchRetouch", category: "Photo and Video", imageUrl: "Touch.png", appWebsite: "https://touchretouch.en.softonic.com/android" },
  { id: 1, name: "Telegram", category: "Social Media", imageUrl: "Telegram.png", appWebsite: "https://telegram.org/" },
  { id: 10, name: "Tata CLiQ",category: "Shopping", imageUrl: "Tata.png", appWebsite: "https://www.tatacliq.com/" },
  { id: 10, name: "Myntra",category: "Shopping", imageUrl: "Myntra.png", appWebsite: "https://www.myntra.com/" },
  { id: 1, name: "Roblox", category: "Games", imageUrl: "Roblox.png", appWebsite: "https://www.roblox.com/" },
  { id: 8, name: "Airtel Money", category: "Finance", imageUrl: "Airtel.png", appWebsite: "https://www.airtel.in/bank/products/airtel-money-wallet" },
  { id: 10, name: "Ajio",category: "Shopping", imageUrl: "Ajio.png", appWebsite: "https://www.ajio.com/" },
  { id: 1, name: "Discord", category: "Social Media", imageUrl: "Discord.png", appWebsite: "https://discord.com/" },
  { id: 1, name: "Prisma", category: "Photo and Video", imageUrl: "Prisma.png", appWebsite: "https://www.prisma.io/" },
  { id: 1, name: "Google Translate", category: "Utility", imageUrl: "googletranslate.png", appWebsite: "https://translate.google.co.in/" },
  { id: 10, name: "LG ThinQ",category: "Shopping", imageUrl: "LG.png", appWebsite: "https://www.lg.com/us/lg-thinq" },
  { id: 10, name: "Snapdeal",category: "Shopping", imageUrl: "Snapdeal.png", appWebsite: "https://www.snapdeal.com/" },
  { id: 10, name: "H&M - we love fashion",category: "Shopping", imageUrl: "H&M.png", appWebsite: "https://www2.hm.com/" },
  { id: 8, name: "CRED", category: "Finance", imageUrl: "CRED.png",appWebsite: "https://cred.club/" },
];

function generateCategoryCards() {
  const categoriesContainer = document.getElementById("categories");

  categoriesData.forEach(category => {
    const card = document.createElement("div");
    card.classList.add("category-card");
    card.innerText = category.name;
    card.addEventListener("click", () => filterAppsByCategory(category.name));
    categoriesContainer.appendChild(card);
  });
}

function generateAppCards(apps) {
  const appListContainer = document.getElementById("appList");
  appListContainer.innerHTML = "";

  apps.forEach(app => {
    const card = document.createElement("div");
    card.classList.add("app-card");
    card.innerHTML = `
      <a href="${app.appWebsite}" target="_blank"> <!-- Add the link to the app's website here -->
        <img src="${app.imageUrl}" alt="${app.name}">
        <h3>${app.name}</h3>
      </a>
    `;
    card.addEventListener("click", () => showAppDetails(app));
    appListContainer.appendChild(card);
  });
}


function filterAppsByCategory(categoryName) {
  const appListContainer = document.getElementById("appList");

  if (categoryName === "All") {
    generateAppCards(appsData); 
  } else {
    const filteredApps = appsData.filter(app => app.category === categoryName);
    generateAppCards(filteredApps);
  }
}


function searchApps() {
  const searchInput = document.getElementById("searchInput");
  const searchTerm = searchInput.value.toLowerCase();
  const filteredApps = appsData.filter(app => app.name.toLowerCase().includes(searchTerm));
  generateAppCards(filteredApps);
}

document.addEventListener("DOMContentLoaded", () => {
  generateCategoryCards();
  generateAppCards(appsData);
});
