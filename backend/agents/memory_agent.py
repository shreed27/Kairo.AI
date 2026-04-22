class MemoryAgent:
    def __init__(self):
        self.history = []

    def save(self, event):
        self.history.append(event)

    def get_habits(self):
        # Analyze history to find patterns
        return ["Friday Pizza", "Morning Commute"]
