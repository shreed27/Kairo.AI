from agents.decision_agent import DecisionAgent
from agents.data_agent import DataAgent
from agents.memory_agent import MemoryAgent
from agents.trigger_agent import TriggerAgent

class Orchestrator:
    def __init__(self):
        self.decision = DecisionAgent()
        self.data = DataAgent()
        self.memory = MemoryAgent()
        self.trigger = TriggerAgent()

    async def check_trigger(self, day, hours, minutes):
        # Logic to check if any habit triggers a suggestion
        return self.trigger.check(day, hours, minutes)

    async def handle_query(self, text, context):
        # Main entry for voice queries
        return {"response": f"I'm looking into {text} for you."}
