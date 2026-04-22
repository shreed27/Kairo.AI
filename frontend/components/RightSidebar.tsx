import { Calendar as CalendarIcon, Dumbbell, Utensils, IndianRupee, Flame, Clock, Car } from 'lucide-react';

export default function RightSidebar() {
  return (
    <aside className="right-sidebar">
      <div className="widget">
        <div className="widget-header">
          <h4>Upcoming</h4>
          <a href="#">View all</a>
        </div>
        <div className="widget-list">
          <div className="widget-item">
            <div className="widget-icon purple">
              <CalendarIcon size={16} />
            </div>
            <div className="widget-text">
              <h5>Team Standup</h5>
              <p>9:30 AM • Tomorrow</p>
            </div>
          </div>
          <div className="widget-item">
            <div className="widget-icon green">
              <Dumbbell size={16} />
            </div>
            <div className="widget-text">
              <h5>Gym Session</h5>
              <p>6:00 PM • Tomorrow</p>
            </div>
          </div>
        </div>
      </div>

      <div className="widget">
        <div className="widget-header">
          <h4>Your Preferences</h4>
          <a href="#">Edit</a>
        </div>
        <div className="widget-list">
          <div className="widget-item">
            <div className="widget-icon purple">
              <Utensils size={16} />
            </div>
            <div className="widget-text">
              <h5>Cuisine</h5>
              <p>Italian, Pizza, Burgers</p>
            </div>
          </div>
          <div className="widget-item">
            <div className="widget-icon green">
              <IndianRupee size={16} />
            </div>
            <div className="widget-text">
              <h5>Budget</h5>
              <p>₹300 - ₹600</p>
            </div>
          </div>
          <div className="widget-item">
            <div className="widget-icon orange">
              <Flame size={16} />
            </div>
            <div className="widget-text">
              <h5>Spice Level</h5>
              <p>Medium</p>
            </div>
          </div>
        </div>
      </div>

      <div className="widget">
        <div className="widget-header">
          <h4>Recent Activity</h4>
          <a href="#">View all</a>
        </div>
        <div className="widget-list">
          <div className="widget-item">
            <div className="widget-icon image">
              <img src="https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=150&auto=format&fit=crop" alt="Pizza" />
            </div>
            <div className="widget-text">
              <h5>Ordered from Luigi's</h5>
              <p>Apr 19 • 8:15 PM</p>
            </div>
          </div>
          <div className="widget-item">
            <div className="widget-icon purple">
              <Car size={16} />
            </div>
            <div className="widget-text">
              <h5>Ola Ride to Office</h5>
              <p>Apr 21 • 9:05 AM</p>
            </div>
          </div>
        </div>
      </div>

      <div className="bottom-tag">
        Speak naturally, I understand ✨
      </div>
    </aside>
  );
}
