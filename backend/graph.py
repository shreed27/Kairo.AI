from typing import TypedDict, List, Optional
from langgraph.graph import StateGraph, END
from agents.memory_agent import MemoryAgent
from agents.trigger_agent import TriggerAgent
from agents.data_agent import DataAgent
from agents.decision_agent import DecisionAgent

class KairoState(TypedDict):
    context: dict
    memory: dict
    trigger: dict
    data: dict
    decision: dict
    user_input: Optional[str]
    action: Optional[str]
    history: List[dict]

class KairoGraph:
    def __init__(self):
        self.memory_agent = MemoryAgent()
        self.trigger_agent = TriggerAgent()
        self.data_agent = DataAgent()
        self.decision_agent = DecisionAgent()
        self.workflow = self._create_graph()

    def _trigger_node(self, state: KairoState):
        trigger = self.trigger_agent.evaluate(state["context"], state["memory"])
        return {"trigger": trigger}

    def _data_node(self, state: KairoState):
        if not state["trigger"].get("should_trigger"):
            return state
        data = self.data_agent.fetch(state["trigger"]["type"])
        return {"data": data}

    def _decision_node(self, state: KairoState):
        if not state["trigger"].get("should_trigger"):
            return state
        decision = self.decision_agent.generate(
            state["context"], 
            state["memory"], 
            state["data"], 
            state["trigger"]
        )
        return {"decision": decision}

    def _should_continue(self, state: KairoState):
        if state["trigger"].get("should_trigger"):
            return "data"
        return END

    def _create_graph(self):
        graph = StateGraph(KairoState)

        graph.add_node("trigger", self._trigger_node)
        graph.add_node("data", self._data_node)
        graph.add_node("decision", self._decision_node)

        graph.set_entry_point("trigger")

        graph.add_conditional_edges(
            "trigger",
            self._should_continue,
            {
                "data": "data",
                END: END
            }
        )

        graph.add_edge("data", "decision")
        graph.add_edge("decision", END)

        return graph.compile()

    def run(self, context: dict):
        initial_state = {
            "context": context,
            "memory": self.memory_agent.get(context),
            "trigger": {},
            "data": {},
            "decision": {},
            "user_input": None,
            "action": None,
            "history": []
        }
        return self.workflow.invoke(initial_state)
