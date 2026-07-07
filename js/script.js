// Cấu hình dữ liệu chính của landing page.
const profile = {
  name: "Trang Hàn Jas Ecopark",
  title: "Ecopark English Realtor",
  bio: "📍183 HOUSING SOLUTIONS\n📍Chuyển nhượng & cho thuê\n📍Leasing - Selling - Homestay",
  avatar: "assets/avatar1.jpg",
  logo: "assets/avatar1.jpg",
  zalo: "https://zalo.me/84398740430",
  whatsapp: "https://wa.me/84398740430",
  facebook: "https://www.facebook.com/TrangHanJasRealtor",
  tiktok: "https://www.tiktok.com/@tranghan.jas",
  instagram: "https://www.instagram.com/183housingsolutions",
  website: "https://183housingsolutions.com",
  email: "Jas.ecopark@gmail.com",
  phone: "+84-3987-404-30",
  youtube: "https://www.youtube.com/@tranghanecopark",
};

// Mỗi mục liên hệ sẽ được render dựa trên cấu hình trên.
const links = [
  {
    key: "zalo",
    label: "Zalo",
    icon: "fa-solid fa-comment-dots",
    subtext: "Nhắn tin nhanh",
  },
  {
    key: "whatsapp",
    label: "WhatsApp",
    icon: "fa-brands fa-whatsapp",
    subtext: "Gọi hoặc chat",
  },
  {
    key: "facebook",
    label: "Facebook",
    icon: "fa-brands fa-facebook-f",
    subtext: "Theo dõi thêm",
  },
  {
    key: "tiktok",
    label: "TikTok",
    icon: "fa-brands fa-tiktok",
    subtext: "Xem nội dung",
  },
  {
    key: "instagram",
    label: "Instagram",
    icon: "fa-brands fa-instagram",
    subtext: "Cập nhật thường xuyên",
  },
  {
    key: "website",
    label: "Website",
    icon: "fa-solid fa-globe",
    subtext: "Xem portfolio",
  },
  {
    key: "email",
    label: "Email",
    icon: "fa-solid fa-envelope",
    subtext: "Gửi thư",
  },
  {
    key: "phone",
    label: "Gọi điện",
    icon: "fa-solid fa-phone",
    subtext: "Liên hệ ngay",
  },
  {
    key: "youtube",
    label: "Youtube",
    icon: "fa-brands fa-youtube",
    subtext: "Subscribe",
  },
];

function getLinkUrl(key) {
  const value = profile[key];

  if (!value) {
    return "";
  }

  if (key === "email") {
    return `mailto:${value}`;
  }

  if (key === "phone") {
    return `tel:${value}`;
  }

  return value;
}

function createLinkElement(linkConfig) {
  const value = profile[linkConfig.key];
  const href = getLinkUrl(linkConfig.key);
  const isDisabled = !href;
  const link = document.createElement("a");
  link.className = `contact-link${isDisabled ? " is-disabled" : ""}`;
  link.href = href;
  link.setAttribute(
    "aria-label",
    `${linkConfig.label} - ${value || "Chưa cập nhật"}`,
  );
  link.target =
    isDisabled || linkConfig.key === "email" || linkConfig.key === "phone"
      ? ""
      : "_blank";
  link.rel = "noopener noreferrer";

  link.innerHTML = `
    <span class="link-main">
      <span class="link-icon"><i class="${linkConfig.icon}"></i></span>
      <span>
        <span class="link-label">${linkConfig.label}</span>
        <span class="link-subtext">${value || "Chưa cập nhật"}</span>
      </span>
    </span>
    <span class="link-arrow"><i class="fa-solid fa-arrow-up-right-from-square"></i></span>
  `;

  return link;
}

function renderProfile() {
  const avatar = document.getElementById("profile-avatar");
  const nameEl = document.getElementById("profile-name");
  const titleEl = document.getElementById("profile-title");
  const bioEl = document.getElementById("profile-bio");
  const linksContainer = document.getElementById("contact-links");

  avatar.src = profile.avatar;
  avatar.alt = `${profile.name} avatar`;
  nameEl.textContent = profile.name;
  titleEl.textContent = profile.title;
  bioEl.textContent = profile.bio;
  document.title = `${profile.name} | ${profile.title}`;

  const metaDescription = document.querySelector('meta[name="description"]');
  if (metaDescription) {
    metaDescription.setAttribute(
      "content",
      `${profile.bio} Kết nối nhanh qua các kênh liên hệ.`,
    );
  }

  linksContainer.innerHTML = "";
  links.forEach((item) => {
    linksContainer.appendChild(createLinkElement(item));
  });
}

window.addEventListener("DOMContentLoaded", () => {
  renderProfile();
  document.body.classList.add("ready");
});
