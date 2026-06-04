const WHATSAPP_NUMBER = "573241152076";
const STORAGE_KEY = "merakiOnlineCart";

const products = [
  {
    category: "Hamburguesas",
    name: "Clasica",
    description: "Carne de hamburguesa, queso, tomate, cebolla y lechuga. Incluye papas.",
    badge: "Con papas",
    options: [{ label: "Unidad", price: 16000 }]
  },
  {
    category: "Hamburguesas",
    name: "Doble carne",
    description: "Dos carnes de hamburguesa, queso, tomate, cebolla y lechuga. Incluye papas.",
    badge: "Doble",
    options: [{ label: "Unidad", price: 20000 }]
  },
  {
    category: "Hamburguesas",
    name: "Remakia",
    description: "Carne de hamburguesa, tocineta, chorizo, pollo, queso, tomate, cebolla grille y lechuga. Incluye papas.",
    badge: "Casa",
    options: [{ label: "Unidad", price: 26000 }]
  },
  {
    category: "Perros",
    name: "Perro sencillo",
    description: "Salchicha zenu, pan bimbo y lo armas con lo que desees.",
    badge: "Clasico",
    options: [{ label: "Unidad", price: 12000 }]
  },
  {
    category: "Perros",
    name: "Perro americano",
    description: "Salchicha americana zenu, pan bimbo y lo armas con lo que desees.",
    badge: "Americano",
    options: [{ label: "Unidad", price: 13000 }]
  },
  {
    category: "Salchipapas",
    name: "Salchipapa",
    description: "Papa, salchicha, lechuga, tomate, cebolla grille y queso costeno.",
    badge: "X2",
    options: [{ label: "X2", price: 24000 }]
  },
  {
    category: "Salchipapas",
    name: "Salchichoripapa",
    description: "Papa, salchicha, chorizo, lechuga, tomate, cebolla grille y queso costeno.",
    badge: "X2",
    options: [{ label: "X2", price: 28000 }]
  },
  {
    category: "Picadas",
    name: "Picada Remakia",
    description: "Papa, pollo, tocineta, carne, chorizo, tomate, cebolla grille, lechuga y queso costeno.",
    badge: "Para compartir",
    options: [
      { label: "X2", price: 36000 },
      { label: "X4", price: 70000 }
    ]
  },
  {
    category: "Adiciones",
    name: "Porcion de papa",
    description: "Porcion adicional de papas.",
    badge: "Adicion",
    options: [{ label: "Porcion", price: 5000 }]
  }
];

const state = {
  category: "Todos",
  query: "",
  cart: loadCart()
};

const formatter = new Intl.NumberFormat("es-CO", {
  style: "currency",
  currency: "COP",
  maximumFractionDigits: 0
});

const categoryTabs = document.querySelector("#categoryTabs");
const productGrid = document.querySelector("#productGrid");
const searchInput = document.querySelector("#searchInput");
const cartLines = document.querySelector("#cartLines");
const cartCount = document.querySelector("#cartCount");
const cartTotalEl = document.querySelector("#cartTotal");
const checkoutTotal = document.querySelector("#checkoutTotal");
const mobileTotal = document.querySelector("#mobileTotal");
const cartChip = document.querySelector("#cartChip");
const mobileCartBtn = document.querySelector("#mobileCartBtn");
const cartBackdrop = document.querySelector("#cartBackdrop");
const closeCartBtn = document.querySelector("#closeCartBtn");
const orderForm = document.querySelector("#orderForm");
const formNote = document.querySelector("#formNote");
const orderDialog = document.querySelector("#orderDialog");
const menuZoomBtn = document.querySelector("#menuZoomBtn");
const menuDialog = document.querySelector("#menuDialog");
const closeMenuDialogBtn = document.querySelector("#closeMenuDialogBtn");
const dialogText = document.querySelector("#dialogText");
const orderMessage = document.querySelector("#orderMessage");
const whatsappLink = document.querySelector("#whatsappLink");
const copyOrderBtn = document.querySelector("#copyOrderBtn");
const closeDialogBtn = document.querySelector("#closeDialogBtn");

