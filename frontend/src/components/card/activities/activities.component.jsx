import "./activities.style.css";

const ActivitiesCard = () => {
  return (
    <div className="activities-card-main">
      <h3 className="activities-card-header">Activities</h3>
      <div className="activities-card-contents">
        <p className="activities-card-activity">
          <span>Emaily sent $300.</span><span className="activities-card-activity-date">17/09/2024</span>
        </p>
        <p className="activities-card-activity">
          <span>Akash sent $150.</span><span className="activities-card-activity-date">17/09/2024</span>
        </p>
        <p className="activities-card-activity">
          <span>Paid $50 to Airtel Ltd.</span><span className="activities-card-activity-date">17/09/2024</span>
        </p>
        <p className="activities-card-activity">
          <span>Paid $220 to Southern Thali.</span><span className="activities-card-activity-date">17/09/2024</span>
        </p>
        <p className="activities-card-activity">
          <span>Abhishek sent $70.</span><span className="activities-card-activity-date">17/09/2024</span>
        </p>
        <p className="activities-card-activity">
          <span>Paid $45 to Muffin Shop.</span><span className="activities-card-activity-date">17/09/2024</span>
        </p>
      </div>
    </div>
  );
};

export default ActivitiesCard;