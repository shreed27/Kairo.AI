import asyncio
import json

class VoiceStreamManager:
    def __init__(self):
        self.is_speaking = False
        self.persona = {
            "style": "calm, intelligent, helpful friend",
            "tone": "warm but not overly emotional",
            "voice_settings": {
                "stability": 0.5,
                "similarity_boost": 0.6
            }
        }

    async def stream_tts(self, text: str):
        """Streaming TTS following natural pauses."""
        print(f"Kairo Voice Output: {text}")
        self.is_speaking = True
        
        # Simulate natural pauses based on punctuation
        segments = text.replace("—", ". ").replace("...", ". ").split(". ")
        for segment in segments:
            if not self.is_speaking: break
            
            words = segment.split()
            for word in words:
                if not self.is_speaking: break
                await asyncio.sleep(0.2) # Base speaking rate
            
            if self.is_speaking:
                await asyncio.sleep(0.4) # Natural pause at end of sentence
            
        self.is_speaking = False

    def get_interruption_response(self):
        """Specific response when user interrupts."""
        return "Okay, got it—what would you like instead?"

    def interrupt(self):
        """Interrupt logic."""
        self.is_speaking = False
        return self.get_interruption_response()

    async def handle_mic_stream(self, partial_text: str):
        """Barge-in detection."""
        if len(partial_text.split()) >= 1 and self.is_speaking:
            # Immediate interruption if user speaks during TTS
            response = self.interrupt()
            return {"status": "interrupted", "response": response}
            
        return {"status": "listening"}

    def parse_intent(self, text: str):
        """Parser for conversation intents."""
        text = text.lower()
        if any(w in text for w in ["yes", "confirm", "yeah", "sure", "book", "order"]):
            return "confirm"
        if any(w in text for w in ["no", "dismiss", "wait", "cancel", "actually", "instead"]):
            return "modify" # Following the rule: 'modify' leads to 'what would you like instead'
        return "unknown"