function escapeHtml(value) {
  return String(value ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function normalizeText(value) {
  return String(value || "")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .trim();
}

function categories() {
  return ["Todos", ...new Set(products.map(product => product.category))];
}

function visibleProducts() {
  const query = normalizeText(state.query);
  return products.filter(product => {
    const categoryMatch = state.category === "Todos" || product.category === state.category;
    if (!categoryMatch) return false;
    if (!query) return true;
    const haystack = normalizeText([
      product.category,
      product.name,
      product.description,
      product.badge,
      product.options.map(option => option.label).join(" ")
    ].join(" "));
    return query.split(/\s+/).filter(Boolean).every(term => haystack.includes(term));
  });
}

function cartTotal() {
  return state.cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
}

function cartItemCount() {
  return state.cart.reduce((sum, item) => sum + item.quantity, 0);
}

function saveCart() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state.cart));
}

function loadCart() {
  try {
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]");
    return Array.isArray(saved) ? saved : [];
  } catch (_error) {
    return [];
  }
}

function addToCart(productIndex, optionIndex) {
  const product = products[productIndex];
  const option = product?.options[optionIndex];
  if (!product || !option) return;
  const id = `${product.name}-${option.label}`;
  const existing = state.cart.find(item => item.id === id);
  if (existing) {
    existing.quantity += 1;
  } else {
    state.cart.push({
      id,
      productIndex,
      optionIndex,
      name: product.name,
      option: option.label,
      price: option.price,
      quantity: 1
    });
  }
  saveCart();
  renderCart();
  if (isMobileCheckout()) {
    document.body.classList.add("cart-open");
  }
}

function updateQuantity(id, delta) {
  const item = state.cart.find(line => line.id === id);
  if (!item) return;
  item.quantity += delta;
  state.cart = state.cart.filter(line => line.quantity > 0);
  saveCart();
  renderCart();
}

function isMobileCheckout() {
  return window.matchMedia("(max-width: 980px)").matches;
}

function openCart() {
  if (isMobileCheckout()) {
    document.body.classList.add("cart-open");
    return;
  }
  document.querySelector(".checkout").scrollIntoView({ behavior: "smooth", block: "start" });
}

function closeCart() {
  document.body.classList.remove("cart-open");
}

function renderTabs() {
  categoryTabs.innerHTML = categories().map(category => {
    const active = category === state.category ? "active" : "";
    return `<button class="${active}" type="button" data-category="${escapeHtml(category)}">${escapeHtml(category)}</button>`;
  }).join("");
}

function renderProducts() {
  const visible = visibleProducts();
  productGrid.innerHTML = visible.length ? visible.map(product => {
    const productIndex = products.indexOf(product);
    return `
      <article class="product-card">
        <div class="product-top">
          <h3>${escapeHtml(product.name)}</h3>
          <span class="badge">${escapeHtml(product.badge)}</span>
        </div>
        <p>${escapeHtml(product.description)}</p>
        <div class="options">
          ${product.options.map((option, optionIndex) => `
            <div class="option-row">
              <span>${escapeHtml(option.label)}</span>
              <strong>${formatter.format(option.price)}</strong>
              <button type="button" aria-label="Agregar ${escapeHtml(product.name)} ${escapeHtml(option.label)}" data-add="${productIndex}:${optionIndex}">+</button>
            </div>
          `).join("")}
        </div>
      </article>
    `;
  }).join("") : `
    <div class="empty">No hay productos para esa busqueda.</div>
  `;
}

function renderCart() {
  const total = cartTotal();
  const count = cartItemCount();
  cartCount.textContent = String(count);
  cartTotalEl.textContent = formatter.format(total);
  checkoutTotal.textContent = formatter.format(total);
  mobileTotal.textContent = formatter.format(total);
  cartChip.setAttribute("aria-label", `Carrito con ${count} productos y total ${formatter.format(total)}`);

  cartLines.innerHTML = state.cart.length ? state.cart.map(item => `
    <div class="cart-line">
      <div>
        <strong>${escapeHtml(item.quantity)} x ${escapeHtml(item.name)}</strong>
        <small>${escapeHtml(item.option)} · ${formatter.format(item.price)} c/u</small>
      </div>
      <div class="cart-actions">
        <button type="button" aria-label="Quitar uno" data-qty="${escapeHtml(item.id)}:-1">-</button>
        <button type="button" aria-label="Agregar uno" data-qty="${escapeHtml(item.id)}:1">+</button>
      </div>
    </div>
  `).join("") : `
    <div class="cart-empty">Agrega productos de la carta para preparar el pedido.</div>
  `;
}

