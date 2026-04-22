import random

class DataAgent:
    def fetch(self, type):
        if type == "ride":
            is_heavy = random.random() > 0.5
            return {
                "options": [
                    {"name": "UberX", "price": 312, "eta": 5},
                    {"name": "Uber Pool", "price": 185, "eta": 8},
                    {"name": "Uber Black", "price": 540, "eta": 3}
                ],
                "delay": random.randint(10, 20) if is_heavy else 0,
                "source": "live",
                "reason": "Traffic is higher today" if is_heavy else None
            }
        if type == "food":
            is_busy = random.random() > 0.7
            return {
                "options": [
                    {
                        "name": "Luigi's Pizza", 
                        "items": ["Margherita Pizza (Large)", "Garlic Bread"],
                        "price": 358, 
                        "eta": 35,
                        "rating": 4.8,
                        "image": "https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=1500&auto=format&fit=crop"
                    },
                    {
                        "name": "Burger King", 
                        "items": ["Whopper Meal", "Onion Rings"],
                        "price": 245, 
                        "eta": 20,
                        "rating": 4.2,
                        "image": "https://images.unsplash.com/photo-1571091718767-18b5b1457add?q=80&w=1500&auto=format&fit=crop"
                    }
                ],
                "delay": random.randint(15, 30) if is_busy else 5,
                "source": "live"
            }
        return {"source": "estimated"}
