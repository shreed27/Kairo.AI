class DecisionAgent:
    def analyze(self, data):
        # Rank options based on price and ETA
        return sorted(data, key=lambda x: x['price'])