function buildOrderMessage(formData) {
  const lines = state.cart.map(item => {
    const subtotal = item.quantity * item.price;
    return `- ${item.quantity} x ${item.name} (${item.option}) ${formatter.format(subtotal)}`;
  }).join("\n");

  return [
    "Hola Meraki, quiero hacer este pedido:",
    "",
    lines,
    "",
    `Total: ${formatter.format(cartTotal())}`,
    "",
    `Nombre: ${formData.get("name") || "No indicado"}`,
    `Celular: ${formData.get("phone") || "No indicado"}`,
    `Entrega: ${formData.get("delivery") || "Domicilio"}`,
    `Direccion/indicaciones: ${formData.get("address") || "No indicado"}`,
    `Notas: ${formData.get("notes") || "Sin notas"}`
  ].join("\n");
}

function prepareOrder(event) {
  event.preventDefault();
  formNote.textContent = "";
  if (!state.cart.length) {
    formNote.textContent = "Agrega al menos un producto.";
    return;
  }

  const data = new FormData(orderForm);
  const message = buildOrderMessage(data);
  orderMessage.value = message;

  if (WHATSAPP_NUMBER) {
    whatsappLink.hidden = false;
    whatsappLink.href = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
    dialogText.textContent = "Revisa el mensaje y envialo por WhatsApp.";
  } else {
    whatsappLink.hidden = true;
    dialogText.textContent = "No hay numero de WhatsApp configurado. Puedes copiar el mensaje y enviarlo manualmente.";
  }

  closeCart();
  orderDialog.showModal();
}

function renderAll() {
  renderTabs();
  renderProducts();
  renderCart();
}

categoryTabs.addEventListener("click", event => {
  const button = event.target.closest("[data-category]");
  if (!button) return;
  state.category = button.dataset.category;
  renderTabs();
  renderProducts();
});

productGrid.addEventListener("click", event => {
  const button = event.target.closest("[data-add]");
  if (!button) return;
  const [productIndex, optionIndex] = button.dataset.add.split(":").map(Number);
  addToCart(productIndex, optionIndex);
});

cartLines.addEventListener("click", event => {
  const button = event.target.closest("[data-qty]");
  if (!button) return;
  const [id, delta] = button.dataset.qty.split(":");
  updateQuantity(id, Number(delta));
});

searchInput.addEventListener("input", event => {
  state.query = event.target.value;
  renderProducts();
});

cartChip.addEventListener("click", () => {
  openCart();
});

mobileCartBtn.addEventListener("click", () => {
  openCart();
});

cartBackdrop.addEventListener("click", closeCart);
closeCartBtn.addEventListener("click", closeCart);

menuZoomBtn.addEventListener("click", () => {
  menuDialog.showModal();
});

closeMenuDialogBtn.addEventListener("click", () => menuDialog.close());

menuDialog.addEventListener("click", event => {
  if (event.target === menuDialog) {
    menuDialog.close();
  }
});

window.addEventListener("resize", () => {
  if (!isMobileCheckout()) {
    closeCart();
  }
});

orderForm.addEventListener("submit", prepareOrder);

copyOrderBtn.addEventListener("click", async () => {
  try {
    await navigator.clipboard.writeText(orderMessage.value);
  } catch (_error) {
    orderMessage.focus();
    orderMessage.select();
    document.execCommand("copy");
  }
  copyOrderBtn.textContent = "Copiado";
  window.setTimeout(() => {
    copyOrderBtn.textContent = "Copiar";
  }, 1300);
});

closeDialogBtn.addEventListener("click", () => orderDialog.close());

renderAll();
