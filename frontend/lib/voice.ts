"use client";

export const speak = (text: string) => {
  if (typeof window === "undefined" || !window.speechSynthesis) return;
  
  window.speechSynthesis.cancel();
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.rate = 1.0;
  utterance.pitch = 1.0;
  window.speechSynthesis.speak(utterance);
};

export const listen = (onResult: (intent: string) => void) => {
  if (typeof window === "undefined") return;
  
  const SpeechRecognition = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
  if (!SpeechRecognition) {
    console.error("Speech recognition not supported");
    return;
  }

  const recognition = new SpeechRecognition();
  recognition.lang = 'en-US';
  recognition.continuous = false;
  recognition.interimResults = false;

  recognition.onresult = (event: any) => {
    const text = event.results[0][0].transcript.toLowerCase();
    console.log("Heard:", text);
    
    if (text.includes("yes") || text.includes("confirm") || text.includes("order") || text.includes("book")) {
      onResult("confirm");
    } else if (text.includes("no") || text.includes("dismiss") || text.includes("cancel")) {
      onResult("dismiss");
    } else {
      onResult("unknown");
    }
  };

  recognition.start();
  return recognition;
};
