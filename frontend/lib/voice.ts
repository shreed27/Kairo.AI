"use client";

export const speak = (text: string, onEnd?: () => void) => {
  if (typeof window === "undefined" || !window.speechSynthesis) return;
  
  window.speechSynthesis.cancel();
  
  const utterance = new SpeechSynthesisUtterance(text);
  
  const setVoice = () => {
    const voices = window.speechSynthesis.getVoices();
    // Try to find a high-quality female voice
    const femaleVoice = voices.find(v => 
      (v.name.toLowerCase().includes('female') || 
       v.name.toLowerCase().includes('google uk english f') ||
       v.name.toLowerCase().includes('samantha') ||
       v.name.toLowerCase().includes('victoria')) && 
      v.lang.includes('en')
    );
    
    if (femaleVoice) {
      utterance.voice = femaleVoice;
    }

    utterance.rate = 1.05;
    utterance.pitch = 1.1;
    utterance.volume = 1;
    
    if (onEnd) {
      utterance.onend = onEnd;
    }
    
    window.speechSynthesis.speak(utterance);
  };

  if (window.speechSynthesis.getVoices().length === 0) {
    window.speechSynthesis.onvoiceschanged = setVoice;
  } else {
    setVoice();
  }
};

export const listen = (onResult: (intent: string) => void, retryCount = 0) => {
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
    console.log("Kairo heard:", text);
    
    const isConfirm = text.includes("yes") || 
                      text.includes("confirm") || 
                      text.includes("book") || 
                      text.includes("order") || 
                      text.includes("sure") || 
                      text.includes("ok") ||
                      text.includes("yeah") ||
                      text.includes("go ahead") ||
                      text.includes("do it");

    const isDismiss = text.includes("no") || 
                      text.includes("cancel") || 
                      text.includes("dismiss") || 
                      text.includes("not now") ||
                      text.includes("stop") || 
                      text.includes("don't");

    if (isConfirm) {
      onResult("confirm");
    } else if (isDismiss) {
      onResult("dismiss");
    } else {
      onResult("unknown");
    }
  };

  recognition.onerror = (event: any) => {
    console.error("Speech recognition error:", event.error);
    
    // Retry on network errors, up to 2 times
    if (event.error === 'network' && retryCount < 2) {
      console.log(`Retrying speech recognition (attempt ${retryCount + 1})...`);
      setTimeout(() => {
        listen(onResult, retryCount + 1);
      }, 1000);
      return;
    }

    onResult("error");
  };

  try {
    recognition.start();
  } catch (e) {
    console.error("Failed to start recognition:", e);
  }
  
  return recognition;
};
