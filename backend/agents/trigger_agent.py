class TriggerAgent:
    def check(self, day, hours, minutes):
        # 1 = Monday, 5 = Friday
        if day == 5 and hours >= 19:
            return {
                "id": "t1",
                "type": "food",
                "title": "Friday Dinner?",
                "message": "You usually order pizza on Friday nights. Luigi's Kitchen has the best deals today!",
                "option": "Pizza from Luigi's",
                "items": ["Margherita Pizza", "Garlic Bread"],
                "rating": 4.8
            }
        if day == 1 and hours == 9 and minutes < 30:
            return {
                "id": "t2",
                "type": "ride",
                "title": "Commute to Razorpay HQ 💼",
                "message": "Heavy traffic near Silk Board. Leaving now will save you 15 minutes.",
                "option": "UberX",
                "live": {"eta": 5, "price": 312}
            }
        return None
