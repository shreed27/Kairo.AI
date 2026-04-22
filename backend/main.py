from fastapi import FastAPI, WebSocket
from fastapi.middleware.cors import CORSMiddleware
import uvicorn
from orchestrator import Orchestrator

app = FastAPI()
orchestrator = Orchestrator()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/trigger")
async def trigger(day: int, hours: int, minutes: int):
    return await orchestrator.check_trigger(day, hours, minutes)

@app.post("/query")
async def query(data: dict):
    return await orchestrator.handle_query(data["text"], data.get("context"))

if __name__ == "__main__":
    uvicorn.run(app, host="0.0.0.0", port=8000)
