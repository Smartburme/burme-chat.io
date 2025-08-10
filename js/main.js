import { getAuth, signOut } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-auth.js";
import {
  getFirestore,
  collection,
  addDoc,
  onSnapshot,
  query,
  orderBy,
  serverTimestamp,
} from "https://www.gstatic.com/firebasejs/9.23.0/firebase-firestore.js";
import { getStorage, ref, uploadBytes, getDownloadURL } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-storage.js";

const auth = getAuth();
const db = getFirestore();
const storage = getStorage();

const chatMessages = document.getElementById("chatMessages");
const chatForm = document.getElementById("chatForm");
const chatInput = document.getElementById("chatInput");
const imageUpload = document.getElementById("imageUpload");
const btnLogout = document.getElementById("btnLogout");

let currentUser = null;
let activeChatRoom = "friends"; // default to friends chat

// Logout button
btnLogout.addEventListener("click", async () => {
  await signOut(auth);
  window.location.href = "./index.html";
});

// Monitor auth state
auth.onAuthStateChanged((user) => {
  if (user) {
    currentUser = user;
    listenMessages();
  } else {
    window.location.href = "./index.html";
  }
});

// Listen for chat messages in realtime (friends chat only for now)
function listenMessages() {
  const messagesRef = collection(db, "messages", activeChatRoom, "chats");
  const q = query(messagesRef, orderBy("timestamp", "asc"));

  onSnapshot(q, (snapshot) => {
    chatMessages.innerHTML = "";
    snapshot.forEach((doc) => {
      const data = doc.data();
      displayMessage(data);
    });
    chatMessages.scrollTop = chatMessages.scrollHeight;
  });
}

// Display a single message in chat box
function displayMessage(data) {
  const div = document.createElement("div");
  div.classList.add("message");

  if (data.uid === currentUser.uid) {
    div.classList.add("sent");
  } else {
    div.classList.add("received");
  }

  if (data.type === "image") {
    const img = document.createElement("img");
    img.src = data.content;
    img.alt = "Uploaded image";
    div.appendChild(img);
  } else {
    div.textContent = data.content;
  }

  chatMessages.appendChild(div);
}

// Handle sending message
chatForm.addEventListener("submit", async (e) => {
  e.preventDefault();
  const text = chatInput.value.trim();
  if (!text) return;

  await sendMessage({ type: "text", content: text });
  chatInput.value = "";
});

// Handle image upload
imageUpload.addEventListener("change", async (e) => {
  const file = e.target.files[0];
  if (!file) return;

  const fileRef = ref(storage, `uploads/${currentUser.uid}/${Date.now()}_${file.name}`);
  try {
    const snapshot = await uploadBytes(fileRef, file);
    const url = await getDownloadURL(snapshot.ref);
    await sendMessage({ type: "image", content: url });
  } catch (error) {
    alert("ပုံတင်မှု မအောင်မြင်ပါ");
    console.error(error);
  }
  imageUpload.value = ""; // reset input
});

// Send message to Firestore
async function sendMessage({ type, content }) {
  const messagesRef = collection(db, "messages", activeChatRoom, "chats");
  try {
    await addDoc(messagesRef, {
      uid: currentUser.uid,
      content,
      type,
      timestamp: serverTimestamp(),
    });
  } catch (error) {
    alert("Message ပို့ရန် မအောင်မြင်ပါ");
    console.error(error);
  }
                       }
